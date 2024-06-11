import { filterFields } from './filter-fields';

export const omitFields = (fields, fieldNames = []) => {
  const toBeOmitted = Array.isArray(fieldNames) ? fieldNames : [fieldNames];

  return filterFields(
    fields,
    field => !toBeOmitted.includes(field.name)
  );
};
