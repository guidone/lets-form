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
  'radio-group': {
    'react-mantine': lazy(() => import('./radio-group'))
  },
  'two-columns': {
    'react-mantine': lazy(() => import('./two-columns'))
  },
  'three-columns': {
    'react-mantine': lazy(() => import('./three-columns'))
  },
  'group': {
    'react-mantine': lazy(() => import('./group'))
  },
  'date': {
    'react-mantine': lazy(() => import('./date'))
  },
  'datetime': {
    'react-mantine': lazy(() => import('./datetime'))
  },
  'rate': {
    'react-mantine': lazy(() => import('./rate'))
  },
  'placeholder': {
    'react-mantine': lazy(() => import('./placeholder'))
  },
  'placeholder-image': {
    'react-mantine': lazy(() => import('./placeholder-image'))
  },
  'divider': {
    'react-mantine': lazy(() => import('./divider'))
  },
  'slider': {
    'react-mantine': lazy(() => import('./slider'))
  },
  'input-tag': {
    'react-mantine': lazy(() => import('./input-tag'))
  },
  'tabs': {
    'react-mantine': lazy(() => import('./tabs'))
  },
  'button': {
    'react-mantine': lazy(() => import('./button'))
  },
  'upload': {
    'react-mantine': lazy(() => import('./upload'))
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
