import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'rsuite/Form';
import Slider from 'rsuite/Slider';

import { RequiredIcon, I18N } from '../../components';
import { passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

import './index.scss';

const validateMarks = marks => {
  return _.isArray(marks) &&
    marks.every(mark => _.isObject(mark) && mark.value && mark.label);
};

const SliderRsuite = I18N(
  ({
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
        const found = marks.find((mark) => mark && mark.value === number);
        return found ? found.label : undefined;
      },
      [marks]
    );

    return (
      <Form.Group controlId={name} className="lf-control-slider">
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <Slider
          style={{ marginTop: '15px', marginBottom: '8px' }}
          name={name}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          onBlur={onBlur}
          renderMark={validateMarks(marks) ? handleRenderMark : undefined}
          errorMessage={_.isString(error) ? error : undefined }
          disabled={disabled}
          tooltip={showTooltip}
          {...passRest(rest)}
        />
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    marks: (value, i18n) => {
      return (Array.isArray(value) ? value : []).map(value => ({ ...value, label: i18n(value.label) }))
    }
  }
);
lfLog('Loaded RSuite5.Slider');

export default SliderRsuite;
