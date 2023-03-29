import React from 'react';

import { Form, Space, Button } from 'antd';

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
  values,
  onReset = () => {},
  onSubmit = () => {},
  labelWrap,
  labelAlign,
  requiredMark,
  layout,
  disabled,
  size,
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
      className="lf-form-react-antd"
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
      <div className="lf-buttons">
        <Space wrap>
          <Button type="primary" onClick={onSubmit}>Submit</Button>
          <Button onClick={onReset}>Cancle</Button>
        </Space>
      </div>
    </Form>
  )

};

export { FormAntD as Form };
