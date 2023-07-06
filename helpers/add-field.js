import { mapFields } from './map-fields';

/**
 * addField
 * @param {*} form The form to add the field to 
 * @param {*} newField The new field { component: '', ... }
 * @param {*} id 
 * @param {*} target 
 * @param {*} subtarget 
 * @returns 
 */
const addField = (
  form, 
  newField, 
  id, 
  target = 'fields',
  subtarget = null
) => {
  console.log('add field ', newField, id, target, subtarget)
  if (id != null) {
    return {
      ...form,
      fields: mapFields(
        form.fields,
        // if right field id, append to fields
        field => {
          if (field.id === id) {
            if (subtarget != null) {
              console.log('aggiungo nello strano modo')
              return {
                ...field,
                [target]: {
                  ...(field[target] || []),
                  [subtarget]: [
                    ...(field[target] && field[target][subtarget] ? field[target][subtarget] : []),
                    newField
                  ]
                }
              };
            } else {
              // old way
              return {
                ...field,
                [target]: [
                  ...(field[target] || []),
                  newField
                ]
              };
            }
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
