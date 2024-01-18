import React from 'react';

import { GenerateGenerator } from '../generator';

const Fields = {
  'input-text': {
    'react-bootstrap': React.lazy(() => import('./input-text'))
  },
  'select': {
    'react-bootstrap': React.lazy(() => import('./select'))
  },
  'checkbox': {
    'react-bootstrap': React.lazy(() => import('./checkbox'))
  },
  'toggle': {
    'react-bootstrap': React.lazy(() => import('./toggle'))
  },
  'checkbox-group': {
    'react-bootstrap': React.lazy(() => import('./checkbox-group'))
  },
  'placeholder': {
    'react-bootstrap': React.lazy(() => import('./placeholder'))
  },
  'placeholder-image': {
    'react-bootstrap': React.lazy(() => import('./placeholder-image'))
  },
  'date': {
    'react-bootstrap': React.lazy(() => import('./date'))
  },
  'textarea': {
    'react-bootstrap': React.lazy(() => import('./textarea'))
  },
  'slider': {
    'react-bootstrap': React.lazy(() => import('./slider'))
  },
  'three-columns': {
    'react-bootstrap': React.lazy(() => import('./three-columns'))
  },
  'two-columns': {
    'react-bootstrap': React.lazy(() => import('./two-columns'))
  },
  'group': {
    'react-bootstrap': React.lazy(() => import('./group'))
  },
  'radio-group': {
    'react-bootstrap': React.lazy(() => import('./radio-group'))
  },
  'divider': {
    'react-bootstrap': React.lazy(() => import('./divider'))
  },
  'react-view': {
    'react-bootstrap': React.lazy(() => import('./react-view'))
  },
  'datetime': {
    'react-bootstrap': React.lazy(() => import('./datetime'))
  },
  'array': {
    'react-bootstrap': React.lazy(() => import('./array'))
  },
  'input-number': {
    'react-bootstrap': React.lazy(() => import('./input-number'))
  },
  'tabs': {
    'react-bootstrap': React.lazy(() => import('./tabs'))
  },
  'button': {
    'react-bootstrap': React.lazy(() => import('./button'))
  }
};

const Forms = {
  'react-bootstrap': React.lazy(() => import('./form'))
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = ({ framework, children, ...rest}) => (
  <FormGenerator framework="react-bootstrap" {...rest}>{children}</FormGenerator>
);
export default LetsForm;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
