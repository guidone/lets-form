import React, { lazy } from 'react';

import { GenerateGenerator } from '../generator';

const Fields = {
  'input-text': {
    'react-material-ui': lazy(() => import('./input-text'))
  },
  'select': {
    'react-material-ui': lazy(() => import('./select'))
  },
  'toggle': {
    'react-material-ui': lazy(() => import('./toggle'))
  },
  'checkbox': {
    'react-material-ui': lazy(() => import('./checkbox'))
  },
  'slider': {
    'react-material-ui': lazy(() => import('./slider'))
  },
  'placeholder': {
    'react-material-ui': lazy(() => import('./placeholder'))
  },
  'rate': {
    'react-material-ui': lazy(() => import('./rate'))
  },
  'date': {
    'react-material-ui': lazy(() => import('./date'))
  },
  'three-columns': {
    'react-material-ui': lazy(() => import('./three-columns'))
  },
  'two-columns': {
    'react-material-ui': lazy(() => import('./two-columns'))
  },
  'group': {
    'react-material-ui': lazy(() => import('./group'))
  },
  'placeholder-image': {
    'react-material-ui': lazy(() => import('./placeholder-image'))
  },
  'divider': {
    'react-material-ui': lazy(() => import('./divider'))
  },
  'react-view': {
    'react-material-ui': lazy(() => import('./react-view'))
  },
  'datetime': {
    'react-material-ui': lazy(() => import('./datetime'))
  },
  'array': {
    'react-material-ui': lazy(() => import('./array'))
  },
  'textarea': {
    'react-material-ui': lazy(() => import('./textarea'))
  },
  'multiselect': {
    'react-material-ui': lazy(() => import('./multiselect'))
  },
  'input-number': {
    'react-material-ui': lazy(() => import('./input-number'))
  },
  'radio-group': {
    'react-material-ui': lazy(() => import('./radio-group'))
  },
  'checkbox-group': {
    'react-material-ui': lazy(() => import('./checkbox-group'))
  },
  'tabs': {
    'react-material-ui': lazy(() => import('./tabs'))
  },
  'button': {
    'react-material-ui': lazy(() => import('./button'))
  },
  'upload': {
    'react-material-ui': lazy(() => import('./upload'))
  }
};

const Forms = {
  'react-material-ui': lazy(() => import('./form'))
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = ({ framework, children, ...rest}) => (
  <FormGenerator framework="react-material-ui" {...rest}>{children}</FormGenerator>
);
export default LetsForm;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
