import React, { Component } from 'react'
import { Form, Input, Button, Row, InputNumber } from 'antd';
import { Mutation } from 'react-apollo';
import { gql } from "apollo-boost";
import { CURRENT_USER_QUERY } from '../../common/User';
import ImageUpload from '../../common/ImageUpload';

const { TextArea } = Input;

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
    $stock: Int!
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
      stock: $stock
    ) {
      id
    }
  }
`;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};


class CreateItemForm extends Component {

  state = {
    image: '',
  }

  handleSubmit = signup => {
    this.props.form.validateFields(async (err) => {
      if (!err) {
        await signup();
      }
    })
  };

  getUrlImage = async (url, file) => {
    this.props.form.setFieldsValue({ 'image': file })
    this.setState({ 
      ...this.state,
      image: url,
    });
  }

render(){
  const { getFieldDecorator, getFieldsValue } = this.props.form
  const variables = getFieldsValue()
  variables.image = this.state.image
  variables.largeImage = this.state.image

  return (
    <Mutation
      mutation={CREATE_ITEM_MUTATION}
      variables={variables}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(createItem, { error, loading }) =>{ 
        return(
          <div style={{ height: '500px' }}>
            <Form
              onSubmit={ e => {
                e.preventDefault();
                this.handleSubmit(createItem);
              }}
              {...formItemLayout}
            >
              <Form.Item label="Imagen">
              {getFieldDecorator('image', {
                  rules: [{ required: true, message: 'Please input your Image!' }],
                })(<ImageUpload getUrlImage={this.getUrlImage} />)}
              </Form.Item>
              <Form.Item label="Titulo">
                {getFieldDecorator('title', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your Title!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
                <Form.Item label="Precio">
                  {getFieldDecorator('price', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Price!',
                      },
                    ],
                  })(<InputNumber min={1} style={{width: '100%'}} />)}
                </Form.Item>
                <Form.Item label="Cantidad">
                  {getFieldDecorator('stock', {
                    rules: [
                      {
                        message: 'Please input your Stock!',
                      },
                    ],
                  })(<InputNumber min={1} style={{width: '100%'}} />)}
                </Form.Item>
              <Form.Item label="Descripción">
                {getFieldDecorator('description', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your Drescription!',
                    },
                  ],
                })(<TextArea rows={4} />)}
              </Form.Item>
              <Row type="flex" justify="end" style={{ width: '90%' }}>
                <Button loading={loading} htmlType="submit" >
                  Done
                </Button>
              </Row>
            </Form>
          </div>
        )
      }}
    </Mutation>
  )
}}

const WrappedCreateItemForm = Form.create({ name: 'createItem' })(CreateItemForm);

export default WrappedCreateItemForm