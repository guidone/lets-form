import { GenerateGenerator } from "../generator";

import { FormReact } from './form';
import { TextInput } from './input-text';
import { Checkbox } from './checkbox';
import { Textarea } from './textarea';
import { ThreeColumns } from './three-columns';
import { TwoColumns } from './two-columns';
import { Group } from './group';

const Fields = {
  'text-input': {
    'react': TextInput
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
  }
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
export { Fields, Forms };
