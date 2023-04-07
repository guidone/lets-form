import React from 'react';
import _ from 'lodash';

import { i18n } from '../../helpers';

export const I18N = (Component, propNames = [], funcPropNames = {}) => {
  return props => {
    const { lfLocale } = props;
    const newProps = Object.keys(props)
      .reduce(
        (acc, propName) => {
          // translate simpe field
          if (propNames.includes(propName)) {
            return {
              ...acc,
              [propName]: i18n(props[propName], lfLocale)
            };
          } else if (_.isFunction(funcPropNames[propName])) {
            // pass the value trough the mapper
            const translated = funcPropNames[propName](
              props[propName],
              string => i18n(string, lfLocale)
            );
            return {
              ...acc,
              [propName]: translated
            };
          }
          return { ...acc, [propName]: props[propName]};
        },
        {}
      );

    return (
      <Component {...newProps}/>
    );
  }
};
