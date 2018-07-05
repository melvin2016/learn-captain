import React, { Component } from 'react';
import './App.css';
import NavBarMedium from '../navbar/NavBarMedium';
import RouterForLogAndReg from '../RouterLayout/RouterForLogAndReg';
class App extends Component {
  render() {
    return (
      <div>
        <NavBarMedium/>
        <RouterForLogAndReg/>
      </div>
    );
  }
}

export default App;
