import { useState, useEffect } from 'react';
import _ from 'lodash';

import { upgradeFields } from './upgrade-fields';
import { collectTransformers } from './collect-transformers';
import { traverseChildren } from './dsl';
import { applyTransformers } from '../../helpers/apply-transformers';

// TODO move
const mergeReRenders = (currentReRenders, newReRenders) => {
  if (newReRenders) {
    Object.keys(newReRenders)
      .forEach(key => currentReRenders[key] = currentReRenders[key] ?
        currentReRenders[key] + newReRenders[key] : newReRenders[key]);
  };
};


const collectFields = ({ form, children, framework, components }) => {
  const fields = form.fields;
  const traversedFields = traverseChildren(children, { components, framework });

  const combinedFields = !_.isEmpty(traversedFields) ?
    [...(fields ?? []), ...traverseChildren(children, { components, framework })] : fields;

  return upgradeFields(combinedFields, form.version);
};

/**
 * useFormFields
 * Handle the concern of the current fields of the form. Fields may come from json or the DSL, also some
 * props may be changed by a Form Script.
 * This makes "formFields" referentially stable
 *
 * @param {*} param0
 * @returns
 */
const useFormFields = ({
  components,
  framework,
  form,
  children,
  onJavascriptError,
  defaultValues,

  // refactor below
  formContext,
  mutableState,
  setFormName,
  formName,
  setValue,
  rerenders // TODO move this
}) => {
  // it's the combination of the fields from the form schema and those specified
  // with the DSL, from now on every func should reference this (not form.fields)
  // also upgrade fields if older version of the form
  /*const initialFields = upgradeFields(
    [
      ...(form.fields ?? []),
      ...traverseChildren(children, { components, framework })
    ],
    form.version
  );*/
  // state form fields
  const [formFields, setFormFields] = useState(collectFields({ form, children, framework, components }));
  // store transformers
  const [transformers, setTransformers] = useState(null);


  useEffect(
    () => {

      console.log('--------- creating new fields')

      const f = async () => {


        // update the mutable state
        mutableState.current.currentContext = {
          ...mutableState.current.currentContext,
          ...formContext
        };

        // initial fields values
        // TODO here is the problem
        //let newFields = actualFields;
        //let newFields = formFields;

        // TODO move this!!!
        let newFields = collectFields({ form, children, framework });

        //const newTransformers = collectTransformers(actualFields, form.transformer || form.script, onJavascriptError);
        const newTransformers = collectTransformers(newFields, form.transformer || form.script, onJavascriptError);
        //console.log('newTransformers', newTransformers, 'from', newFields)

        // collect all transformers to be executed
        const transformersToRun = Object.keys(newTransformers.onChange || {})
          .filter(fieldName => !_.isEmpty(newTransformers.onChange[fieldName]))
          .reduce(
            (acc, fieldName) => [...acc, newTransformers.onChange[fieldName]],
            !_.isEmpty(newTransformers.onRender) ? [newTransformers.onRender] : []
          );

        //  console.log('transformersToRun', transformersToRun)

        // execute all onChange transformers at the bootstrap of the form
        for(let idx = 0; idx < transformersToRun.length; idx++) {
          for await(const transformResult of applyTransformers(
            formName,
            framework,
            newFields,
            transformersToRun[idx],
            defaultValues,
            onJavascriptError,
            mutableState.current.currentContext
          )) {
            const { fields: newFormFields, rerenders: newReRenders, changes } = transformResult;
            mergeReRenders(rerenders.current, newReRenders);
            if (newFormFields !== newFields) {
              newFields = newFormFields
              setFormFields(newFormFields);
            }
            if (changes) {
              Object.keys(changes).forEach(key => setValue(key, changes[key]));
            }
          }
        }

        setFormName(form.name ?? _.uniqueId('form_'));
        setTransformers(newTransformers);

        // if transformed fields different than current one, then save
        if (newFields !== formFields) {
          setFormFields(newFields);
        }
      }
      f();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form, framework, children, formContext] // don't put defaultValues here
  );



  return {
    formFields,
    transformers,
    setFormFields
  };
};

export { useFormFields };
