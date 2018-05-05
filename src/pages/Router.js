import React, { Component } from 'react'
import ClickableHomePage from '../container/ClickableHomePage'
import '../css/App.css';

class Router extends Component {
  render() {
    return (
      <div className="App">
        <ClickableHomePage />
      </div>
    );
  }
}

export default Router;
