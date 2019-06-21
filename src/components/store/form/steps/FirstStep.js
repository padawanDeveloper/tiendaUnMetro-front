import React from 'react'
import { Form, Input, Select } from 'antd'
import ImageUpload from '../../../common/ImageUpload'
import SearchPlace from '../../../common/SearchPlace'

const { Option } = Select;

const FirstStep = ({ getFieldDecorator, getUrlImage, getAddress }) => (
  <div>
    <Form.Item label="Imagen">
    {getFieldDecorator('image', {
        rules: [{ required: true, message: 'Please input your Image!' }],
      })(<ImageUpload getUrlImage={getUrlImage} />)}
    </Form.Item>
    <Form.Item label="Rubro">
      {getFieldDecorator('storeType', {
        rules: [{ required: true, message: 'Please select your industry!' }],
      })(
        <Select
          placeholder="Seleccione Rubro"
        >
          <Option value={0}>Grow Shop</Option>
          <Option value={1}>Artesania</Option>
          <Option value={2}>Venta de catalogo</Option>
          <Option value={3}>Vestuario</Option>
        </Select>,
      )}
    </Form.Item>
    <Form.Item label="Name">
      {getFieldDecorator('name', {
        rules: [
          {
            required: true, 
            message: 'Please input your Name!',
          },
        ],
      })(<Input />)}
    </Form.Item>
    <Form.Item label="E-mail">
      {getFieldDecorator('email', {
        rules: [
          {
            message: 'Please input your Email!',
          },
        ],
      })(<Input />)}
    </Form.Item>
    <Form.Item label="Ubicacion">
      {getFieldDecorator('address', {
        rules: [
          {
            required: true,
            message: 'Please input your address!',
          },
        ],
      })(<SearchPlace getAddress={getAddress}/>)}
    </Form.Item>
  </div>
)

export default FirstStep