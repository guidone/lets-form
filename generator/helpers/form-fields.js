import { useState, useEffect, useRef, useCallback } from 'react';
import _ from 'lodash';

import { upgradeFields } from './upgrade-fields';
import { collectTransformers } from './collect-transformers';
import { traverseChildren } from './dsl';
import { applyTransformers } from '../../helpers/apply-transformers';

/**
 * mergeReRenders
 * Merge re-renders schedule
 * @param {*} currentReRenders
 * @param {*} newReRenders
 */
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
  setValue
}) => {
  // state form fields
  const [formFields, setFormFields] = useState(collectFields({ form, children, framework, components }));
  // store transformers
  const [transformers, setTransformers] = useState(null);
  // keep track of components to be re-rendered, update it without re-render the component
  const rerenders = useRef({});

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
        mutableState.current.currentFormContext = {
          ...mutableState.current.currentFormContext,
          ...formContext
        };

        // collect fields from json and dsl
        let newFields = collectFields({ form, children, framework });
        const formName = mutableState.current.currentFormContext?.formName;
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
            mutableState.current.currentFormContext,
            components
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

        mutableState.current.currentFormContext.formName = formName ?? _.uniqueId('form_');
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

  const hasTransformer = useCallback(
    fieldName => {
      return transformers && transformers.onChange != null && !_.isEmpty(transformers.onChange[fieldName]);
    },
    [transformers]
  );

  const executeTransformer = useCallback(
    async (transformer, values, { followTransformers = true } = {}) => {
      // store current instance of fields
      let newFields = formFields;
      const formName = mutableState.current.currentFormContext?.formName;
      const currentFormContext = mutableState.current.currentFormContext;

      // execute the async generator transformer
      for await(const transformResult of applyTransformers(
        formName,
        framework,
        newFields,
        transformer,
        values,
        onJavascriptError,
        currentFormContext,
        components
      )) {
        const { fields: newFormFields, rerenders: newReRenders, changes } = transformResult;

        // merge re-renders request to the current ones, in a useRef, must per persisted like a state
        // but doesnt' have to trigger a new render
        mergeReRenders(rerenders.current, newReRenders);

        // if there are form value changes, apply it, this will cause the specific field to be refreshed
        // and un-mounted / re-mounted if the component is statefull and needs to be reset completely
        // at this point the re-renders request are already collected
        if (changes) {
          let idx, changedFields = Object.keys(changes);
          for(idx = 0; idx < changedFields.length; idx++) {
            const fieldToChange = changedFields[idx];
            setValue(changedFields[idx], changes[changedFields[idx]]);
            // if the changed field has a transformer, then execute it
            // don't go beyond second level to avoid infinte loops
            if (hasTransformer(fieldToChange) && followTransformers) {
              await executeTransformer(
                transformers.onChange[fieldToChange],
                { ...values, ...changes }
              );
            }
          }
        }

        // if different instances, then fields descriptions are changed, set it, this will cause a
        // form re-render
        if (newFormFields !== newFields) {
          newFields = newFormFields
          setFormFields(newFormFields);
        }
      }
    },
    [transformers, formFields]
  );

  return {
    formFields,
    transformers,
    setFormFields,
    currentFormContext: mutableState.current.currentFormContext,
    formName: mutableState.current.currentFormContext?.formName,
    hasTransformer,
    executeTransformer,
    rerenders
  };
};

export { useFormFields };
