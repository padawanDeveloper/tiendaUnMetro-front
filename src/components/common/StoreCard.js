import React from 'react'
import { Card } from 'antd';

const StoreCard = (props) => {
  const { store } = props
  return (
    <Card
      bordered={false}
      style={{ width: 300, padding: 0 }}
      cover={
        <img
          style={{ 
            borderRadius: '4px',
            border: '1px solid rgba(0,0,0,0.05)',
            height: 300, display: 'block',
          }}
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
}

export default StoreCard