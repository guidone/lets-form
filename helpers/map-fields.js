/**
 * mapFields
 * Return an array of fields with the only elements changed by the predicate, it takes a field as parameter
 * and return the same field or a changed one. It recursively iterate over subfields for group, two-columns and
 * three columns components
 * @param {Array} fields
 * @param {Function} predicate Take a field as paramenter and return a field object
 * @returns
 */
const mapFields = (
  fields,
  predicate = (obj) => obj
) => {
  if (!fields) {
    return fields;
  }
  // replace with predicated
  const newFields = fields.map(field => {
    let newField = predicate(field);

    if (field.component === 'group') {
      const newFields = mapFields(field.fields, predicate);
      if (newFields !== field.fields) {
        newField = {
          ...newField,
          fields: newFields
        };
      }
    } else if (field.component === 'array') {
      const newFields = mapFields(field.fields, predicate);
      if (newFields !== field.fields) {
        newField = {
          ...newField,
          fields: newFields
        };
      }
    } else if (field.component === 'two-columns') {
      const newLeftFields = mapFields(field.leftFields, predicate);
      if (newLeftFields !== field.leftFields) {
        newField = {
          ...newField,
          leftFields: newLeftFields
        };
      }
      const newRightFields = mapFields(field.rightFields, predicate);
      if (newRightFields !== field.rightFields) {
        newField = {
          ...newField,
          rightFields: newRightFields
        };
      }
    } else if (field.component === 'three-columns') {
      const newLeftFields = mapFields(field.leftFields, predicate);
      if (newLeftFields !== field.leftFields) {
        newField = {
          ...newField,
          leftFields: newLeftFields
        };
      }
      const newCenterFields = mapFields(field.centerFields, predicate);
      if (newCenterFields !== field.centerFields) {
        newField = {
          ...newField,
          centerFields: newCenterFields
        };
      }
      const newRightFields = mapFields(field.rightFields, predicate);
      if (newRightFields !== field.rightFields) {
        newField = {
          ...newField,
          rightFields: newRightFields
        };
      }
    }

    return newField;
  });

  // check if some element of the array is changed, keep instance consistency otherwise
  const hasChanges = fields.some((field, idx) => field !== newFields[idx]);

  return hasChanges ? newFields : fields;
};

export { mapFields };
