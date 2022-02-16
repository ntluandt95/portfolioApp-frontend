import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import "./bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginComponent } from './component/LoginComponent';
import { HeaderComponent } from './component/HeaderComponent';
import { RegisterComponent} from './component/RegisterComponent';
function App() {
  return (
    <div className="App">
    <Router>
      <HeaderComponent />
      <Route path='/Login' component={LoginComponent} />
      <Route path='/Register' component={RegisterComponent} />
    </Router>
  </div>
  );
}

export default App;
