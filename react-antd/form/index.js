import React from 'react';

import { Form, Space, Button } from 'antd';

const FormAntD = ({
  values,
  onReset = () => {},
  onSubmit = () => {},
  defaultValues,
  children
}) => {


  return (
    <Form
      className="lf-form-react-antd"
      layout="vertical"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
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
