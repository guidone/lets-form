import _ from 'lodash';

// Use eval to get the contructor since RCA polyfill this and returns a normal function constructor
// eslint-disable-next-line no-eval
const AsyncGeneratorFunction = eval('(() => async function* () {}.constructor)()');

export const makeTransformer = (str, fieldList) => {
  if (_.isEmpty(str)) {
    return null;
  }
  // yielding is manual
  const yieldedStr = str.replaceAll(
    "yield();",
    'yield Promise.resolve(api.fields());\n'
  );

  try {
    let spreadVars = '';
    if (!_.isEmpty(fieldList)) {
      spreadVars = 'const { ' + fieldList.join(', ') + ' } = values;\n';
    }
    const tx = new AsyncGeneratorFunction(
      'api',
      `const { setValue, enable, disable, values, show, hide, css, element, style, arraySetValue, context, toggle, setFieldValue } = api;\n` +
      spreadVars +
      yieldedStr +
      '\nyield Promise.resolve(api.fields());' // leave /n or a comment can void anything
    );
    return tx;
  } catch(e) {
    console.error(`[LetsForm] Invalid JavaScript code for rules`, e);
    console.error(`[LetsForm] Script: `, yieldedStr);
    throw e;
  }
};