import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import { GenerateGenerator } from '../generator';
import { lazyPreload as lazy } from '../helpers/lazy-preload';

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
  'columns': {
    'react-material-ui': lazy(() => import('./columns'))
  },
  'group': {
    'react-material-ui': lazy(() => import('./group'))
  },
  'placeholder-image': {
    'react-material-ui': lazy(() => import('./placeholder-image'))
  },
  'divider': {
    'react-material-ui': lazy(() => import('../common/divider'))
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
  },
  'time': {
    'react-material-ui': lazy(() => import('./time'))
  },
  'hidden': {
    'react-material-ui': lazy(() => import('./../common/hidden'))
  },
  'currency': {
    'react-material-ui': lazy(() => import('./currency'))
  }
};

const Forms = {
  'react-material-ui': lazy(() => import('./form'))
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = forwardRef(({ framework, children, ...rest}, ref) => {
  const refForm = useRef();
  useImperativeHandle(ref, () => ({
    validate: () => refForm.current.validate()
  }));
  return <FormGenerator ref={refForm} framework="react-material-ui" {...rest}>{children}</FormGenerator>;
});

export default LetsForm;
export * from '../helpers';
export * from '../costants';
export * from '../generator/helpers/dsl';
export { Fields, Forms };
