/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import Form from 'rsuite/Form';
import CheckPicker from 'rsuite/CheckPicker';

import { RequiredIcon, I18N } from '../../components';
import { LOCALES } from '../../common/data/locales';
import { passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';

import './multiselect-language.scss';

const renderItem = (label, item) => (
  <div>
    {label} <b>{item.value}</b>
  </div>
);

const ALL_LOCALES = Object.keys(LOCALES['language-names']);
const LANGUAGES_OPTIONS = Object.keys(LOCALES['language-names'])
  .map(lang => ({
    value: lang,
    name: LOCALES['language-names'][lang][1],
    label: `${LOCALES['language-names'][lang][1]}`
  }));

const MultiselectLanguage = I18N(
  ({
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
    error,
    onChange,
    onBlur,
    placement,
    appearance,
    ...rest
  }) => {
    const [locales, setLocales] = useState(value);
    const handleAddAll = useCallback(
      e => {
        e.preventDefault();
        setLocales(ALL_LOCALES);
        onChange(ALL_LOCALES);
      },
      [onChange]
    );
    const handleChange = useCallback(
      value => {
        setLocales(value);
        onChange(value);
      },
      [onChange]
    );

    return (
      <Form.Group
        data-lf-field-name={name}
        className="lf-control-multiselect-language"
      >
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <CheckPicker
            appearance={appearance ?? undefined}
            name={name}
            value={locales}
            onChange={handleChange}
            readOnly={readOnly}
            onBlur={onBlur}
            placement={placement}
            errorMessage={_.isString(error) ? error : undefined }
            disabled={disabled}
            size={size}
            placeholder={placeholder}
            data={LANGUAGES_OPTIONS}
            block
            renderMenuItem={renderItem}
            searchable
            cleanable
            {...passRest(rest)}
          />
        </RSuite5FieldControl>
        {!(Array.isArray(locales) && locales.length === ALL_LOCALES.length) && (
          <div className="btn-add-all">
            <a
              href="#"
              onClick={handleAddAll}
            >add all locales</a>
          </div>
        )}
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite5.MultiselectLanguage');

export default MultiselectLanguage;
