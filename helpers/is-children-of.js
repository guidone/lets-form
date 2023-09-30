import _ from 'lodash';

import { reduceFields } from './reduce-fields';

export const collectIds = fields => {

  return reduceFields(
    fields || [],
    (field, accumulator) => {
      if (!accumulator.includes(field.id)) {
        return [...accumulator, field.id];
      }
      return accumulator;
    },
    []
  );

};

/**
 * isChildrenOf
 * Returns true if the field (id: fieldId) is a child (nested field) of a field with id parentFieldId
 * @param {*} fieldId 
 * @param {*} parentFieldId 
 * @param {*} fields 
 * @returns 
 */
const isChildrenOf = (fieldId, parentFieldId, fields) => {
  if (_.isEmpty(parentFieldId) || _.isEmpty(fieldId)) {
    return false;
  }
  // for each fields, collect all subIds
  const obj = reduceFields(
    fields, 
    (field, accumulator) => {
      if (field.fields || field.leftFields || field.rightFields || field.centerFields) {
        accumulator = {
          ...accumulator,
          [field.id]: collectIds([field])
        };
      }
      return accumulator;
    },
    {}
  );
  // then check if parentFieldIs contains as subfield with this id
  if (obj && _.isArray(obj[parentFieldId])) {
    return obj[parentFieldId].includes(fieldId);
  }

  return false;
};

export { isChildrenOf };
