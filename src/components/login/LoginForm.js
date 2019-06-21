import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link, Redirect } from 'react-router-dom'
import { gql } from "apollo-boost";
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../common/User';

const styles = {
  loginForm:{
    maxWidth: '300px',
  },
  loginFormForgot: {
    float: 'right',
  },
  loginFormButton: {
    width: '100%',
  }
}

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class LoginForm extends React.Component {

  handleSubmit = signup => {
    this.props.form.validateFields(async (err) => {
        if (!err) {
          await signup();
        }
      })
  };

  render() {  
    const { getFieldDecorator, getFieldsValue } = this.props.form;
    const variables = getFieldsValue()

    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={variables}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading, data }) => {
        if(data) return <Redirect to='/' />
        if (error) return <div>Error :(</div>;
        return (
          <Form 
            onSubmit={ e => {
              e.preventDefault();
              this.handleSubmit(signup)
            }}
            style={styles.loginForm}
          >
          <Form.Item >
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(
              <Input 
                placeholder="Email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Link to='/forgot' style={styles.loginFormForgot}>
              Forgot password
            </Link>
            <Button loading={loading} type="primary" htmlType="submit" style={styles.loginFormButton}>
              Log in
            </Button>
            Or <Link to='/signup'>register now!</Link>
          </Form.Item>
        </Form>
        )}}
      </Mutation>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedLoginForm