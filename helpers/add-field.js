import { mapFields } from './map-fields';

const addField = (form, newField, id) => {
  if (id != null) {
    return {
      ...form,
      fields: mapFields(
        form.fields,
        // if right field id, append to fields
        field => {
          if (field.id === id) {
            return {
              ...field,
              // TODO could be leftColumns
              fields: [
                ...(field.fields || []),
                newField
              ]
            };
          }
          return field;
        })
    };
  } else {
    return {
      ...form,
      fields: [
        ...form.fields,
        newField
      ]
    };
  }
}

export { addField };
