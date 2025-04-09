import { I18NObject, ValidationProps, CommonLetsFormProps, CommonLetsFormSchema } from './common';

export interface InputTextReactProps extends ValidationProps {
  component: 'input-text';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  submitOnEnter?: boolean; // Trigger onSubmit / onError if the user hits Enter key
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
};

export interface SelectReactProps extends ValidationProps {
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
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
};

export interface ObjectReactProps extends ValidationProps {
  component: 'object';
  name?: string;
  label?: I18NObject;
  hidden?: boolean;
  align?: "left" | "center" | "right";
  collapsible?: boolean;
  open?: boolean;
  border?: "top" | "bottom" | "topBottom" | "boxed";
};

export interface InputNumberReactProps extends ValidationProps {
  component: 'input-number';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  min?: number;
  step?: number;
  max?: number;
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
};

export interface DateReactProps extends ValidationProps {
  component: 'date';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
};

export interface CheckboxReactProps extends ValidationProps {
  component: 'checkbox';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
};

export interface TextareaReactProps extends ValidationProps {
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
  rows?: number;
};

export interface PlaceholderReactProps extends ValidationProps {
  component: 'placeholder';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  text?: I18NObject; // Supports markdown (i.e., **bold**, _italics_)
  hidden?: boolean;
};

export interface PlaceholderImageReactProps extends ValidationProps {
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

export interface ButtonReactProps extends ValidationProps {
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
};

export interface DividerReactProps extends ValidationProps {
  component: 'divider';
  name?: string; // The name of the field and the key of the JSON
  size?: number; // Thickness of the divider
  color?: string;
  hidden?: boolean;
};

export interface DatetimeReactProps extends ValidationProps {
  component: 'datetime';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
};

export interface UploadReactProps extends ValidationProps {
  component: 'upload';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  hidden?: boolean;
  uploadButtonLabel?: I18NObject;
  multiple?: boolean; // Allow selecting multiple files
};

export interface TimeReactProps extends ValidationProps {
  component: 'time';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
};

export interface HiddenReactProps extends ValidationProps {
  component: 'hidden';
  name?: string; // The name of the field and the key of the JSON
};

export interface CurrencyReactProps extends ValidationProps {
  component: 'currency';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  currency?: "AFN" | "ALL" | "DZD" | "ARS" | "AMD" | "AUD" | "AZN" | "BHD" | "BDT" | "BYN" | "BZD" | "BOB" | "BAM" | "BWP" | "BRL" | "GBP" | "BND" | "BGN" | "BIF" | "XOF" | "XAF" | "KHR" | "CAD" | "CVE" | "CLP" | "CNY" | "COP" | "KMF" | "CDF" | "CRC" | "HRK" | "CZK" | "DKK" | "DJF" | "DOP" | "EGP" | "ERN" | "EEK" | "ETB" | "EUR" | "GEL" | "GHS" | "GTQ" | "GNF" | "HNL" | "HKD" | "HUF" | "ISK" | "INR" | "IDR" | "IRR" | "IQD" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KWD" | "LVL" | "LBP" | "LYD" | "LTL" | "MOP" | "MKD" | "MGA" | "MYR" | "MUR" | "MXN" | "MDL" | "MAD" | "MZN" | "MMK" | "NAD" | "NPR" | "TWD" | "NZD" | "NIO" | "NGN" | "NOK" | "OMR" | "PKR" | "PAB" | "PYG" | "PEN" | "PHP" | "PLN" | "QAR" | "RON" | "RUB" | "RWF" | "SAR" | "RSD" | "SGD" | "SOS" | "ZAR" | "KRW" | "LKR" | "SDG" | "SEK" | "CHF" | "SYP" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRY" | "USD" | "UGX" | "UAH" | "AED" | "UYU" | "UZS" | "VEF" | "VND" | "YER" | "ZMK" | "ZWL";
  align?: "left" | "center" | "right"; // Currency alignment in the input field
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
};

type LfFieldReactProps =
  | InputTextReactProps
  | SelectReactProps
  | ObjectReactProps
  | InputNumberReactProps
  | DateReactProps
  | CheckboxReactProps
  | TextareaReactProps
  | PlaceholderReactProps
  | PlaceholderImageReactProps
  | ButtonReactProps
  | DividerReactProps
  | DatetimeReactProps
  | UploadReactProps
  | TimeReactProps
  | HiddenReactProps
  | CurrencyReactProps

export type { LfFieldReactProps };

export interface LfColumnsReactProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
};

export interface LfColumnReactProps {
  name?: string;
  alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
  size?: number;
};

export interface LfTabsReactProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
};

export interface LfTabReactProps {
  value?: string;
  label?: I18NObject;
};

export interface LfStepsReactProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  labelNext?: I18NObject;
  labelPrevious?: I18NObject;
  align?: "left" | "center" | "right";
};

export interface LfStepReactProps {
};

export interface LfGroupReactProps {
  name?: string;
  label?: I18NObject;
  hidden?: boolean;
  align?: "left" | "center" | "right";
  collapsible?: boolean;
  open?: boolean;
  border?: "top" | "bottom" | "topBottom" | "boxed";
};

export interface LfArrayReactProps {
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  align?: "top" | "center" | "bottom"; // Vertical alignment of add / remove buttons
  alignOffset?: number; // Offset of the add / remove button from the top / bottom (depends on the alignment)
  arrayType?: "arrayOfObject" | "arrayOfValues" | "commaSeparated"; // Defines the result of the list component, "arrayOfString" and "commaSeparated" only applies if list field has only one field
};

export interface LetsFormReactProps extends CommonLetsFormProps {
  form: LetsFormSchemaReact;
};

interface GroupReactProps extends LfGroupReactProps {
  component: "group";
  fields: Array<LfFieldReactProps | ArrayReactProps | ColumnsReactProps | StepsReactProps | TabsReactProps>;
};

interface ArrayReactProps extends LfArrayReactProps {
  component: "array";
  fields: Array<LfFieldReactProps | GroupReactProps | ColumnsReactProps>;
};

interface ColumnsReactProps extends LfColumnsReactProps {
  component: "columns";
  fields: { [index: string]: Array<LfFieldReactProps | ArrayReactProps | GroupReactProps | TabsReactProps | StepsReactProps>; };
  columns: Array<{
    name?: string;
    alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
    size?: number;
  }>;
};

interface StepsReactProps extends LfStepsReactProps {
  component: "steps";
  fields: { [index: string]: Array<LfFieldReactProps | ArrayReactProps | ColumnsReactProps | GroupReactProps | TabsReactProps>; };
};

interface TabsReactProps extends LfTabsReactProps {
  component: "tabs";
  fields: { [index: string]: Array<LfFieldReactProps | ArrayReactProps | ColumnsReactProps | GroupReactProps | StepsReactProps>; };
  tabs: Array<{
    value?: string;
    label?: I18NObject;
  }>;
};


export interface LetsFormSchemaReact extends CommonLetsFormSchema {
  fields: Array<LfFieldReactProps | GroupReactProps | ArrayReactProps | ColumnsReactProps | StepsReactProps | TabsReactProps>;
};
