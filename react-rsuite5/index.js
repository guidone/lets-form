import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import { GenerateGenerator } from '../generator';
import { lazyPreload as lazy } from '../helpers/lazy-preload';

const Fields = {
  'input-text': {
    'react-rsuite5': lazy(() => import('./input-text'))
  },
  'toggle': {
    'react-rsuite5': lazy(() => import('./toggle'))
  },
  'select': {
    'react-rsuite5': lazy(() => import('./select'))
  },
  'group': {
    'react-rsuite5': lazy(() => import('./group'))
  },
  'array': {
    'react-rsuite5': lazy(() => import('./array'))
  },
  'object': {
    'react-rsuite5': lazy(() => import('./object'))
  },
  'two-columns': {
    'react-rsuite5': lazy(() => import('./two-columns'))
  },
  'three-columns': {
    'react-rsuite5': lazy(() => import('./three-columns'))
  },
  'columns': {
    'react-rsuite5': lazy(() => import('./columns'))
  },
  'input-number': {
    'react-rsuite5': lazy(() => import('./input-number'))
  },
  'date': {
    'react-rsuite5': lazy(() => import('./date'))
  },
  'checkbox': {
    'react-rsuite5': lazy(() => import('./checkbox'))
  },
  'checkbox-group': {
    'react-rsuite5': lazy(() => import('./checkbox-group'))
  },
  'slider': {
    'react-rsuite5': lazy(() => import('./slider'))
  },
  'radio-group': {
    'react-rsuite5': lazy(() => import('./radio-group'))
  },
  'input-tag': {
    'react-rsuite5': lazy(() => import('./input-tag'))
  },
  'input-mask': {
    'react-rsuite5': lazy(() => import('./input-mask'))
  },
  'textarea': {
    'react-rsuite5': lazy(() => import('./textarea'))
  },
  'rate': {
    'react-rsuite5': lazy(() => import('./rate'))
  },
  'placeholder': {
    'react-rsuite5': lazy(() => import('./placeholder'))
  },
  'multiselect': {
    'react-rsuite5': lazy(() => import('./multiselect'))
  },
  'input-text-i18n': {
    'react-rsuite5': lazy(() => import('./input-text-i18n'))
  },
  'placeholder-image': {
    'react-rsuite5': lazy(() => import('./placeholder-image'))
  },
  'button': {
    'react-rsuite5': lazy(() => import('./button'))
  },
  'divider': {
    'react-rsuite5': lazy(() => import('../common/divider'))
  },
  'react-view': {
    'react-rsuite5': lazy(() => import('./react-view'))
  },
  'datetime': {
    'react-rsuite5': lazy(() => import('./datetime'))
  },
  'tabs': {
    'react-rsuite5': lazy(() => import('./tabs'))
  },
  'radio-tile': {
    'react-rsuite5': lazy(() => import('./radio-tile'))
  },
  'upload': {
    'react-rsuite5': lazy(() => import('./upload'))
  },
  'buttons-toggle-group': {
    'react-rsuite5': lazy(() => import('./buttons-toggle-group'))
  },
  'steps': {
    'react-rsuite5': lazy(() => import('./steps'))
  },
  'esm-module': {
    'react-rsuite5': lazy(() => import('./module'))
  },
  'time': {
    'react-rsuite5': lazy(() => import('./time'))
  },
  'hidden': {
    'react-rsuite5': lazy(() => import('./../common/hidden'))
  },
  'currency': {
    'react-rsuite5': lazy(() => import('./currency'))
  }
};

const Forms = {
  'react-rsuite5': lazy(() => import('./form'))
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = forwardRef(({ framework, children, ...rest}, ref) => {
  const refForm = useRef();
  useImperativeHandle(ref, () => ({
    validate: () => refForm.current.validate()
  }));
  return <FormGenerator ref={refForm} framework="react-rsuite5" {...rest}>{children}</FormGenerator>;
});

export default LetsForm ;
export * from '../helpers';
export * from '../costants';
export * from '../generator/helpers/dsl';
export { Fields, Forms };
