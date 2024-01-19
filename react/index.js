import React from 'react';

import { GenerateGenerator } from '../generator';

import { FormReact } from './form';
import { TextInput } from './input-text';
import { InputNumber } from './input-number';
import { Checkbox } from './checkbox';
import { Textarea } from './textarea';
import { ThreeColumns } from './three-columns';
import { TwoColumns } from './two-columns';
import { Group } from './group';
import { Divider } from './divider';
import { ReactView } from './react-view';
import { Placeholder } from './placeholder';
import { Select } from './select';
import { DateInput } from './date';
import { ListArray } from './array';
//import { Toggle } from './toggle';
import { DateTime } from './datetime';
import { PlaceholderImage } from './placeholder-image';
import { Button } from './button';

const Fields = {
  'input-text': {
    'react': TextInput
  },
  'input-number': {
    'react': InputNumber
  },
  'checkbox': {
    'react': Checkbox
  },
  'textarea': {
    'react': Textarea
  },
  'three-columns': {
    'react': ThreeColumns
  },
  'two-columns': {
    'react': TwoColumns
  },
  'group': {
    'react': Group
  },
  'divider': {
    'react': Divider
  },
  'react-view': {
    'react': ReactView
  },
  'placeholder': {
    'react': Placeholder
  },
  'select': {
    'react': Select
  },
  'date': {
    'react': DateInput
  },
  'datetime': {
    'react': DateTime
  },
  'array': {
    'react': ListArray
  },
  'placeholder-image': {
    'react': PlaceholderImage
  },
  'button': {
    'react': Button
  }
  // Removed, doesn't work
  /*'toggle': {
    'react': Toggle
  }*/
};

const Forms = {
  'react': FormReact
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = ({ framework, children, ...rest}) => (
  <FormGenerator framework="react" {...rest}>{children}</FormGenerator>
);
export default LetsForm;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
