import React from 'react';
import Form from 'antd/lib/form'
import Button from 'antd/lib/button';
import classNames from 'classnames';

import './index.scss';

const buildColObject = (span, offset) => {
  if (span || offset) {
    const result = {};
    if (span) {
      result.span = span;
    }
    if (offset) {
      result.offset = offset;
    }
    return result;
  }
  return undefined;
};

const FormAntD = ({
  name,
  buttonsAlign,
  onReset = () => {},
  onSubmit = () => {},
  labelWrap,
  labelAlign,
  requiredMark,
  layout,
  disabled = false,
  disabledSubmit = false,
  size,
  hideToolbar = false,
  onlyFields = false,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  readOnly,
  plaintext,
  defaultValues,
  labelColSpan,
  labelColOffset,
  wrapperColSpan,
  wrapperColOffset,
  children,
  custom
}) => {
  return (
    <Form
      className={classNames('lf-form lf-form-react-antd', {
        'lf-form-react-antd-plaintext': plaintext,
        [buttonsAlign ? `lf-form-buttons-align-${buttonsAlign}` : undefined]: true
      })}
      data-lf-form-name={name}
      layout={layout}
      labelAlign={labelAlign}
      labelWrap={labelWrap}
      disabled={disabled}
      readOnly={readOnly}
      requiredMark={requiredMark}
      labelCol={buildColObject(labelColSpan, labelColOffset)}
      wrapperCol={buildColObject(wrapperColSpan, wrapperColOffset)}
      size={size}
      initialValues={defaultValues}
      autoComplete="off"
    >
      {children}
      {!hideToolbar && !onlyFields && !plaintext && (
        <div className="lf-buttons">
          <Button
            type="primary"
            onClick={onSubmit}
            disabled={disabled || disabledSubmit}
          >{labelSubmit}</Button>
          <Button
            onClick={onReset}
            disabled={disabled}
          >{labelCancel}</Button>
          {custom}
      </div>
      )}
    </Form>
  );
};

export default FormAntD;
