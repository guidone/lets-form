import { filterFields } from './filter-fields';

const deleteField = (form, field) => {
  return {
    ...form,
    fields: filterFields(
      form.fields,
      currentField => currentField.id !== field.id
    )
  };
};

export { deleteField };
