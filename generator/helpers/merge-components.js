import _ from 'lodash';

/**
 * Merge additional components to the main library
 * @param {*} main
 * @param {*} additional
 * @returns
 */
export const mergeComponents = (main, additional) => {
  // if not empty, then merge, overwriting is ok
  if (!_.isEmpty(additional) && Object.keys(additional).length !== 0) {
    Object.keys(additional).forEach(componentName => {
      if (main[componentName] == null) {
        main[componentName] = additional[componentName];
      } else {
        main[componentName] = {
          ...main[componentName],
          ...additional[componentName]
        };
      }
    });
  }

  return main;
};