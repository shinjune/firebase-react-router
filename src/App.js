import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import Login from './Login'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Route path="/" exact component={Main}/> 
          <Route path="/login" component={Login}/>
         </div>
       </BrowserRouter>
    );
  }
}

export default App;
