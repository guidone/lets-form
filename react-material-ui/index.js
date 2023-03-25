import { GenerateGenerator } from "../generator";

import { FormMaterialUI } from './form';
import { TextInput } from './input-text';
import { Select } from './select';
import { Toggle } from './toggle';
import { Slider } from './slider';

/*import { ToggleInput } from './toggle';

import { FieldsGroup } from './group';
import { ListArray } from './array';
import { TwoColumns } from './two-columns';
import { ThreeColumns } from './three-columns';
import { InputNumber } from './input-number';*/


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
  'slider': {
    'react-material-ui': Slider
  }
  /*'toggle': {
    'react-rsuite5': ToggleInput
  },
  'group': {
    'react-rsuite5': FieldsGroup
  },
  'array': {
    'react-rsuite5': ListArray
  },
  'two-columns': {
    'react-rsuite5': TwoColumns
  },
  'three-columns': {
    'react-rsuite5': ThreeColumns
  },
  'input-number': {
    'react-rsuite5': InputNumber
  }*/
};

const Forms = {
  'react-material-ui': FormMaterialUI
}

const FormGenerator = GenerateGenerator({ Fields, Forms });

export default FormGenerator ;
export * from '../helpers';
export { Fields, Forms };
