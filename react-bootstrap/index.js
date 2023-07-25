import React from 'react';

import { GenerateGenerator } from '../generator';

import { FormBootstrap } from './form';
import { TextInput } from './input-text';
import { Select } from './select';
import { Checkbox } from './checkbox';
import { Toggle } from './toggle';
import { CheckboxGroup } from './checkbox-group';
import { RadioGroup } from './radio-group';
import { Placeholder } from './placeholder';
import { PlaceholderImage } from './placeholder-image';
import { Date } from './date';
import { DateTime } from './datetime';
import { Textarea } from './textarea';
import { Slider } from './slider';
import { ThreeColumns } from './three-columns';
import { TwoColumns } from './two-columns';
import { Group } from './group';
import { Divider } from './divider';
import { ReactView } from './react-view';
import { ListArray } from './array';
import { InputNumber } from './input-number';
import { Tabs } from './tabs';
import { Button } from './button';

const Fields = {
  'input-text': {
    'react-bootstrap': TextInput
  },
  'select': {
    'react-bootstrap': Select
  },
  'checkbox': {
    'react-bootstrap': Checkbox
  },
  'toggle': {
    'react-bootstrap': Toggle
  },
  'checkbox-group': {
    'react-bootstrap': CheckboxGroup
  },
  'placeholder': {
    'react-bootstrap': Placeholder
  },
  'placeholder-image': {
    'react-bootstrap': PlaceholderImage
  },
  'date': {
    'react-bootstrap': Date
  },
  'textarea': {
    'react-bootstrap': Textarea
  },
  'slider': {
    'react-bootstrap': Slider
  },
  'three-columns': {
    'react-bootstrap': ThreeColumns
  },
  'two-columns': {
    'react-bootstrap': TwoColumns
  },
  'group': {
    'react-bootstrap': Group
  },
  'radio-group': {
    'react-bootstrap': RadioGroup
  },
  'divider': {
    'react-bootstrap': Divider
  },
  'react-view': {
    'react-bootstrap': ReactView
  },
  'datetime': {
    'react-bootstrap': DateTime
  },
  'array': {
    'react-bootstrap': ListArray
  },
  'input-number': {
    'react-bootstrap': InputNumber
  },
  'tabs': {
    'react-bootstrap': Tabs
  },
  'button': {
    'react-bootstrap': Button
  }
};

const Forms = {
  'react-bootstrap': FormBootstrap
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = ({ framework, children, ...rest}) => (
  <FormGenerator framework="react-bootstrap" {...rest}>{children}</FormGenerator>
);
export default LetsForm;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
