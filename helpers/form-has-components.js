import { reduceFields } from './reduce-fields';

const formHasComponents = (form, component) => {
  const components = Array.isArray(component) ? component : [component];

  const result = reduceFields(
    form.fields,
    (field, accumulator) => components.includes(field.component) ? 
      accumulator + 1 : accumulator,
    0
  );

  return result !== 0;
};

export { formHasComponents };
