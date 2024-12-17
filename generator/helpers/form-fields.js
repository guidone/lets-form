import { useState, useEffect, useRef } from 'react';
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

/**
 * collectFields
 * it's the combination of the fields from the form schema and those specified
 * with the DSL, from now on every func should reference this (not form.fields)
 * also upgrade fields if older version of the form
 * @param {*} param0
 * @returns
 */
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
  formContext,
  locale,

  // refactor below
  setValue,
  rerenders // TODO move this
}) => {
  // state form fields
  const [formFields, setFormFields] = useState(collectFields({ form, children, framework, components }));
  // store transformers
  const [transformers, setTransformers] = useState(null);

  const mutableState = useRef({
    currentFormContext: {
      locales: form.locales,
      locale: locale,
      formName: form.name ?? _.uniqueId('form_'),
      ...formContext
    }
  });

  useEffect(
    () => {
      const f = async () => {

        // update the mutable state, will be used inside transformers
        mutableState.current.currentContext = {
          ...mutableState.current.currentContext,
          ...formContext
        };

        // collect fields from json and dsl
        let newFields = collectFields({ form, children, framework });
        const formName = mutableState.current.currentContext?.formName;
        const newTransformers = collectTransformers(newFields, form.transformer || form.script, onJavascriptError);

        // collect all transformers to be executed
        const transformersToRun = Object.keys(newTransformers.onChange || {})
          .filter(fieldName => !_.isEmpty(newTransformers.onChange[fieldName]))
          .reduce(
            (acc, fieldName) => [...acc, newTransformers.onChange[fieldName]],
            !_.isEmpty(newTransformers.onRender) ? [newTransformers.onRender] : []
          );

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

        // set new form name
        mutableState.current.currentContext = form.name ?? _.uniqueId('form_');
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
    setFormFields,
    currentFormContext: mutableState.current.currentFormContext,
    formName: mutableState.current.currentFormContext?.formName
  };
};

export { useFormFields };
