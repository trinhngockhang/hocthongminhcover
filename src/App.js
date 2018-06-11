import React, { Component } from 'react';
import Home from './Components/Containers/Home/Home'
import './static/css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css.map';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css.map';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default App;
