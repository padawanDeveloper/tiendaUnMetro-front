import React, { Component } from 'react'
import { Form, Button, Steps, Row, Col } from 'antd';
import { Mutation } from 'react-apollo';
import { gql } from "apollo-boost";
import { CURRENT_USER_QUERY } from '../../common/User';
import FirstStep from './steps/FirstStep'
import SecondStep from './steps/SecondStep'
import ThirdStep from './steps/ThidStep'

const { Step } = Steps;
let variables = {}

const CREATE_STORE_MUTATION = gql`
  mutation CREATE_STORE_MUTATION(
    $name: String!
    $email: String!
    $image: String
    $storeType: Int!
    $largeImage: String
    $phone: String!
    $webSite: String
    $instaName: String
    $faceName: String
    $address: String
    $lat: String
    $lng: String
    $deliveryDays: [Int],
    $deliverySubways: [Int],
    $deliveryStations: [Int],
  ) {
    createStore(
      store:{
        name: $name
        email: $email
        storeType: $storeType
        image: $image
        largeImage: $largeImage
        phone: $phone
        webSite: $webSite
        instaName: $instaName
        faceName: $faceName
        address: $address
        lat: $lat
        lng: $lng
        deliveryDays: $deliveryDays,
        deliverySubways: $deliverySubways,
        deliveryStations: $deliveryStations,
      }
    ) {
      id
      owner {
        id
        name
      }
    }
  }
`;

class CreateStoreForm extends Component{
  state = {
    current: 0,
    step0: {},
    step1: {},
    step2: {},
  }

  handleSubmit = () => {
    const { validateFields } = this.props.form
    return new Promise((resolve, reject) => validateFields(async (err,values) => {
        if (!err) {
          this.setState({
            ...this.state,
            [`step${this.state.current}`]: values,
          })
          resolve()
        }
      reject('error')
    })
    )
  }

  getAddress = ({latLng, address}) => {
    this.props.form.setFieldsValue({ 'address': address })
    this.setState({ 
        ...this.state,
        lat: latLng.lat,
        lng: latLng.lng,
        address,
    });
  }

  getUrlImage = async (url, file) => {
    this.props.form.setFieldsValue({ 'image': file })
    this.setState({ 
      ...this.state,
      image: url,
    });
  }

  // TODO: generate a fuction to get the values and return fild: Value
  // getValues = (obj) => {
  //   Object.keys(obj).forEach(key => {
  //     return obj[key]
  //   })
  // }

  next = () => {
    const { validateFields } = this.props.form
    const current = this.state.current + 1
    validateFields((err, values) => {
      if (!err) {
        this.setState({
          ...this.state,
          [`step${this.state.current}`]: values,
          current
        })
      }
    })
  }

  prev = () => {
    const { validateFields } = this.props.form
    const current = this.state.current - 1
    validateFields((err, values) => {
      this.setState({
        ...this.state,
        [`step${this.state.current}`]: values,
        current
      })
    })
  }

  render(){
  const {  getFieldDecorator, getFieldValue } = this.props.form
  const { current, step0, step1, step2, image, address, lat, lng } = this.state

  variables = {
    name: step0.name,
    email: step0.email,
    image,
    storeType: step0.storeType,
    largeImage: image,
    phone: step1.phone,
    webSite: step1.webSite,
    instaName: step1.instaName,
    faceName: step1.faceName,
    address,
    lat,
    lng,
    deliveryDays: step2.deliveryDays,
    deliverySubways: [step2.deliverySubways],
    deliveryStations: step2.deliveryStations,
  }

  const steps = [
    {
      title: 'Tienda',
      content: (
        <FirstStep 
          getAddress={this.getAddress}
          getUrlImage={this.getUrlImage}
          getFieldDecorator={getFieldDecorator}
        />
      )
    },
    {
      title: 'Contacto',
      content: (
        <SecondStep 
          getFieldDecorator={getFieldDecorator}
        />
      )
    },
    {
      title: 'Entrega',
      content: (
        <ThirdStep 
          getFieldValue={getFieldValue}
          getFieldDecorator={getFieldDecorator}
        />
      )
    },
  ];

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <Mutation
      mutation={CREATE_STORE_MUTATION}
      variables={variables}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(createStore, { error, loading }) =>{ 
        return(
          <div style={{ height: '500px' }}>
            <Form
              onSubmit={ async e => {
                e.preventDefault();
                await this.handleSubmit();
                await createStore();
              }}
              {...formItemLayout}
            >
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div style={{ marginTop: 20 }}>
                {steps[current].content}
              </div>
              <Row type="flex" justify="end" style={{ width: '90%' }}>
                <Col>
                  {current > 0 && (
                    <Button onClick={() => this.prev()}>
                      Previous
                    </Button>
                  )}
                  {current < steps.length - 1 && (
                    <Button onClick={() => this.next()}>
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button loading={loading} htmlType="submit" >
                      Done
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
          </div>
        )
      }}
    </Mutation>
  )
}}

const WrappedCreateStoreForm = Form.create({ name: 'createStore' })(CreateStoreForm);

export default WrappedCreateStoreForm