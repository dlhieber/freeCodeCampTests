import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import Navi from './Navi';

export default class WindowsWindow extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    const openTest=urlParams.get('test')||'Random Generator';
    return (
      <div id="quote-box">
      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        height="300px"
        width="100%"
        padding="12px"
        
      >
        <TitleBar title="Having Fun with Windows Style React Components" controls/>
        <Navi test={openTest} theme={this.props.theme} color={this.props.theme === 'dark' ? 'white' : '#333'}/>

      </Window></div>
    );
  }
}