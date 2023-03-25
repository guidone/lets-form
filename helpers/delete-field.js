import _ from 'lodash';

const deleteFieldInArray = (fields, field) => {
  const found = fields.some(({ id }) => id === field.id);
  if (found) {
    // if found, stop recursion (id is unique), return new array
    //return fields.map(f => f.id === field.id ? field : f);
    return _.reject(fields, f => f.id === field.id);
  }
  // if still not found, then check if any group has it
  let foundField = false;
  const newFields = fields.map(currentField => {
    // skip if already found
    if (foundField) {
      return currentField;
    }
    if (currentField.component === 'group') {
      const newSubfields = deleteFieldInArray(currentField.fields, field);
      if (newSubfields !== currentField.fields) {
        // if instance is different, it was found, return new instance and mark as found
        foundField = true;
        return {
          ...currentField,
          fields: newSubfields
        };
      }
    }
    return currentField;
  });

  return foundField ? newFields : fields;
}

const deleteField = (form, field) => {
  const newFields = deleteFieldInArray(form.fields, field);
  if (form.fields !== newFields) {
    return {
      ...form,
      fields: newFields
    };
  }
  // return unchanged
  return form;
};

export { deleteField };