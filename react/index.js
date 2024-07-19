import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import { GenerateGenerator } from '../generator';
import { lazyPreload as lazy } from '../helpers/lazy-preload';

const Fields = {
  'input-text': {
    'react': lazy(() => import('./input-text'))
  },
  'input-number': {
    'react': lazy(() => import('./input-number'))
  },
  'checkbox': {
    'react': lazy(() => import('./checkbox'))
  },
  'textarea': {
    'react': lazy(() => import('./textarea'))
  },
  'three-columns': {
    'react': lazy(() => import('./three-columns'))
  },
  'two-columns': {
    'react': lazy(() => import('./two-columns'))
  },
  'group': {
    'react': lazy(() => import('./group'))
  },
  'divider': {
    'react': lazy(() => import('../common/divider'))
  },
  'react-view': {
    'react': lazy(() => import('./react-view'))
  },
  'placeholder': {
    'react': lazy(() => import('./placeholder'))
  },
  'select': {
    'react': lazy(() => import('./select'))
  },
  'date': {
    'react': lazy(() => import('./date'))
  },
  'datetime': {
    'react': lazy(() => import('./datetime'))
  },
  'time': {
    'react': lazy(() => import('./time'))
  },
  'array': {
    'react': lazy(() => import('./array'))
  },
  'placeholder-image': {
    'react': lazy(() => import('./placeholder-image'))
  },
  'button': {
    'react': lazy(() => import('./button'))
  },
  'upload': {
    'react': lazy(() => import('./upload'))
  },
  'hidden': {
    'react': lazy(() => import('./../common/hidden'))
  }
  // Removed, doesn't work
  /*'toggle': {
    'react': Toggle
  }*/
};

const Forms = {
  'react': lazy(() => import('./form'))
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = forwardRef(({ framework, children, ...rest}, ref) => {
  const refForm = useRef();
  useImperativeHandle(ref, () => ({
    validate: () => refForm.current.validate()
  }));
  return <FormGenerator ref={refForm} framework="react" {...rest}>{children}</FormGenerator>;
});

export default LetsForm;
export * from '../helpers';
export * from '../costants';
export * from '../generator/helpers/dsl';
export { Fields, Forms };
