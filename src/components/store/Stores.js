import React from 'react'
import { Col, Row } from 'antd'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import StoreCard from '../common/StoreCard'

const ALL_STORES_QUERY = gql`
  query {
    stores {
      id
      name
      image
      deliveryDays
      deliverySubways
      deliveryStations
      instaName
      faceName
      owner {
        name
      }
      items {
        id
      }
      location {
        id
        address
      }
    }
  }
`;

const Stores = props => (
  <div>
    <Query
      query={ALL_STORES_QUERY}
    >
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        return (
          <div>
            <Row type="flex" justify="space-around" >
              {data.stores.map( store =>
                <Col style={{ marginBottom: 10 }} key={store.id}>
                  <StoreCard {...props} store={store} />
                </Col>
              )}
            </Row>
          </div>  
        )
      }}
    </Query>
    {/* <h1>Create Stores</h1>
    <CreateStore /> */}
  </div>
)

export default Stores