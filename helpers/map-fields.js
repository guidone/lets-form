import _ from 'lodash';


/**
 * processFieldsHash
 * Tkae a field and process the "fields" key, which can be ah hash of value / array of fields
 * @param {*} field 
 * @param {*} predicate 
 * @returns 
 */
const processFieldsHash = (field, predicate) => {
  let newField = field;
  const subkeys = Object.keys(field.fields);
  subkeys.forEach(subkey => {
    const newFields = mapFields(field.fields[subkey], predicate);
    if (newFields !== field.fields[subkey]) {
      newField = {
        ...newField,
        fields: {
          ...newField.fields,
          [subkey]: newFields
        }
      };
    }
  });

  return newField;
};

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
  let needsFlatten = false;

  if (!fields) {
    return fields;
  }
  // replace with predicated
  let newFields = fields.map(field => {
    let newField = predicate(field);
    // if returns an array, means the mapping is replacing with two fields
    // and it will need to be flattened later
    if (Array.isArray(newField)) {
      needsFlatten = true;
    }

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
    } else if (field.component === 'tabs' && _.isObject(field.fields) && !_.isArray(field.fields)) {      
      // Problem here: the new field can be an array because the map field, can return an array with 
      // additional field to be put somewhere in the mapping, of those only the one of type "tab" need to be
      // mapped, the other one must be left untouched since they where added by the helper method
      if (_.isArray(newField)) {
        // if an array is returned, then it's already changed, we don't need to worry too much about
        // referential integrity
        // here only process the original field
        newField = newField.map(fieldToProcess => {
          if (fieldToProcess === field) {
            return processFieldsHash(fieldToProcess, predicate);
          }
          return fieldToProcess;
        });
      } else {
        newField = processFieldsHash(newField, predicate);
      }
    }

    return newField;
  });

  let hasChanges;
  if (needsFlatten) {    
    // if needs to be flattened, for sure is changed
    newFields = _.flatten(newFields);
    hasChanges = true;
  } else {
    // check if some element of the array is changed, keep instance consistency otherwise
    hasChanges = fields.some((field, idx) => field !== newFields[idx]);
  }
  return hasChanges ? newFields : fields;
};

export { mapFields };
