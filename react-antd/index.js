import React from 'react';

import { GenerateGenerator } from '../generator';

import { Form } from './form';
import { TextInput } from './input-text';
import { Toggle } from './toggle';
import { Checkbox } from './checkbox';
import { AntdDate } from './date';
import { Datetime } from './datetime';
import { Select } from './select';
import { RadioGroup } from './radio-group';
import { Rate } from './rate';
import { Placeholder } from './placeholder';
import { PlaceholderImage } from './placeholder-image';
import { InputNumber } from './input-number';
import { Textarea } from './textarea';
import { Multiselect } from './multiselect';
import { ThreeColumns } from './three-columns';
import { TwoColumns } from './two-columns';
import { Group } from './group';
import { Slider } from './slider';
import { Divider } from './divider';
import { ReactView } from './react-view';
import { ListArray } from './array';
import { Button } from './button';
import { CheckboxGroup } from './checkbox-group';
import { Tabs } from './tabs';
import { Upload } from './upload';
import { ButtonsToggleGroup } from './buttons-toggle-group'; 
import { Steps } from './steps';

const Fields = {
  'input-text': {
    'react-antd': TextInput
  },
  'toggle': {
    'react-antd': Toggle
  },
  'checkbox': {
    'react-antd': Checkbox
  },
  'date': {
    'react-antd': AntdDate
  },
  'select': {
    'react-antd': Select
  },
  'radio-group': {
    'react-antd': RadioGroup
  },
  'rate': {
    'react-antd': Rate
  },
  'placeholder': {
    'react-antd': Placeholder
  },
  'placeholder-image': {
    'react-antd': PlaceholderImage
  },
  'input-number': {
    'react-antd': InputNumber
  },
  'textarea': {
    'react-antd': Textarea
  },
  'multiselect': {
    'react-antd': Multiselect
  },
  'three-columns': {
    'react-antd': ThreeColumns
  },
  'two-columns': {
    'react-antd': TwoColumns
  },
  'group': {
    'react-antd': Group
  },
  'slider': {
    'react-antd': Slider
  },
  'divider': {
    'react-antd': Divider
  },
  'react-view': {
    'react-antd': ReactView
  },
  'datetime': {
    'react-antd': Datetime
  },
  'array': {
    'react-antd': ListArray
  },
  'button': {
    'react-antd': Button
  },
  'checkbox-group': {
    'react-antd': CheckboxGroup
  },
  'tabs': {
    'react-antd': Tabs
  },
  'upload': {
    'react-antd': Upload
  },
  'buttons-toggle-group': {
    'react-antd': ButtonsToggleGroup
  },
  'steps': {
    'react-antd': Steps
  }
};

const Forms = {
  'react-antd': Form
};

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = ({ framework, children, ...rest}) => (
  <FormGenerator framework="react-antd" {...rest}>{children}</FormGenerator>
);
export default LetsForm;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
