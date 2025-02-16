import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import { GenerateGenerator } from '../generator';
import { lazyPreload as lazy } from '../helpers/lazy-preload';

const Fields = {
  'input-text': {
    'react-bootstrap': lazy(() => import('./input-text'))
  },
  'select': {
    'react-bootstrap': lazy(() => import('./select'))
  },
  'checkbox': {
    'react-bootstrap': lazy(() => import('./checkbox'))
  },
  'toggle': {
    'react-bootstrap': lazy(() => import('./toggle'))
  },
  'checkbox-group': {
    'react-bootstrap': lazy(() => import('./checkbox-group'))
  },
  'placeholder': {
    'react-bootstrap': lazy(() => import('./placeholder'))
  },
  'placeholder-image': {
    'react-bootstrap': lazy(() => import('./placeholder-image'))
  },
  'date': {
    'react-bootstrap': lazy(() => import('./date'))
  },
  'textarea': {
    'react-bootstrap': lazy(() => import('./textarea'))
  },
  'slider': {
    'react-bootstrap': lazy(() => import('./slider'))
  },
  'three-columns': {
    'react-bootstrap': lazy(() => import('./three-columns'))
  },
  'columns': {
    'react-bootstrap': lazy(() => import('./columns'))
  },
  'two-columns': {
    'react-bootstrap': lazy(() => import('./two-columns'))
  },
  'group': {
    'react-bootstrap': lazy(() => import('./group'))
  },
  'radio-group': {
    'react-bootstrap': lazy(() => import('./radio-group'))
  },
  'divider': {
    'react-bootstrap': lazy(() => import('../common/divider'))
  },
  'react-view': {
    'react-bootstrap': lazy(() => import('./react-view'))
  },
  'datetime': {
    'react-bootstrap': lazy(() => import('./datetime'))
  },
  'array': {
    'react-bootstrap': lazy(() => import('./array'))
  },
  'input-number': {
    'react-bootstrap': lazy(() => import('./input-number'))
  },
  'tabs': {
    'react-bootstrap': lazy(() => import('./tabs'))
  },
  'button': {
    'react-bootstrap': lazy(() => import('./button'))
  },
  'hidden': {
    'react-bootstrap': lazy(() => import('./../common/hidden'))
  },
  'currency': {
    'react-bootstrap': lazy(() => import('./currency'))
  }
};

const Forms = {
  'react-bootstrap': lazy(() => import('./form'))
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = forwardRef(({ framework, children, ...rest}, ref) => {
  const refForm = useRef();
  useImperativeHandle(ref, () => ({
    validate: () => refForm.current.validate()
  }));
  return <FormGenerator ref={refForm} framework="react-bootstrap" {...rest}>{children}</FormGenerator>;
});

export default LetsForm;
export * from '../helpers';
export * from '../costants';
export * from '../generator/helpers/dsl';
export { Fields, Forms };
