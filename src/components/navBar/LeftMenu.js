import React, { Component } from 'react';
import { Menu } from 'antd';

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          Home
        </Menu.Item>
        <Menu.Item key="alipay">
          Contact Us
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;