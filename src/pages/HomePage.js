import React from 'react';
import Stores from '../components/store/Stores'

const HomePage = (props) => (
  <>
    <h1>Home Page</h1>
    <Stores props={props}/>
  </>
)

export default HomePage