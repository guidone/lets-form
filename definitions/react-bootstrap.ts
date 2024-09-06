import { I18NObject, ValidationProps, CommonLetsFormProps, CommonLetsFormSchema } from './common';

export interface InputTextReactBootstrapProps extends ValidationProps {
  component: 'input-text';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  submitOnEnter?: boolean; // Trigger onSubmit / onError if the user hits Enter key
  size?: "lg" | "sm";
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  prefix?: string;
  postfix?: string;
  floatingLabel?: boolean; // Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix
};

export interface ToggleReactBootstrapProps extends ValidationProps {
  component: 'toggle';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
};

export interface SelectReactBootstrapProps extends ValidationProps {
  component: 'select';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  showImageOptions?: boolean; // Show image field for Select options to be displayed in the drop-down
  filterKey?: string;
  filterValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "lg" | "sm";
  floatingLabel?: boolean; // Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix
};

export interface InputNumberReactBootstrapProps extends ValidationProps {
  component: 'input-number';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  size?: "lg" | "sm";
  prefix?: string;
  postfix?: string;
  floatingLabel?: boolean; // Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix
  min?: number;
  step?: number;
  max?: number;
};

export interface SliderReactBootstrapProps extends ValidationProps {
  component: 'slider';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  min?: number;
  step?: number;
  max?: number;
};

export interface DateReactBootstrapProps extends ValidationProps {
  component: 'date';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "lg" | "sm";
  prefix?: string;
  postfix?: string;
  floatingLabel?: boolean; // Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
};

export interface CheckboxReactBootstrapProps extends ValidationProps {
  component: 'checkbox';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
};

export interface CheckboxGroupReactBootstrapProps extends ValidationProps {
  component: 'checkbox-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  inline?: boolean;
  reverse?: boolean;
};

export interface RadioGroupReactBootstrapProps extends ValidationProps {
  component: 'radio-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  inline?: boolean;
  reverse?: boolean;
};

export interface TextareaReactBootstrapProps extends ValidationProps {
  component: 'textarea';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  size?: "lg" | "sm";
  rows?: number;
};

export interface PlaceholderReactBootstrapProps extends ValidationProps {
  component: 'placeholder';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  text?: I18NObject; // Supports markdown (i.e., **bold**, _italics_)
  hidden?: boolean;
};

export interface PlaceholderImageReactBootstrapProps extends ValidationProps {
  component: 'placeholder-image';
  name?: string;
  url?: string;
  align?: "left" | "center" | "right";
  hidden?: boolean;
  maxWidth?: number;
  maxHeight?: number;
  marginTop?: number;
  marginBottom?: number;
};

export interface ButtonReactBootstrapProps extends ValidationProps {
  component: 'button';
  name?: string; // The name of the field and the key of the JSON
  buttonType?: "toggle" | "link"; // Type of button: toggle 2-states button or link button
  labelOn?: I18NObject;
  iconOn?: string;
  labelOff?: I18NObject;
  iconOff?: string;
  initialValue?: boolean;
  labelLink?: I18NObject;
  iconLink?: string;
  href?: string;
  hint?: I18NObject; // Show hint in a tooltip
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  hidden?: boolean;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark" | "link";
  size?: "lg" | "sm";
};

export interface DividerReactBootstrapProps extends ValidationProps {
  component: 'divider';
  name?: string; // The name of the field and the key of the JSON
  size?: number; // Thickness of the divider
  color?: string;
  hidden?: boolean;
};

export interface DatetimeReactBootstrapProps extends ValidationProps {
  component: 'datetime';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "lg" | "sm";
  prefix?: string;
  postfix?: string;
  floatingLabel?: boolean; // Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
};

export interface HiddenReactBootstrapProps extends ValidationProps {
  component: 'hidden';
  name?: string; // The name of the field and the key of the JSON
};

