import React from 'react'
import { Card } from 'antd';

const StoreCard = ({ store }) => (
  <Card
    bordered={false}
    style={{ width: 300, padding: 0 }}
    cover={
      <img
        style={{ borderRadius: 10, border: '1px solid black'}}
        alt="example"
        src={store.image}
      />
    }
  >
    <div style={{ margin: -22 }}>
      <h1>{store.name}</h1>
      <div>{store.instaName}</div>
      <div>{store.faceName}</div>
    </div>
  </Card>
)

export default StoreCard