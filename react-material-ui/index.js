import { GenerateGenerator } from "../generator";

import { FormMaterialUI } from './form';
import { TextInput } from './input-text';
import { Select } from './select';
import { Toggle } from './toggle';
import { Slider } from './slider';
import { Placeholder } from './placeholder';
import { Checkbox } from './checkbox';
import { Rate } from './rate';
import { Date } from './date';
import { ThreeColumns } from './three-columns';
import { TwoColumns } from './two-columns';

const Fields = {
  'text-input': {
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
    'react-material-ui': Date
  },
  'three-columns': {
    'react-material-ui': ThreeColumns
  },
  'two-columns': {
    'react-material-ui': TwoColumns
  }
};

const Forms = {
  'react-material-ui': FormMaterialUI
}

const FormGenerator = GenerateGenerator({ Fields, Forms });

export default FormGenerator ;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
