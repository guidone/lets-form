import { reduceFields } from '../../helpers';

export const enrichWithLabels = (validationErrors, fields) => {
  const result = { ...validationErrors };
  const collectLabels = reduceFields(
    fields,
    (field, accumulator) => field.label ? { ...accumulator, [field.name]: field.label } : accumulator,
    {}
  );

  Object
    .keys(result)
    .forEach(key => {
      if (result[key] && result[key].ref && collectLabels[result[key].ref.name]) {
        result[key].ref.label = collectLabels[result[key].ref.name];
      }
    });
  return result;
};
