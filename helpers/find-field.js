import _ from 'lodash';

import { reduceFields } from './reduce-fields';

const findField = (fields, predicate) => {
  if (_.isEmpty(fields) || !_.isArray(fields)) {
    return null;
  }

  let found = fields.find(predicate);

  fields.forEach(field => {
    if (!found) {
      if (field.component === 'group' || field.component === 'array' || field.component === 'group') {
        found = findField(field.fields, predicate);
      } else if (field.component === 'two-columns') {
        found = findField(field.leftFields, predicate)
          || findField(field.rightFields, predicate);
      } else if (field.component === 'three-columns') {
        found = findField(field.leftFields, predicate)
          || findField(field.centerFields, predicate)
          || findField(field.rightFields, predicate);
      } else if ((field.component === 'tabs' || field.component === 'steps' || field.component === 'columns') && _.isObject(field.fields) && !_.isArray(field.fields)) {
        const subkeys = Object.keys(field.fields);
        subkeys.forEach(subkey => {
          if (!found) {
            const search = findField(field.fields[subkey], predicate);
            if (search) {
              found = search;
            }
          }
        });
      }
    }
  });

  return found;
};

const getFieldById = (fields, id) =>  findField(fields, field => field.id === id);

export { findField, reduceFields, getFieldById };
