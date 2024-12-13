import { useCallback, useState, useEffect, useRef } from 'react';
import _ from 'lodash';

import { reduceFields, isI18n, i18n } from "../../helpers";

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

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

const makeValidateJs = (validateJsSource, onJavascriptError) => {
  try {
    const validator = new AsyncFunction(
      'value',
      'formValues',
      validateJsSource
    );

    // wrap the validator function, if returns strictly false then re-use
    // the provided message, if it's a string return the string, but it will not i18n
    const validateJS = async (value, formValues) => {
      let v;
      try {
        v = await validator(value, formValues);
      } catch(e) {
        console.error(`[LetsForm] Error executing validate function: `, e);
        const error = new Error('Error compiling validate function: ' + e.message, { cause: e });
        error.sourceCode = validation.validate;
        error.errorType = 'runtime';
        onJavascriptError(error);
      }
      if (v === true) {
        return null;
      } else if (v === false) {
        return errorMessage;
      } else if (_.isString(v)) {
        return v;
      } else if (isI18n(v)) {
        return i18n(v, locale);
      }
      return null;
    }

    return validateJS;
  } catch(e) {
    console.error(`[LetsForm] Invalid validate function: `, e);
    const error = new Error('Error compiling validate function: ' + e.message, { cause: e });
    error.sourceCode = validation.validate;
    error.errorType = 'compile';
    onJavascriptError(error);
  }
};



/**
 * makeFieldValidationFn
 * Make a validation function for a field, checks min, max, minLength, maxLength, pattern
 * @param {*} field
 * @param {*} locale
 * @param {*} onJavascriptError
 * @returns
 */
const makeFieldValidationFn = (field, locale, onJavascriptError) => {
  // create validation function from script
  let validateJS;
  if (!_.isEmpty(_.trim(field.validation?.validate))) {
    validateJS = makeValidateJs(field.validation.validate, onJavascriptError)
  }

  return async (value, formValues) => {
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
      // if there's js validation function
      if (_.isFunction(validateJS)) {
        const errorMessage = await validateJS(value, formValues);
        if (errorMessage) {
          return {
            ...makeErrorMessage(field, locale),
            errorMessage
          };
        }
      }
    } else if (isEmpty(value) && field.required) {
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

/**
 * makeArrayValidationFn
 * Make the validation function for an array. It checks minLength and maxLength, if no errors
 * run the same validation in the sub-objects of every single array item
 */
const makeArrayValidationFn = (field, locale, onJavascriptError) => {
  const validateSubFields = makeValidation(field.fields, locale);
  // create validation function from script
  let validateJS;
  if (!_.isEmpty(_.trim(field.validation?.validate))) {
    validateJS = makeValidateJs(field.validation.validate, onJavascriptError)
  }

  return async (value, formValues) => {
    if (!isEmptyArray(value)) {
      // check min/max length
      if (isArray(value) && field.validation?.minLength && value.length < field.validation.minLength) {
        return makeErrorMessage(field, locale);
      }
      if (isArray(value) && field.validation?.maxLength && value.length > field.validation.maxLength) {
        return makeErrorMessage(field, locale);
      }
      // check custom js, if there's js validation function
      if (_.isFunction(validateJS)) {
        const errorMessage = await validateJS(value, formValues);
        if (errorMessage) {
          return {
            ...makeErrorMessage(field, locale),
            errorMessage
          };
        }
      }

      let i;
      const validationMessages = [];
      for (i = 0; i < value.length; i++) {
        validationMessages[i] = await validateSubFields(value[i]);
      }

      if (validationMessages.some(o => o != null)) {
        return {
          ...makeErrorMessage(field, locale),
          errorMessage: undefined,
          errorMessages: validationMessages
        };
      }
    } else if (isEmptyArray(value) && field.required) {
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
const makeValidation = (fields, locale, onJavascriptError) => {
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
          [field.name]: makeArrayValidationFn(field, locale, onJavascriptError)
        }
      } else {
        return {
          ...accumulator,
          [field.name]: makeFieldValidationFn(field, locale, onJavascriptError)
        }
      }
    },
    {},
    {
      array: false // don't collect here fields inside arrays
    }
  );

  // check all validators
  return async data => {
    const validationErrors = {};
    // iterate all validators async
    let i;
    const fieldsToValidate = Object.keys(validateFns);
    for (i = 0; i < fieldsToValidate.length; i++) {
      const currentFieldName = fieldsToValidate[i];
      // pass the single value to check but also the all values
      const validationResult = await validateFns[currentFieldName](data[currentFieldName], data);
      console.log('inner validation', currentFieldName, validationResult)
      if (validationResult) {
        validationErrors[currentFieldName] = validationResult;
      }
    }

    return Object.keys(validationErrors).length !== 0 ? validationErrors : undefined;
  };
};

let globaloneFn;

/**
 * useValidation
 * Handle the validation of the form, given the fields creates a validation form and store it
 * in the state.
 * Calling validate() executes the validation, returns the validation object and store itin state
 * See ADR-20
 * @param {onError} callback
 * @param {array} fields The form fields
 * @param {string} locale
 */
const useFormValidation = ({ onError, fields, locale, onJavascriptError }) => {
  const [validationErrors, setValidationErrors] = useState();
  const [validateFn, setValidateFn] = useState(null);
  const mutableState = useRef();

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

  useEffect(
    () => {
      // store in a useRef to avoid re-render
      mutableState.current = makeValidation(fields, locale, onJavascriptError);
    },
    [fields, locale]
  );

  /**
   * validate
   * Trigger a form validation, also changes the status (validationErrors)
   * @returns
   */
  const validate = useCallback(
    async (data = {}) => {

      console.log('validate this', data, ' for', fields);

      // execute validation
      const validationErrors = await mutableState.current(data, locale);
      // set status
      setValidationErrors(validationErrors);
      // callback errors
      onError(validationErrors);

      return validationErrors;
    },
    [validateFn]
  );

  return {
    validationErrors,
    setValidationErrors,
    validate,
    isValid: _.isEmpty(validationErrors),
    clearValidation
  }
};

export { useFormValidation };
