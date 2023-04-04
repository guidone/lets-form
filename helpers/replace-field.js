import { mapFields } from './map-fields';

const replaceField = (form, field) => {
  return {
    ...form,
    fields: mapFields(
      form.fields,
      currentField => {
        if (currentField.id === field.id) {
          return field;
        }
        return currentField;
      }
    )
  }
};

export { replaceField };