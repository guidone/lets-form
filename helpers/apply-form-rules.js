import _ from 'lodash';

import { mapFields } from './map-fields';

const testCondition = (condition, values = {}) => {
  if (
    condition?.type === 'checked' &&
    !_.isEmpty(condition?.field)
    && values[condition.field] === true
  ) {
    return true;
  } else if (
    condition?.type === 'unchecked' &&
    !_.isEmpty(condition?.field) &&
    values[condition.field] === false
  ) {
    return true;
  } else if (
    condition?.type === 'eq' &&
    !_.isEmpty(condition?.field) && condition?.value && // could be anything
    // eslint-disable-next-line eqeqeq
    values[condition.field] == condition.value
  ) {
    return true;
  } else if (
    condition?.type === 'neq' &&
    !_.isEmpty(condition?.field) && condition?.value && // could be anything
    // eslint-disable-next-line eqeqeq
    values[condition.field] != condition.value
  ) {
    return true;
  } else if (
    condition?.type === 'not_empty' &&
    !_.isEmpty(condition?.field) &&
    // eslint-disable-next-line eqeqeq
    (values[condition.field] != null && values[condition.field] !== '')
  ) {
    return true;
  } else if (
    condition?.type === 'empty' &&
    !_.isEmpty(condition?.field) &&
    // eslint-disable-next-line eqeqeq
    (values[condition.field] == null || values[condition.field] === '')
  ) {
    return true;
  }
  return false;
};

const testConditions = (conditions, values) => {
  if (_.isArray(conditions)) {
    if (!_.isEmpty(conditions)) {
      return conditions.every(condition => testCondition(condition, values));
    }
    return false;
  }

  return testCondition(conditions, values);
};

const PREDICATES = {
  enable: (names) => {
    return field => {
      if (names.indexOf(field.name) !== -1) {
        return {
          ...field,
          disabled: false
        };
      }
      return field;
    }
  },
  disable: (names) => {
    return field => {
      if (names.indexOf(field.name) !== -1) {
        return {
          ...field,
          disabled: true
        };
      }
      return field;
    }
  },
  show: (names) => {
    return field => {
      if (names.indexOf(field.name) !== -1) {
        return {
          ...field,
          hidden: false
        };
      }
      return field;
    }
  },
  hide: (names) => {
    return field => {
      if (names.indexOf(field.name) !== -1) {
        return {
          ...field,
          hidden: true
        };
      }
      return field;
    }
  },
  setValue: (names, object, condition, values) => {
    return field => {
      if (names.indexOf(field.name) !== -1 && _.isObject(object) && !_.isEmpty(object.key) && !_.isEmpty(object.value)) {
        return {
          ...field,
          [object.key]: evaluateValue(object.value, { values, condition })
        };
      }
      return field;
    }

  }
};


// TODO implement more ${} tokens
const evaluateValue = (value, { values, condition }) => {
  // eslint-disable-next-line no-template-curly-in-string
  if (value === '${VALUE}') {
    return values[condition.field];
    // eslint-disable-next-line no-template-curly-in-string
  } else if (value === '${EMPTY}') {
    return '';
    // eslint-disable-next-line no-template-curly-in-string
  } else if (value === '${NULL}') {
    return null;
    // eslint-disable-next-line no-template-curly-in-string
  } else if (value === '${UNDEFINED}') {
    return null;
  } else {
    return value;
  }
};

const applyFormRules = (
  fields,
  rules,
  values
) => {
  if (!Array.isArray(rules) || rules.length === 0) {
    return fields;
  }
  let newFields = fields;

  rules.forEach(rule => {
    // if test condition passes and exists a predicate, then execute it
    if (testConditions(rule.condition, values)) {
      // if there's a verb for it, then apply it
      if (PREDICATES[rule.verb]) {
        newFields =
          mapFields(newFields, PREDICATES[rule.verb](rule.names, rule.object, rule.condition, values));
      }
    }
  });

  return newFields;
};

export { applyFormRules };
