import _ from 'lodash';

import { wrapOnChange } from '../../helpers/wrap-on-change';

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
      const wrappedAdditional = Object.keys(additional[componentName])
        .reduce(
          (acc, framework) => ({
            ...acc,
            [framework]: wrapOnChange(additional[componentName][framework])
          }),
          {}
        );

      // merge wrapped component
      if (main[componentName] == null) {
        main[componentName] = {
          ...wrappedAdditional,
          custom: true
        };
      } else {
        main[componentName] = {
          ...main[componentName],
          ...wrappedAdditional,
          custom: true
        };
      }
    });
  }

  return main;
};