import React from 'react';

import { GenerateGenerator } from "../generator";

import { FormMaterialUI } from './form';
import { TextInput } from './input-text';
import { Select } from './select';
import { Toggle } from './toggle';
import { Slider } from './slider';
import { Placeholder } from './placeholder';
import { PlaceholderImage } from './placeholder-image';
import { Checkbox } from './checkbox';
import { Rate } from './rate';
import { MuiDate } from './date';
import { ThreeColumns } from './three-columns';
import { TwoColumns } from './two-columns';
import { Group } from './group';
import { Divider } from './divider';
import { ReactView } from './react-view';
import { MuiDateTime } from './datetime';
import { ListArray } from './array';
import { Textarea } from './textarea';
import { Multiselect } from './multiselect';
import { InputNumber } from './input-number';
import { RadioGroup } from './radio-group';
import { CheckboxGroup } from './checkbox-group';
import { Tabs } from './tabs';
import { Button } from './button';

const Fields = {
  'input-text': {
    'react-material-ui': TextInput
  },
  'select': {
    'react-material-ui': Select
  },
  'toggle': {
    'react-material-ui': Toggle
  },
  'checkbox': {
    'react-material-ui': Checkbox
  },
  'slider': {
    'react-material-ui': Slider
  },
  'placeholder': {
    'react-material-ui': Placeholder
  },
  'rate': {
    'react-material-ui': Rate
  },
  'date': {
    'react-material-ui': MuiDate
  },
  'three-columns': {
    'react-material-ui': ThreeColumns
  },
  'two-columns': {
    'react-material-ui': TwoColumns
  },
  'group': {
    'react-material-ui': Group
  },
  'placeholder-image': {
    'react-material-ui': PlaceholderImage
  },
  'divider': {
    'react-material-ui': Divider
  },
  'react-view': {
    'react-material-ui': ReactView
  },
  'datetime': {
    'react-material-ui': MuiDateTime
  },
  'array': {
    'react-material-ui': ListArray
  },
  'textarea': {
    'react-material-ui': Textarea
  },
  'multiselect': {
    'react-material-ui': Multiselect
  },
  'input-number': {
    'react-material-ui': InputNumber
  },
  'radio-group': {
    'react-material-ui': RadioGroup
  },
  'checkbox-group': {
    'react-material-ui': CheckboxGroup
  },
  'tabs': {
    'react-material-ui': Tabs
  },
  'button': {
    'react-material-ui': Button
  }
};

const Forms = {
  'react-material-ui': FormMaterialUI
}

const FormGenerator = GenerateGenerator({ Fields, Forms });
const LetsForm = ({ framework, children, ...rest}) => (
  <FormGenerator framework="react-material-ui" {...rest}>{children}</FormGenerator>
);
export default LetsForm;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
