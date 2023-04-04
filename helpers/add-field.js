import { mapFields } from './map-fields';

const addField = (form, newField, id, target = 'fields') => {
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
              [target]: [
                ...(field[target] || []),
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
