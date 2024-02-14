import React from 'react';

import { GenerateGenerator } from '../generator';
import { lazyPreload as lazy } from '../helpers/lazy-preload';

const Fields = {
  'input-text': {
    'react-mantine': lazy(() => import('./input-text'))
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
