import _ from 'lodash';

const reduceFields = (
  fields,
  predicate,
  accumulator = {},
  opts = {}
) => {
  const options = {
    'group': true,
    'array': true,
    'two-columns': true,
    'three-columns': true,
    ...opts
  };
  if (_.isEmpty(fields) || !_.isArray(fields)) {
    return accumulator;
  }
  let result = _.clone(accumulator);
  fields.forEach(field => {
    result = predicate(field, result);
    if (field.component === 'group' && options.group) {
      result = reduceFields(field.fields, predicate, result, opts);
    } else if (field.component === 'array' && options.array) {
      result = reduceFields(field.fields, predicate, result, opts);
    } else if (field.component === 'two-columns' && options['two-columns']) {
      result = reduceFields(field.leftFields, predicate, result, opts);
      result = reduceFields(field.rightFields, predicate, result, opts);
    } else if (field.component === 'three-columns' && options['three-columns']) {
      result = reduceFields(field.leftFields, predicate, result, opts);
      result = reduceFields(field.centerFields, predicate, result, opts);
      result = reduceFields(field.rightFields, predicate, result, opts);
    }
  });

  return result;
};

export { reduceFields };
