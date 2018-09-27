import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/journal/bootstrap.css";
import './App.css';
import NYSEChar from './containers/NYSEChar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.yeira.training/img/logoyeira15.png" alt="Yeira Training" />
          <h1 className="App-title">Test B</h1>
        </header>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <NYSEChar/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
