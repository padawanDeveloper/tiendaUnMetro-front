import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
      store {
        id
        name
        email
        image
        webSite
        phone
      }
    }
  }
`;

const User = props => { 
  return (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload) }
  </Query>
)};

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export default User;
export { CURRENT_USER_QUERY };