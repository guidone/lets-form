/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useContext, useCallback } from 'react';
import { Form, Input, InputGroup, SelectPicker } from 'rsuite';
import _ from 'lodash';
import classNames from 'classnames';

import { IconCheck } from '../../assets/icons';
import { RequiredIcon } from '../../components';
import FormContext from '../../form-context';
import { TextInput } from '../input-text';
import { Textarea } from '../textarea';
import LOCALES from '../../common/data/locales.json';

import './index.scss';

const LANGUAGES_OPTIONS = Object.keys(LOCALES['language-names'])
  .map(lang => ({
    value: lang,
    name: LOCALES['language-names'][lang][1],
    label: LOCALES['language-names'][lang][1]
  }));

const languageMenuItem = (label, item) => {
  return (
    <div className="lf-input-text-i18n-item-locale">
      {item.label} <b>{item.value}</b>
      {item.filled && <IconCheck width={16} height={16} />}
    </div>
  )
};

const TextareaAccepter = ({ value, ...props }) => {
  return (
    <Input
      as="textarea"
      value={value}
      {...props}
    />
  );
};

const InputTextI18N = (props) => {
  const {
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    width,
    error,
    onChange,
    onBlur,
    defaultLocale,
    textarea = false,
    rows
  } = props;
  const { locales = [] } = useContext(FormContext);

  let preselectedLanguage = null;
  if (_.isObject(value)) {
    // preselect a value in the drop down of the language only if there's a i18n object
    // in value, otherwise is a simple string and by definition is not associated with any
    // language
    if (defaultLocale && locales.includes(defaultLocale)) {
      preselectedLanguage = defaultLocale;
    } else if (!_.isEmpty(locales)) {
      preselectedLanguage = locales[0];
    }
  }
  let preselectedValue = null;
  if (_.isObject(value)) {
    preselectedValue = preselectedLanguage ? value[preselectedLanguage] : null;
  } else if (_.isString(value)) {
    preselectedValue = value;
  }

  const totalLocales = !_.isEmpty(locales) ? locales.length : LANGUAGES_OPTIONS.length;
  const [currentLanguage, setCurrentLanguage] = useState(preselectedLanguage);
  const [currentValue, setCurrentValue] = useState(value);
  const [translation, setTranslation ] = useState(preselectedValue);

  const handleChange = useCallback(
    value => {
      // update the UI
      setTranslation(value);
      if (_.isEmpty(value)) {
        // in case the user entered an empty value...
        if (_.isObject(currentValue) && currentLanguage) {
          // if i18n object and a language is selected, then void the value for that language
          const newCurrentValue = _.omit(currentValue, currentLanguage);
          setCurrentValue(newCurrentValue);
          onChange(newCurrentValue);
        } else if (_.isString(currentValue)) {
          setCurrentValue(value);
          onChange(value);
        }
      } else {
        // in case the user entered a non empty value...
        if (currentLanguage) {
          // if a current language is selected, then the typed text ends up
          // in a i18n object
          const newCurrentValue = {
            ...currentValue,
            [currentLanguage]: value
          };
          setCurrentValue(newCurrentValue);
          onChange(newCurrentValue);
          //setTranslation(value);
        } else if (_.isObject(currentValue)) {
          // language is not selected, but the current value is a i18n object, do nothing
          // just update the UI, do nothing in the current value
          //setTranslation(value);
        } else {
          // if language not selected and current value is not an object
          // just set the current value as string
          //setTranslation(value);
          setCurrentValue(value);
          onChange(value);
        }
      }
    },
    [currentLanguage, currentValue, onChange]
  );

  // if no locales, then use plain input text
  if (_.isEmpty(locales)) {
    return textarea ? <Textarea {...props} /> : <TextInput {...props} />;
  }
  // evaluate current translated locales
  const translatedLocales = _.isObject(currentValue) ?
    Object.keys(currentValue).filter(locale => _.isEmpty(locales) || locales.includes(locale)) : [];

  const multiValuesAndNoLang = _.isObject(currentValue) &&
    Object.keys(currentValue).length !== 0 &&
    !currentLanguage;

  const languageData = LANGUAGES_OPTIONS
    .filter(item => _.isEmpty(locales) || locales.includes(item.value))
    .map(item => ({ ...item, filled: currentValue && !_.isEmpty(currentValue[item.value]) }));

  return (
    <Form.Group className="lf-input-text-i18n">
      {label && <Form.ControlLabel>
        {label}
        {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
        {required && <RequiredIcon />}
      </Form.ControlLabel>}
      <div className={classNames('group-input-select', { 'textarea': textarea })}>
        <InputGroup className="translation-control" inside>
          <Form.Control
            name={name}
            rows={rows}
            style={width ? { width: `${width}px` } : undefined}
            accepter={textarea ? TextareaAccepter : Input}
            value={multiValuesAndNoLang ? '<multiple translations>' : translation}
            readOnly={readOnly || multiValuesAndNoLang}
            onChange={handleChange}
            onBlur={onBlur}
            disabled={disabled}
            size={size}
            placeholder={placeholder}
            errorMessage={_.isString(error) ? error : undefined }
          />
          <InputGroup.Addon>
            <span className="status">
              <span className="translated">{translatedLocales.length}</span>
              &nbsp;/&nbsp;
              <span>{totalLocales}</span>
            </span>

          </InputGroup.Addon>
        </InputGroup>
        <div className="select-control">
          <SelectPicker
            appearance="subtle"
            cleanable={false}
            size="xs"
            readOnly={readOnly}
            value={currentLanguage}
            placement="bottomEnd"
            placeholder="n/a"
            searchable={languageData.length > 20}
            renderValue={value => <span>{value}</span>}
            renderMenuItem={languageMenuItem}
            onChange={value => {
              if (_.isString(currentValue) && !_.isEmpty(currentValue)) {
                // if currentValue is a string and not empty,
                setCurrentLanguage(value);
                let newValue = {
                  [value]: currentValue
                };
                setCurrentValue(newValue);
                onChange(newValue)
              } else if (_.isObject(currentValue)) {
                // it's already a i18n object, just switch the language
                setCurrentLanguage(value);
                setTranslation(currentValue[value] ?? '');
              } else {
                setCurrentLanguage(value);
              }
            }}
            data={languageData}
          />
        </div>
      </div>
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { InputTextI18N };