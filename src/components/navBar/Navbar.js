import React, { Component } from 'react';
import { Drawer, Button, Row, Col } from 'antd';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import User from '../common/User';

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <User>
        {({loading, data, error}) => {
         return( <Row >
            <Col span={2} >
              <Button>logo</Button>
            </Col>
            <Col >
              <Col span={12}>
                <LeftMenu />
              </Col>
              <Row  type="flex" justify="end">
              <Col>
                <RightMenu loading={loading} data={data} />
              </Col>
              </Row>
              <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <LeftMenu />
                <RightMenu />
              </Drawer>
            </Col>
          </Row>)
        }}
      </User>
    );
  }
}

export default Navbar;