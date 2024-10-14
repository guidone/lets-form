import { I18NObject, ValidationProps, CommonLetsFormProps, CommonLetsFormSchema } from './common';

export interface InputTextReactMaterialUiProps extends ValidationProps {
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
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  floatingLabel?: boolean; // Show floating label for the control
  disableUnderline?: boolean; // Disable underline in "filled" and "standard" variant
  prefix?: string;
  postfix?: string;
};

export interface ToggleReactMaterialUiProps extends ValidationProps {
  component: 'toggle';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium" | "large";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  labelPlacement?: "top" | "start" | "bottom" | "end";
  disableRipple?: boolean; // Disable CSS ripple effect
};

export interface SelectReactMaterialUiProps extends ValidationProps {
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
  size?: "small" | "medium";
  autoWidth?: boolean; // If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input.
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  floatingLabel?: boolean; // Show floating label for the control
  variant?: "outlined" | "filled" | "standard";
};

export interface InputNumberReactMaterialUiProps extends ValidationProps {
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
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  floatingLabel?: boolean; // Show floating label for the control
  disableUnderline?: boolean; // Disable underline in "filled" and "standard" variant
  prefix?: string;
  postfix?: string;
};

export interface SliderReactMaterialUiProps extends ValidationProps {
  component: 'slider';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  min?: number;
  step?: number;
  max?: number;
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  valueLabelDisplay?: "auto" | "on" | "off"; // How to show the value of the label
  showMarks?: boolean;
};

export interface DateReactMaterialUiProps extends ValidationProps {
  component: 'date';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "filled" | "standard";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  format?: string; // Check https://date-fns.org library for available formats
  views?: Array<"day" | "month" | "year">; // Available views
  closeOnSelect?: boolean; // If true, the popover or modal will close after submitting the full date
  reduceAnimations?: boolean; // If true, disable heavy animations
  showDaysOutsideCurrentMonth?: boolean; // If true, days outside the current month are rendered:- if fixedWeekNumber is defined, renders days to have the weeks requested.- if fixedWeekNumber is not defined, renders day to fill the first and last week of the current month.- ignored if calendars equals more than 1 on range pickers
  floatingLabel?: boolean; // Show floating label for the control
  disableFuture?: boolean; // If true, disable values after the current date for date components, time for time components and both for date time components
  disableHighlightToday?: boolean; // If true, today's date is rendering without highlighting with circle
  disableOpenPicker?: boolean; // If true, the open picker button will not be rendered (renders only the field)
  disablePast?: boolean; // If true, disable values before the current date for date components, time for time components and both for date time components
  displayWeekNumber?: boolean; // If true, the week number will be display in the calendar
  loading?: boolean; // If true, calls renderLoading instead of rendering the day calendar. Can be used to preload information and show it in calendar
  fixedWeekNumber?: number; // The day view will show as many weeks as needed after the end of the current month to match this value. Put it to 6 to have a fixed number of weeks in Gregorian calendars
  formatDensity?: "dense" | "spacious"; // Density of the format when rendered in the input. Setting formatDensity to "spacious" will add a space before and after each /, - and . character
  monthsPerRow?: 3 | 4; // Months rendered per row
  yearsPerRow?: 3 | 4; // Years rendered per row
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  minDate?: string;
  maxDate?: string;
};

export interface CheckboxReactMaterialUiProps extends ValidationProps {
  component: 'checkbox';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium" | "large";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  labelPlacement?: "top" | "start" | "bottom" | "end";
  disableRipple?: boolean; // Disable CSS ripple effect
};

export interface CheckboxGroupReactMaterialUiProps extends ValidationProps {
  component: 'checkbox-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium" | "large";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  labelPlacement?: "top" | "start" | "bottom" | "end";
};

export interface RadioGroupReactMaterialUiProps extends ValidationProps {
  component: 'radio-group';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium" | "large";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  labelPlacement?: "top" | "start" | "bottom" | "end";
  row?: boolean;
};

export interface TextareaReactMaterialUiProps extends ValidationProps {
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
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  floatingLabel?: boolean; // Show floating label for the control
  disableUnderline?: boolean; // Disable underline in "filled" and "standard" variant
  maxRows?: number;
};

export interface RateReactMaterialUiProps extends ValidationProps {
  component: 'rate';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium" | "large";
  precision?: 0.1 | 0.2 | 0.5 | 1; // The minimum increment value change allowed
  max?: number;
};

export interface PlaceholderReactMaterialUiProps extends ValidationProps {
  component: 'placeholder';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  text?: I18NObject; // Supports markdown (i.e., **bold**, _italics_)
  hidden?: boolean;
};

export interface MultiselectReactMaterialUiProps extends ValidationProps {
  component: 'multiselect';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  filterKey?: string;
  filterValue?: string;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium";
  autoWidth?: boolean; // If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input.
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  floatingLabel?: boolean; // Show floating label for the control
  variant?: "outlined" | "filled" | "standard";
};

