import React from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import {CURRENT_USER_QUERY} from '../common/User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => (
  <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
    {signout => <Button onClick={signout}>Sign Out</Button>}
  </Mutation>
);

const RightMenu = ({data, loading}) => {
  if(loading) return <p>Loading...</p>
  if(data.me) return <Signout />
  return(
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to='/app/signin'>Signin</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to='/app/signup'>Signup</Link>
        </Menu.Item>
      </Menu>
    )
}

export default RightMenu;