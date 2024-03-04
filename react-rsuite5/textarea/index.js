import React from 'react';
import Form from 'rsuite/Form';
import Input from 'rsuite/Input';
import _ from 'lodash';
import classNames from 'classnames';

import { RequiredIcon, I18N } from '../../components';
import { makeWidthStyle, passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';

const ControlTextare = (props) => <Input as="textarea" {...props} />

const Textarea = I18N(
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
    fullWidth,
    width,
    rows = 10,
    ...rest
  }) => {
    const inner = (
      <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
        <ControlTextare
          name={name}

          rows={rows}
          value={value}
          size={size}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          readOnly={readOnly}
          errorMessage={_.isString(error) ? error : undefined }
          style={makeWidthStyle(fullWidth, width)}
          {...passRest(rest)}
        />
      </RSuite5FieldControl>
    );

    return (
      <Form.Group
        className={classNames(
          'lf-control-textarea', {
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
        {inner}
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite5.Textarea');

export default Textarea;
