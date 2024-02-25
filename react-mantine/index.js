import React from 'react';

import { GenerateGenerator } from '../generator';
import { lazyPreload as lazy } from '../helpers/lazy-preload';

const Fields = {
  'input-text': {
    'react-mantine': lazy(() => import('./input-text'))
  },
  'input-number': {
    'react-mantine': lazy(() => import('./input-number'))
  },
  'textarea': {
    'react-mantine': lazy(() => import('./textarea'))
  },
  'select': {
    'react-mantine': lazy(() => import('./select'))
  },
  'checkbox': {
    'react-mantine': lazy(() => import('./checkbox'))
  },
  'toggle': {
    'react-mantine': lazy(() => import('./toggle'))
  },
  'array': {
    'react-mantine': lazy(() => import('./array'))
  },
  'checkbox-group': {
    'react-mantine': lazy(() => import('./checkbox-group'))
  },
  'two-columns': {
    'react-mantine': lazy(() => import('./two-columns'))
  },
  'three-columns': {
    'react-mantine': lazy(() => import('./three-columns'))
  },
  'group': {
    'react-mantine': lazy(() => import('./group'))
  }
};

const Forms = {
  'react-mantine': lazy(() => import('./form'))
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = ({ framework, children, ...rest}) => (
  <FormGenerator framework="react-mantine" {...rest}>{children}</FormGenerator>
);
export default LetsForm;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