type LfFieldReactBootstrapProps =
  | InputTextReactBootstrapProps
  | ToggleReactBootstrapProps
  | SelectReactBootstrapProps
  | InputNumberReactBootstrapProps
  | SliderReactBootstrapProps
  | DateReactBootstrapProps
  | CheckboxReactBootstrapProps
  | CheckboxGroupReactBootstrapProps
  | RadioGroupReactBootstrapProps
  | TextareaReactBootstrapProps
  | PlaceholderReactBootstrapProps
  | PlaceholderImageReactBootstrapProps
  | ButtonReactBootstrapProps
  | DividerReactBootstrapProps
  | DatetimeReactBootstrapProps
  | HiddenReactBootstrapProps

export { LfFieldReactBootstrapProps };

export interface LfColumnsReactBootstrapProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
};

export interface LfColumnReactBootstrapProps {
  name?: string;
  alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
  size?: number;
};

export interface LfTabsReactBootstrapProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  variant?: "tabs" | "pills" | "underline";
  transition?: boolean; // Sets a default animation strategy for all children
  fill?: boolean; // Have all Tabss proportionately fill all available width
  justify?: boolean; // Have all Tabs evenly fill all available width
};

export interface LfTabReactBootstrapProps {
  value?: string;
  label?: I18NObject;
};

export interface LfStepsReactBootstrapProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  labelNext?: I18NObject;
  labelPrevious?: I18NObject;
  align?: "left" | "center" | "right";
};

export interface LfStepReactBootstrapProps {
};

export interface LfGroupReactBootstrapProps {
  name?: string;
  label?: I18NObject;
  hidden?: boolean;
  align?: "left" | "center" | "right";
  collapsible?: boolean;
  open?: boolean;
  border?: "top" | "bottom" | "topBottom" | "boxed";
};

export interface LfArrayReactBootstrapProps {
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  align?: "top" | "center" | "bottom"; // Vertical alignment of add / remove buttons
  alignOffset?: number; // Offset of the add / remove button from the top / bottom (depends on the alignment)
  arrayType?: "arrayOfObject" | "arrayOfString" | "commaSeparated"; // Defines the result of the list component, "arrayOfString" and "commaSeparated" only applies if list field has only one field
};

export interface LetsFormReactBootstrapProps extends CommonLetsFormProps {
};

interface GroupReactBootstrapProps extends LfGroupReactBootstrapProps {
  component: "group";
  fields: Array<LfFieldReactBootstrapProps | ArrayReactBootstrapProps | ColumnsReactBootstrapProps | StepsReactBootstrapProps | TabsReactBootstrapProps>;
};

interface ArrayReactBootstrapProps extends LfArrayReactBootstrapProps {
  component: "array";
  fields: Array<LfFieldReactBootstrapProps | GroupReactBootstrapProps | ColumnsReactBootstrapProps>;
};

interface ColumnsReactBootstrapProps extends LfColumnsReactBootstrapProps {
  component: "columns";
  fields: { [index: string]: Array<LfFieldReactBootstrapProps | ArrayReactBootstrapProps | GroupReactBootstrapProps | TabsReactBootstrapProps | StepsReactBootstrapProps>; };
  columns: Array<{
    name?: string;
    alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
    size?: number;
  }>;
};

interface StepsReactBootstrapProps extends LfStepsReactBootstrapProps {
  component: "steps";
  fields: { [index: string]: Array<LfFieldReactBootstrapProps | ArrayReactBootstrapProps | ColumnsReactBootstrapProps | GroupReactBootstrapProps | TabsReactBootstrapProps>; };
};

interface TabsReactBootstrapProps extends LfTabsReactBootstrapProps {
  component: "tabs";
  fields: { [index: string]: Array<LfFieldReactBootstrapProps | ArrayReactBootstrapProps | ColumnsReactBootstrapProps | GroupReactBootstrapProps | StepsReactBootstrapProps>; };
  tabs: Array<{
    value?: string;
    label?: I18NObject;
  }>;
};


export interface LetsFormSchemaReactBootstrap extends CommonLetsFormSchema {
  fields: Array<LfFieldReactBootstrapProps | GroupReactBootstrapProps | ArrayReactBootstrapProps | ColumnsReactBootstrapProps | StepsReactBootstrapProps | TabsReactBootstrapProps>;
};
