import _ from 'lodash';

import { isI18n, i18n } from '../../helpers';

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

export const translateValidation = (validation, locale, onJavascriptError) => {
  // if any validation object
  if (validation != null) {
    let errorMessage;
    if (_.isString(validation.message)) {
      errorMessage = validation.message;
    } else if (isI18n(validation.message)) {
      errorMessage = i18n(validation.message, locale) ?? 'Field is required';
    } else {
      errorMessage = 'Field is required';
    }

    let result = {};
    if (validation.required) {
      result.required = errorMessage
    }
    // min / max validation
    ['min', 'max', 'minLength', 'maxLength'].forEach(key => {
      if (validation[key] != null) {
        result[key] = {
          value: validation[key],
          message: errorMessage
        }
      }
    });
    // validation with regex
    if (validation.pattern) {
      result.pattern = {
        value: new RegExp(validation.pattern),
        message: errorMessage
      };
    }


    if (!_.isEmpty(_.trim(validation.validate))) {
      try {
        const validator = new AsyncFunction(
          'value',
          'formValues',
          validation.validate
        );

        // wrap the validator function, if returns strictly false then re-use
        // the provided message, if it's a string return the string, but it will not i18n
        result.validate = async (value, formValues) => {
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
            return true;
          } else if (v === false) {
            return errorMessage;
          } else if (_.isString(v)) {
            return v;
          } else if (isI18n(v)) {
            return i18n(v, locale);
          }
          return true;
        }
      } catch(e) {
        console.error(`[LetsForm] Invalid validate function: `, e);
        const error = new Error('Error compiling validate function: ' + e.message, { cause: e });
        error.sourceCode = validation.validate;
        error.errorType = 'compile';
        onJavascriptError(error);
      }
    } else {
      result.validate = undefined;
    }

    return result;
  }
  return validation;
};
