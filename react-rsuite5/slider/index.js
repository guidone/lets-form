import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, Slider } from 'rsuite';

import { Asterisk } from '../../components';

const SliderRsuite = ({
  name,
  label,
  hint,
  value,
  tooltip = false,
  disabled = false,
  readOnly = false,
  required = false,
  showTooltip,
  error,
  onChange,
  onBlur,
  marks = [],
  ...rest
}) => {

  const handleRenderMark = useCallback(
    number => {
      const found = marks.find(({ value }) => value === number);
      return found ? found.label : undefined;
    },
    [marks]
  );

  return (
    <Form.Group controlId={name}>
      {label && (
        <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <Asterisk />}
        </Form.ControlLabel>
      )}
      <Slider
        accepter={Slider}
        style={{ marginTop: '15px' }}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        onBlur={onBlur}
        renderMark={handleRenderMark}
        errorMessage={_.isString(error) ? error : undefined }
        disabled={disabled}
        tooltip={showTooltip}
        {...rest}
      />
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { SliderRsuite as Slider };