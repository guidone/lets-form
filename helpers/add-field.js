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
  subtarget = null,
  position = 'end'
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
            // sub target is for columns, steps, tabs
            if (subtarget != null) {
              const what = position === 'start' ?
                [
                  ...toAdd,
                  ...(field[target] && field[target][subtarget] ? field[target][subtarget] : []),
                ] :
                [
                  ...(field[target] && field[target][subtarget] ? field[target][subtarget] : []),
                  ...toAdd
                ];

              return {
                ...field,
                [target]: {
                  ...(field[target] || []),
                  [subtarget]: what
                }
              };
            } else {
              // only target is for groups
              const what = position === 'start' ?
                [...toAdd, ...(field[target] || [])] :
                [...(field[target] || []), ...toAdd];

              return {
                ...field,
                [target]: what
              };
            }
          }
          return field;
        })
    };
  } else {
    // just add in the main "fields" key
    return {
      ...form,
      fields: [
        ...form.fields,
        ...toAdd
      ]
    };
  }
}

/**
 * AddFieldAfter
 * Add a field (an object with "component" property to a form) after the field with a specific id.
 * Returns a form
 * @param {*} form The form to add the field to
 * @param {*} newField The new field { component: '', ... } or array of fields
 * @param {*} id Id of the component to add the field after
 */
const AddFieldAfter = (form, newField, id) => {

  const toAdd = _.isArray(newField) ? newField : [newField];
  return {
    ...form,
    fields: mapFields(
      form.fields,
      // if right field id, append to fields
      field => {
        if (field.id === id) {

          return [field, ...toAdd];
        }
        return field;
      }
    )
  };
};

export { addField, AddFieldAfter };
