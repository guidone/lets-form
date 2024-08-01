import _ from 'lodash';

import { reduceFields } from '../../helpers';

import { makeTransformer } from './make-transformer';

export const collectTransformers = (fields, formScript, onJavascriptError) => {
  let transformers = {};

  // collect all fieldlist needed to compile the transformer
  const fieldList = reduceFields(
    fields,
    (field, accumulator) => {
      if (field.component !== 'group' && field.component !== 'two-columns' && field.component !== 'three-columns' && field.component !== 'columns') {
        return [...accumulator, field.name];
      }
      return accumulator;
    },
    [],
    { array: false } // don't include array
  );

  // compile transformer of the form
  try {
    if (formScript) {
      transformers.onRender = [makeTransformer(formScript, fieldList)];
    }
  } catch(e) {
    const error = new Error('Error compiling main form script: ' + e.message, { cause: e });
    error.sourceCode = formScript;
    error.errorType = 'compile';
    onJavascriptError(error);
  }

  // collect transformers for each field and put it onChange
  transformers = reduceFields(
    fields,
    (field, acc) => {

      if (field.script || field.transformer) {
        let transformer;
        try {
          transformer = makeTransformer(field.script || field.transformer, fieldList);
        } catch(e) {
          const error = new Error('Error compiling script. ' + e.message, { cause: e });
          error.sourceCode = field.script || field.transformer;
          error.errorType = 'compile';
          onJavascriptError(error);
        }
        // push into the onChange list of txs
        if (transformer != null) {
          if (acc.onChange == null) {
            acc.onChange = {};
          }
          acc.onChange[field.name] = [transformer];
        }
      }
      return acc;
    },
    transformers,
    { array: false } // don't include array
  );

  return transformers;
};
