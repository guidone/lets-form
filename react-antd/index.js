import { GenerateGenerator } from '../generator';

import { Form } from './form';
import { TextInput } from './input-text';
import { Toggle } from './toggle';
import { Checkbox } from './checkbox';
import { Date } from './date';
import { Select } from './select';
import { RadioGroup } from './radio-group';
import { Rate } from './rate';
import { Placeholder } from './placeholder';
import { InputNumber } from './input-number';
import { Textarea } from './textarea';
import { Multiselect } from './multiselect';

const Fields = {
  'text-input': {
    'react-antd': TextInput
  },
  'toggle': {
    'react-antd': Toggle
  },
  'checkbox': {
    'react-antd': Checkbox
  },
  'date': {
    'react-antd': Date
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
  'input-number': {
    'react-antd': InputNumber
  },
  'textarea': {
    'react-antd': Textarea
  },
  'multiselect': {
    'react-antd': Multiselect
  }
};

const Forms = {
  'react-antd': Form
};

const FormGenerator = GenerateGenerator({ Fields, Forms });

export default FormGenerator ;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
