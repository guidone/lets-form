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
  }
  return false;
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
}




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
    if (testCondition(rule.condition, values)) {
      if (PREDICATES[rule.verb]) {
        newFields = mapFields(newFields, PREDICATES[rule.verb](rule.names));
      }
    }
  });

  return newFields;
};

export { applyFormRules };
