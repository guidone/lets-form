import _ from 'lodash';

const reduceFields = (fields, predicate, accumulator = {}) => {
  if (_.isEmpty(fields) || !_.isArray(fields)) {
    return null;
  }
  let result = accumulator;
  fields.forEach(field => {
    result = predicate(field, result);
    if (field.component === 'group') {
      result = reduceFields(field.fields, predicate, result);
    } else if (field.component === 'two-columns') {
      result = reduceFields(field.leftFields, predicate, result);
      result = reduceFields(field.rightFields, predicate, result);
    } else if (field.component === 'three-columns') {
      result = reduceFields(field.leftFields, predicate, result);
      result = reduceFields(field.centerFields, predicate, result);
      result = reduceFields(field.rightFields, predicate, result);
    }
  });

  return result;
};

export { reduceFields };
