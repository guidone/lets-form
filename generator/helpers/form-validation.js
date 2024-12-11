import { useCallback, useState } from 'react';
import _ from 'lodash';

import { reduceFields, isI18n, i18n } from "../../helpers";

const FIELDS_NOT_TO_VALIDATE = ['group', 'placeholder', 'placeholder-image', 'steps', 'tabs', 'columns'];

const isEmpty = value => value === null || value === undefined || value === '';
const isString = value => typeof value === 'string';
const isNumber = value => typeof value === 'number';
const isValidRegEx = str => {
  try {
    const re = new RegExp(str);
    return true;
  } catch(e) {
    return false;
  }
};
const isArray = arr => typeof arr === 'object' && arr.length != null;
const isEmptyArray = arr => !isArray(arr) || arr.length === 0; // null considered an empty array

const needsValidation = field => {
  // doesn't required validation if it's a layout component or has neither required or validation params
  if (
    FIELDS_NOT_TO_VALIDATE.includes(field.component) ||
    (!field.required && !field.validation)
  ) {
    return false;
  }
  return true;
}



const makeFieldValidationFn = (field, locale) => {

  return async value => {
    //console.log('validating ', field.name, ' for ', value);
    if (!isEmpty(value)) {
      // check min/max length
      if (isString(value) && field.validation?.minLength && value.length < field.validation.minLength) {
        return makeErrorMessage(field, locale);;
      }
      if (isString(value) && field.validation?.maxLength && value.length > field.validation.maxLength) {
        return makeErrorMessage(field, locale);;
      }
      // check min/max value
      if (isNumber(value) && field.validation?.min && value < field.validation.min) {
        return makeErrorMessage(field, locale);;
      }
      if (isNumber(value) && field.validation?.max && value > field.validation.max) {
        return makeErrorMessage(field, locale);;
      }
      // check if regular expression
      if (isString(value) && field.validation?.pattern) {
        // check if string is ok if valid regexp
        if (isValidRegEx(field.validation.pattern)) {
          const regexp = new RegExp(field.validation.pattern);
          console.log('check ', value, 'against', regexp)
          if (!regexp.test(value)) {
            return makeErrorMessage(field, locale);;
          }
        } else {
          return {
            ...makeErrorMessage(field, locale),
            errorMessage: 'Invalid RegExp for field "' + field.name + '"'
          };
        }
      }
    } else if (field.required) {
      return makeErrorMessage(field, locale);
    }
  }
}

const makeErrorMessage = (field, locale) => {
  // prepare error message
  let errorMessage;
  if (_.isString(field.validation?.message)) {
    errorMessage = field.validation.message;
  } else if (isI18n(field.validation?.message)) {
    errorMessage = i18n(field.validation.message, locale) ?? 'Field is required';
  } else {
    errorMessage = 'Field is required';
  }

  return {
    name: field.name,
    label: field.label ?? field.name,
    errorMessage
  };
};

const makeArrayValidationFn = (field, locale) => {



  const validateSubFields = makeValidation(field.fields, locale);


  return async (value) => {
    if (!isEmptyArray(value)) {

      // check min/max length
      if (isArray(value) && field.validation?.minLength && value.length < field.validation.minLength) {
        return makeErrorMessage(field, locale);
      }
      if (isArray(value) && field.validation?.maxLength && value.length > field.validation.maxLength) {
        return makeErrorMessage(field, locale);
      }

      let i;
      const validationMessages = [];
      for (i = 0; i < value.length; i++) {
        validationMessages[i] = await validateSubFields(value[i]);
      }

      // TODO implement js validator

      if (validationMessages.some(o => o != null)) {
        return {
          ...makeErrorMessage(field, locale),
          errorMessage: undefined,
          errorMessages: validationMessages
        };
      }
    } else if (field.required) {
      return makeErrorMessage(field, locale);
    }
  }
};

/**
 * makeValidation
 * Take an array of fields and return a validation function, which takes as argument the values of the form
 * Returns null or undefined if no validation errors, otherwise an object, keys are the invalid fields, value for
 * each key is { fieldName, label, errorMessage }
 * @param {*} fields
 * @param {*} locale
 * @returns {function}
 */
const makeValidation = (fields, locale) => {

  const validationErrors = {};
  // collect all validatre functions per field
  const validateFns = reduceFields(
    fields,
    (field, accumulator) => {
      // skip if not required
      if (!needsValidation(field)) {
        return accumulator;
      }
      // special validation for array, otherwise field
      if (field.component === 'array') {
        return {
          ...accumulator,
          [field.name]: makeArrayValidationFn(field, locale)
        }
      } else {
        return {
          ...accumulator,
          [field.name]: makeFieldValidationFn(field, locale)
        }
      }
    },
    {},
    {
      array: false // don't collect here fields inside arrays
    }
  );

  console.log('validateFns', validateFns);

  // check all validators
  return async data => {
    // iterate all validators async
    let i;
    const fieldsToValidate = Object.keys(validateFns);
    for (i = 0; i < fieldsToValidate.length; i++) {
      const currentFieldName = fieldsToValidate[i];
      const validationResult = await validateFns[currentFieldName](data[currentFieldName]);
      if (validationResult) {
        validationErrors[currentFieldName] = validationResult;
      }
    }

    console.log('final validation', validationErrors)

    return Object.keys(validationErrors).length !== 0 ? validationErrors : undefined;
  };
};



const useFormValidation = ({ onError, fields, locale }) => {
  const [validationErrors, setValidationErrors] = useState();
  // TODO remove that
  const onHandleError = useCallback(
    data => {

      console.log('+++++  validation errors da RHC', data)

      setValidationErrors(data);
      onError(data);
    },
    [onError]
  );

  /**
   * clearValidation
   * Clear validation errors for a field or completely
   * @param {string} field
   */
  const clearValidation = useCallback(
    field => {
      if (!_.isEmpty(field)) {
        setValidationErrors(errors => errors && errors[field] ? { ...errors, [field]: undefined } : errors);
      } else {
        setValidationErrors(undefined);
      }
    },
    []
  );

  /**
   * validate
   * Trigger a form validation, also changes the status (validationErrors)
   * @returns
   */
  const validate = async data => {

    console.log('validate this', data);

    // TODO move into cache
    const validateFn = makeValidation(fields);

    // execute validation
    const validationErrors = await validateFn(data, locale);
    // set status
    setValidationErrors(validationErrors);

    return validationErrors;
  };

  return {
    onHandleError,
    validationErrors,
    setValidationErrors,
    validate,
    isValid: _.isEmpty(validationErrors),
    clearValidation
  }
};

export { useFormValidation };
