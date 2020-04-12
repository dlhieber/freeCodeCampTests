import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import Navi from './Navi';

export default class WindowsWindow extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (
      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        height="300px"
        width="100%"
        padding="12px"
      >
        <TitleBar title="My Windows Application" controls/>
        <Navi theme={this.props.theme} color={this.props.theme === 'dark' ? 'white' : '#333'}/>

        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
      </Window>
    );
  }
}