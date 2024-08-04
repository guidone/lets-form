import React from 'react';
import _ from 'lodash';
import { Form, Slider } from 'antd';

import { I18N } from '../../components';
import { i18nOptions, passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const SliderAnt = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    showCount,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    keyboard,
    dots,
    min,
    max,
    step,
    reverse,
    tooltipOpen,
    tooltipPlacement,
    error,
    onChange,
    onBlur,
    width,
    marks,
    included,
    ...rest
  }) => {
    let antdMarks = undefined;
    if (_.isArray(marks) && !_.isEmpty(marks)) {
      antdMarks = marks.reduce(
        (accumulator, value) => ({ ...accumulator, [value.value]: value.label }),
        {}
      );
    }

    return (
      <Form.Item
        data-lf-field-name={name}
        className="lf-control-slider"
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
      >
        <Slider
          readOnly={readOnly}
          included={included}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={value}
          disabled={disabled}
          keyboard={keyboard}
          dots={dots}
          min={min}
          max={max}
          step={step}
          reverse={reverse}
          marks={antdMarks}
          tooltip={{
            open: tooltipOpen === null ? undefined : tooltipOpen,
            placement: tooltipPlacement
          }}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint'],
  {
    marks: i18nOptions
  }
);
lfLog('Loaded AntD.Slider');

export default SliderAnt;
