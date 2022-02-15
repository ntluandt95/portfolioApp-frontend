import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <p>App Component</p>
      {/* <Router>
        <Header />
        <Route path='/about' component={About} />
        <Route path='' component={Project} exact/>
        <Route path='/contact' component={Contact} />
      </Router> */}
    </div>
  );
}

export default App;
