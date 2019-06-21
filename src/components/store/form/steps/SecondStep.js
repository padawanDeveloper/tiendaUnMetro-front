import React from 'react'
import { Form, Input, Select } from 'antd'

const { Option } = Select;

const SecondStep = ({ getFieldDecorator }) => {
  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '56',
  })(
    <Select style={{ width: 70 }}>
      <Option value="56">+56</Option>
    </Select>,
  )
  
  return (
  <div>
    <Form.Item label="Phone Number">
      {getFieldDecorator('phone', {
        rules: [{ required: true,  message: 'Please input your phone number!' }],
      })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
    </Form.Item>
    <Form.Item label="Instagram">
      {getFieldDecorator('instaName', {
        rules: [
          {
            required: true, 
            message: 'Please input your Instagram!',
          },
        ],
      })(<Input />)}
    </Form.Item>
    <Form.Item label="Facebook">
      {getFieldDecorator('faceName', {
        rules: [
          {
            message: 'Please input your Facebook!',
          },
        ],
      })(<Input />)}
    </Form.Item>
    <Form.Item label="Sitio Web">
      {getFieldDecorator('webSite', {
        rules: [
          {
            message: 'Please input your Sitio Web!',
          },
        ],
      })(<Input />)}
    </Form.Item>
  </div>
)}

export default SecondStep