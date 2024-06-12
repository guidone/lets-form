import React from 'react';

import { GenerateGenerator } from '../generator';
import { lazyPreload as lazy } from '../helpers/lazy-preload';

const Fields = {
  'input-text': {
    'react-antd': lazy(() => import('./input-text'))
  },
  'toggle': {
    'react-antd': lazy(() => import('./toggle'))
  },
  'checkbox': {
    'react-antd': lazy(() => import('./checkbox'))
  },
  'date': {
    'react-antd': lazy(() => import('./date'))
  },
  'select': {
    'react-antd': lazy(() => import('./select'))
  },
  'radio-group': {
    'react-antd': lazy(() => import('./radio-group'))
  },
  'rate': {
    'react-antd': lazy(() => import('./rate'))
  },
  'placeholder': {
    'react-antd': lazy(() => import('./placeholder'))
  },
  'placeholder-image': {
    'react-antd': lazy(() => import('./placeholder-image'))
  },
  'input-number': {
    'react-antd': lazy(() => import('./input-number'))
  },
  'textarea': {
    'react-antd': lazy(() => import('./textarea'))
  },
  'multiselect': {
    'react-antd': lazy(() => import('./multiselect'))
  },
  'three-columns': {
    'react-antd': lazy(() => import('./three-columns'))
  },
  'two-columns': {
    'react-antd': lazy(() => import('./two-columns'))
  },
  'group': {
    'react-antd': lazy(() => import('./group'))
  },
  'slider': {
    'react-antd': lazy(() => import('./slider'))
  },
  'divider': {
    'react-antd': lazy(() => import('./divider'))
  },
  'react-view': {
    'react-antd': lazy(() => import('./react-view'))
  },
  'datetime': {
    'react-antd': lazy(() => import('./datetime'))
  },
  'array': {
    'react-antd': lazy(() => import('./array'))
  },
  'button': {
    'react-antd': lazy(() => import('./button'))
  },
  'checkbox-group': {
    'react-antd': lazy(() => import('./checkbox-group'))
  },
  'tabs': {
    'react-antd': lazy(() => import('./tabs'))
  },
  'upload': {
    'react-antd': lazy(() => import('./upload'))
  },
  'buttons-toggle-group': {
    'react-antd': lazy(() => import('./buttons-toggle-group'))
  },
  'steps': {
    'react-antd': lazy(() => import('./steps'))
  },
  'hidden': {
    'react-antd': lazy(() => import('./../common/hidden'))
  }
};

const Forms = {
  'react-antd': lazy(() => import('./form'))
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = ({ framework, children, ...rest}) => (
  <FormGenerator framework="react-antd" {...rest}>{children}</FormGenerator>
);
export default LetsForm;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
