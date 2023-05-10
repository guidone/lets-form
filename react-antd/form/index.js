import React from 'react';
import { Form, Space, Button } from 'antd';
import classNames from 'classnames';

import './index.scss';

const ANTD_ALIGN_MAPPING = {
  left: 'start',
  center: 'center',
  right: 'end'
};

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
  disabled,
  size,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  readOnly,
  defaultValues,
  labelColSpan,
  labelColOffset,
  wrapperColSpan,
  wrapperColOffset,
  children
}) => {
  return (
    <Form
      className={classNames('lf-form lf-form-react-antd', {
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


      //style={{ maxWidth: 600 }}
      initialValues={defaultValues}
      //onFinish={onFinish}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {children}
      <div className="lf-toolbar">
                  <Button type="primary" onClick={onSubmit}>{labelSubmit}</Button>
          <Button onClick={onReset}>{labelCancel}</Button>

      </div>
    </Form>
  )

};

export { FormAntD as Form };
