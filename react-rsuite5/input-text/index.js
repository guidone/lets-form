import React, { useCallback } from 'react';
import { Form, Input, InputGroup } from 'rsuite';
import _ from 'lodash';
import classNames from 'classnames';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';
import { TextOrIcon } from '../../common/text-or-icon';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { lfLog } from '../../helpers/lf-log';

import './input-text.scss';

const TextInput = I18N(
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
    submitOnEnter = false,
    error,
    prefix,
    postfix,
    onChange,
    onBlur,
    fullWidth,
    width,
    autocomplete,
    inputMode,
    inputType,
    inside = false,
    lfOnEnter = () => {},
    ...rest
  }) => {
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

    const inner = (
      <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
        <Input
          accepter={Input}
          defaultValue={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyUp={submitOnEnter ? handleKeyUp : undefined}
          disabled={disabled}
          autoComplete={autocomplete}
          inputMode={inputMode}
          type={inputType}
          size={size}
          placeholder={placeholder}
          readOnly={readOnly}
          {...passRest(rest)}
        />
      </RSuite5FieldControl>
    );

    const needsGroup = postfix || prefix;
    return (
      <Form.Group
        className={classNames(
          'lf-control-input-text', {
            [`lf-size-${size}`]: size != null,
            'lf-full-width': fullWidth || width != null
          }
        )}
        data-lf-field-name={name}
        style={makeWidthStyle(fullWidth, width)}
      >
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        {!needsGroup && inner}
        {needsGroup && (
          <InputGroup inside={inside}>
            {prefix && <InputGroup.Addon>{TextOrIcon(prefix)}</InputGroup.Addon>}
            {inner}
            {postfix && <InputGroup.Addon>{TextOrIcon(postfix)}</InputGroup.Addon>}
          </InputGroup>
        )}
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite.InputText');

export default TextInput;