export interface PlaceholderImageReactMaterialUiProps extends ValidationProps {
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

export interface ButtonReactMaterialUiProps extends ValidationProps {
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
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "filled" | "standard";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
};

export interface DividerReactMaterialUiProps extends ValidationProps {
  component: 'divider';
  name?: string; // The name of the field and the key of the JSON
  size?: number; // Thickness of the divider
  color?: string;
  hidden?: boolean;
};

export interface DatetimeReactMaterialUiProps extends ValidationProps {
  component: 'datetime';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "filled" | "standard";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  format?: string; // Check https://date-fns.org library for available formats
  views?: Array<"hours" | "minutes" | "seconds" | "day" | "month" | "year">;
  closeOnSelect?: boolean; // If true, the popover or modal will close after submitting the full date
  reduceAnimations?: boolean; // If true, disable heavy animations
  showDaysOutsideCurrentMonth?: boolean; // If true, days outside the current month are rendered:- if fixedWeekNumber is defined, renders days to have the weeks requested.- if fixedWeekNumber is not defined, renders day to fill the first and last week of the current month.- ignored if calendars equals more than 1 on range pickers
  floatingLabel?: boolean; // Show floating label for the control
  disableFuture?: boolean; // If true, disable values after the current date for date components, time for time components and both for date time components
  disableHighlightToday?: boolean; // If true, today's date is rendering without highlighting with circle
  disableOpenPicker?: boolean; // If true, the open picker button will not be rendered (renders only the field)
  disablePast?: boolean; // If true, disable values before the current date for date components, time for time components and both for date time components
  displayWeekNumber?: boolean; // If true, the week number will be display in the calendar
  ampm?: boolean; // 12h/24h view for hour selection clock
  ampmInClock?: boolean; // Display ampm controls under the clock (instead of in the toolbar)
  forceMobile?: boolean; // Force mobile component
  loading?: boolean; // If true, calls renderLoading instead of rendering the day calendar. Can be used to preload information and show it in calendar
  fixedWeekNumber?: number; // The day view will show as many weeks as needed after the end of the current month to match this value. Put it to 6 to have a fixed number of weeks in Gregorian calendars
  formatDensity?: "dense" | "spacious"; // Density of the format when rendered in the input. Setting formatDensity to "spacious" will add a space before and after each /, - and . character
  monthsPerRow?: 3 | 4; // Months rendered per row
  yearsPerRow?: 3 | 4; // Years rendered per row
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  minDate?: string;
  maxDate?: string;
  minDateTime?: string;
  maxDateTime?: string;
  minutesStep?: number; // Step over minutes
  timeStepsHours?: number; // The time steps between two time unit options. For example, if timeStep.minutes = 8, then the available minute options will be [0, 8, 16, 24, 32, 40, 48, 56]
  timeStepsMinutes?: number;
  timeStepsSeconds?: number;
};

export interface UploadReactMaterialUiProps extends ValidationProps {
  component: 'upload';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  disabled?: boolean;
  hidden?: boolean;
  multiple?: boolean; // Allow selecting multiple files
  uploadButtonLabel?: I18NObject;
  uploadButtonVariant?: "contained" | "outlined" | "text";
  uploadButtonSize?: "small" | "medium" | "large";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  uploadButtonIcon?: string;
};

export interface TimeReactMaterialUiProps extends ValidationProps {
  component: 'time';
  name?: string; // The name of the field and the key of the JSON
  label?: I18NObject;
  hint?: I18NObject;
  placeholder?: I18NObject;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "filled" | "standard";
  color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
  format?: string; // Check https://date-fns.org library for available formats
  views?: Array<"hours" | "minutes" | "seconds">;
  floatingLabel?: boolean; // Show floating label for the control
  ampm?: boolean; // 12h/24h view for hour selection clock
  ampmInClock?: boolean; // Display ampm controls under the clock (instead of in the toolbar)
  forceMobile?: boolean; // Force mobile component
  closeOnSelect?: boolean; // If true, the popover or modal will close after submitting the full date.
  disableFuture?: boolean; // If true, disable values after the current date for date components, time for time components and both for date time components.
  disableOpenPicker?: boolean; // If true, the open picker button will not be rendered (renders only the field)
  disablePast?: boolean; // If true, disable values before the current date for date components, time for time components and both for date time components
  fullWidth?: boolean; // Set the width of the field to 100% of the enclosing container
  width?: number; // Set the width (in pixel) of the field
  minTime?: string;
  maxTime?: string;
  formatDensity?: "dense" | "spacious"; // Density of the format when rendered in the input. Setting formatDensity to "spacious" will add a space before and after each /, - and . character
  minutesStep?: number; // Step over minutes
  timeStepsHours?: number; // The time steps between two time unit options. For example, if timeStep.minutes = 8, then the available minute options will be [0, 8, 16, 24, 32, 40, 48, 56]
  timeStepsMinutes?: number;
  timeStepsSeconds?: number;
};

export interface HiddenReactMaterialUiProps extends ValidationProps {
  component: 'hidden';
  name?: string; // The name of the field and the key of the JSON
};

type LfFieldReactMaterialUiProps =
  | InputTextReactMaterialUiProps
  | ToggleReactMaterialUiProps
  | SelectReactMaterialUiProps
  | InputNumberReactMaterialUiProps
  | SliderReactMaterialUiProps
  | DateReactMaterialUiProps
  | CheckboxReactMaterialUiProps
  | CheckboxGroupReactMaterialUiProps
  | RadioGroupReactMaterialUiProps
  | TextareaReactMaterialUiProps
  | RateReactMaterialUiProps
  | PlaceholderReactMaterialUiProps
  | MultiselectReactMaterialUiProps
  | PlaceholderImageReactMaterialUiProps
  | ButtonReactMaterialUiProps
  | DividerReactMaterialUiProps
  | DatetimeReactMaterialUiProps
  | UploadReactMaterialUiProps
  | TimeReactMaterialUiProps
  | HiddenReactMaterialUiProps

export type { LfFieldReactMaterialUiProps };

export interface LfColumnsReactMaterialUiProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
};

