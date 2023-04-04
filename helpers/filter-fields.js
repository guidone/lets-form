/**
 * filterFields
 * Filter field calling recursively fields in group, two-columns, three columns
 * @param {Array} fields
 * @param {Function} predicate Take a field as paramenter and return a field object
 * @returns
 */
const filterFields = (
  fields,
  predicate = (obj) => obj
) => {
  if (!fields) {
    return fields;
  }
  // replace with predicated
  const newFields = fields
    .map(field => {
      if (!predicate(field)) {
        return null;
      }
      let newField = field;

      if (field.component === 'group') {
        const newFields = filterFields(field.fields, predicate);
        if (newFields !== field.fields) {
          newField = {
            ...newField,
            fields: newFields
          };
        }
      } else if (field.component === 'two-columns') {
        const newLeftFields = filterFields(field.leftFields, predicate);
        if (newLeftFields !== field.leftFields) {
          newField = {
            ...newField,
            leftFields: newLeftFields
          };
        }
        const newRightFields = filterFields(field.rightFields, predicate);
        if (newRightFields !== field.rightFields) {
          newField = {
            ...newField,
            rightFields: newRightFields
          };
        }
      } else if (field.component === 'three-columns') {
        const newLeftFields = filterFields(field.leftFields, predicate);
        if (newLeftFields !== field.leftFields) {
          newField = {
            ...newField,
            leftFields: newLeftFields
          };
        }
        const newCenterFields = filterFields(field.centerFields, predicate);
        if (newCenterFields !== field.centerFields) {
          newField = {
            ...newField,
            centerFields: newCenterFields
          };
        }
        const newRightFields = filterFields(field.rightFields, predicate);
        if (newRightFields !== field.rightFields) {
          newField = {
            ...newField,
            rightFields: newRightFields
          };
        }
      }

      return newField;
    })
    .filter(Boolean);

  // check if some element of the array is changed, keep instance consistency otherwise
  const hasChanges = fields.length !== newFields.length || fields.some((field, idx) => field !== newFields[idx]);

  return hasChanges ? newFields : fields;
};

export { filterFields };
