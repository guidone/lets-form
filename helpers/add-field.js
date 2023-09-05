import _ from 'lodash';

import { mapFields } from './map-fields';

/**
 * addField
 * @param {*} form The form to add the field to 
 * @param {*} newField The new field { component: '', ... } or array of fields
 * @param {*} id Id of the component to add the field to
 * @param {*} target the fields key of the components: "fields", "tabs", "leftFields", "rightFields", ...
 * @param {*} subtarget the index of the target in case it's an array
 * @returns 
 */
const addField = (
  form, 
  newField, 
  id, 
  target = 'fields',
  subtarget = null
) => {
  // can add multiple fields at once
  const toAdd = _.isArray(newField) ? newField : [newField];

  if (id != null) {    
    return {
      ...form,
      fields: mapFields(
        form.fields,
        // if right field id, append to fields
        field => {
          if (field.id === id) {
            if (subtarget != null) {
              return {
                ...field,
                [target]: {
                  ...(field[target] || []),
                  [subtarget]: [
                    ...(field[target] && field[target][subtarget] ? field[target][subtarget] : []),
                    ...toAdd
                  ]
                }
              };
            } else {
              // old way
              return {
                ...field,
                [target]: [
                  ...(field[target] || []),
                  ...toAdd
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
        ...toAdd
      ]
    };
  }
}

export { addField };
