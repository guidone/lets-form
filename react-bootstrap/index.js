import { GenerateGenerator } from '../generator';

import { FormBootstrap } from './form';
import { TextInput } from './input-text';
import { Select } from './select';
import { Checkbox } from './checkbox';
import { Toggle } from './toggle';
import { CheckboxGroup } from './checkbox-group';
import { Placeholder } from './placeholder';

/*import { Toggle } from './toggle';
import { Slider } from './slider';*/

const Fields = {
  'text-input': {
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
  }
  /*

  'slider': {
    'react-material-ui': Slider
  }*/
};

const Forms = {
  'react-bootstrap': FormBootstrap
}

const FormGenerator = GenerateGenerator({ Fields, Forms });

export default FormGenerator ;
export * from '../helpers';
export * from '../costants';
export { Fields, Forms };
