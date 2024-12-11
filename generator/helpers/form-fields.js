import { useState } from 'react';

import { upgradeFields } from './upgrade-fields';
import { traverseChildren } from './dsl';

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
  children
}) => {
  // it's the combination of the fields from the form schema and those specified
  // with the DSL, from now on every func should reference this (not form.fields)
  // also upgrade fields if older version of the form
  const initialFields = upgradeFields(
    [
      ...(form.fields ?? []),
      ...traverseChildren(children, { components, framework })
    ],
    form.version
  );
  // state for fields
  const [formFields, setFormFields] = useState(initialFields);


  return {
    formFields,
    setFormFields
  };
};

export { useFormFields };
