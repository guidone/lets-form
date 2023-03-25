import _ from 'lodash';

import { FIELDS_KEY } from './fields-keys';

const fillIds = (fields, namespace = '') => {
  if (_.isEmpty(fields)) {
    return fields;
  }

  const newFields = fields.map(field => {
    let newField = field;
    if (!field.id) {
      newField = {
        id: _.uniqueId(namespace),
        ...field
      };
    }

    FIELDS_KEY.forEach(fieldsKey => {
      if (!_.isEmpty(field[fieldsKey])) {
        const newFields = fillIds(field[fieldsKey], namespace);
        // if any changes in the subfields create new instance
        if (newFields !== field[fieldsKey]) {
          newField = {
            ...newField,
            [fieldsKey]: newFields
          };
        }
      }
    });

    return newField;
  });
  // dont return a new instance of the array if there's no change
  const isAnyChanges = fields.some((field, idx) => field !== newFields[idx]);
  return isAnyChanges ? newFields : fields;
};

export { fillIds }