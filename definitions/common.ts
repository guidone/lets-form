import { FC } from 'react';

type ObjectOfStrings = {
  [index: string]: any;
};

type LestFormValidationErrors = {
  [index: string]: any;
};

export type Locale = (
  | "af-ZA"
  | "ar"
  | "bg-BG"
  | "ca-AD"
  | "cs-CZ"
  | "cy-GB"
  | "da-DK"
  | "de-AT"
  | "de-CH"
  | "de-DE"
  | "el-GR"
  | "en-GB"
  | "en-US"
  | "es-CL"
  | "es-ES"
  | "es-MX"
  | "et-EE"
  | "eu"
  | "fa-IR"
  | "fi-FI"
  | "fr-CA"
  | "fr-FR"
  | "he-IL"
  | "hi-IN"
  | "hr-HR"
  | "hu-HU"
  | "id-ID"
  | "is-IS"
  | "it-IT"
  | "ja-JP"
  | "km-KH"
  | "ko-KR"
  | "la"
  | "lt-LT"
  | "lv-LV"
  | "mn-MN"
  | "nb-NO"
  | "nl-NL"
  | "nn-NO"
  | "pl-PL"
  | "pt-BR"
  | "pt-PT"
  | "ro-RO"
  | "ru-RU"
  | "sk-SK"
  | "sl-SI"
  | "sr-RS"
  | "sv-SE"
  | "th-TH"
  | "tr-TR"
  | "uk-UA"
  | "vi-VN"
  | "zh-CN"
  | "zh-TW"
);

export type I18NObject = string
  | { [K in Locale]: string; };

export type ValidationProps = {
  required?: boolean;
  errorMessage?: I18NObject;
  validationMaxLength?: number;
  validationMinLength?: number;
  validationMin?: number;
  validationMax?: number;
  validationPattern?: string;
  validate?: (value: string) => void | string;
};

export type CommonLetsFormProps = {
  name?: string;
  locale?: Locale;
  plaintext?: boolean;
  debug?: boolean;
  disabled?: boolean;
  disableButtons?: boolean;
  demo?: boolean;
  context?: object;
  defaultValues?: ObjectOfStrings;
  onChange?: (values: ObjectOfStrings) => void;
  onSubmit?: (values: ObjectOfStrings) => void;
  onSubmitSuccess?: (response: any) => void;
  onSubmitError?: (error: any) => void;
  onError?: (errors: LestFormValidationErrors) => void;
  onReset?: () => void;
  onJavascriptError?: (error: any) => void;
  bottomView?: FC;
  custom?: FC;
  loader?: FC;
  onlyFields?: boolean;
  readOnly?: boolean;
  hideToolbar?: boolean;
  prealoadComponents?: boolean;
  components?: { [index: string]: any },
  className?: string;
  hideCancel?: boolean;
  labelCancel?: string;
  labelSubmit?: string;
  hideSubmit?: boolean;
  disableOnSubmit?: boolean;
  resetAfterSubmit?: boolean;
};

export type CommonLetsFormSchema = {
  version: "1" | "2";
  name?: string;
};