export interface LfColumnReactMaterialUiProps {
  name?: string;
  alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
  size?: number;
};

export interface LfTabsReactMaterialUiProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  indicatorColor?: "primary" | "secondary";
  textColor?: "primary" | "secondary" | "inherit";
  centered?: boolean; // If true, the tabs are centered. This prop is intended for large views
  fullWidth?: boolean; // Will make the tabs grow to use all the available space
};

export interface LfTabReactMaterialUiProps {
  value?: string;
  label?: I18NObject;
};

export interface LfStepsReactMaterialUiProps {
  name?: string; // The name of the field and the key of the JSON
  hidden?: boolean;
  labelNext?: I18NObject;
  labelPrevious?: I18NObject;
  align?: "left" | "center" | "right";
};

export interface LfStepReactMaterialUiProps {
};

export interface LfGroupReactMaterialUiProps {
  name?: string;
  label?: I18NObject;
  hidden?: boolean;
  align?: "left" | "center" | "right";
  collapsible?: boolean;
  open?: boolean;
  border?: "top" | "bottom" | "topBottom" | "boxed";
};

export interface LfArrayReactMaterialUiProps {
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

export interface LetsFormReactMaterialUiProps extends CommonLetsFormProps {
};

interface GroupReactMaterialUiProps extends LfGroupReactMaterialUiProps {
  component: "group";
  fields: Array<LfFieldReactMaterialUiProps | ArrayReactMaterialUiProps | ColumnsReactMaterialUiProps | StepsReactMaterialUiProps | TabsReactMaterialUiProps>;
};

interface ArrayReactMaterialUiProps extends LfArrayReactMaterialUiProps {
  component: "array";
  fields: Array<LfFieldReactMaterialUiProps | GroupReactMaterialUiProps | ColumnsReactMaterialUiProps>;
};

interface ColumnsReactMaterialUiProps extends LfColumnsReactMaterialUiProps {
  component: "columns";
  fields: { [index: string]: Array<LfFieldReactMaterialUiProps | ArrayReactMaterialUiProps | GroupReactMaterialUiProps | TabsReactMaterialUiProps | StepsReactMaterialUiProps>; };
  columns: Array<{
    name?: string;
    alignment?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset"; // Flex "align-self" attribute for the column
    size?: number;
  }>;
};

interface StepsReactMaterialUiProps extends LfStepsReactMaterialUiProps {
  component: "steps";
  fields: { [index: string]: Array<LfFieldReactMaterialUiProps | ArrayReactMaterialUiProps | ColumnsReactMaterialUiProps | GroupReactMaterialUiProps | TabsReactMaterialUiProps>; };
};

interface TabsReactMaterialUiProps extends LfTabsReactMaterialUiProps {
  component: "tabs";
  fields: { [index: string]: Array<LfFieldReactMaterialUiProps | ArrayReactMaterialUiProps | ColumnsReactMaterialUiProps | GroupReactMaterialUiProps | StepsReactMaterialUiProps>; };
  tabs: Array<{
    value?: string;
    label?: I18NObject;
  }>;
};


export interface LetsFormSchemaReactMaterialUi extends CommonLetsFormSchema {
  fields: Array<LfFieldReactMaterialUiProps | GroupReactMaterialUiProps | ArrayReactMaterialUiProps | ColumnsReactMaterialUiProps | StepsReactMaterialUiProps | TabsReactMaterialUiProps>;
};
