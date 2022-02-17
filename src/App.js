import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import "./bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom'
import { LoginComponent } from './component/LoginComponent';
import { HeaderComponent } from './component/HeaderComponent';
import { RegisterComponent } from './component/RegisterComponent';
import authService from './services/auth.service';
import SearchComponent from './component/SearchComponent';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const [user, setUser] = useState(authService.getCurrentUser());
  
  
  useEffect(() => {
    setUser(authService.getCurrentUser());
  });

  const handleLogout = () => {
  
    authService.logout();
    setUser(authService.getCurrentUser());
    
  }

  return (
    <div className="App">
      <Router>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <Link to='/' className="my-0 mr-md-auto font-weight-normal text-dark">Portfolio</Link>
          <nav className="my-2 my-md-0 mr-md-3">
            {(user == null) ? (
            <div>
              <Link to='/Register' className="p-2 text-dark" >Register</Link>
              <Link to='/Login' className="p-2 text-dark" >Login</Link>
            </div>) : (
            <div>
              Hello {user} <Link onClick={handleLogout} class="p-2 text-dark" >Logout</Link>
              </div>)}
          </nav>  
        </div>
        
        <Route path='/Login'>
          <LoginComponent setUser={setUser} />
        </Route>
        <Route path='/Register' component={RegisterComponent} />
        <Route path='/' component={SearchComponent} exact />
        {(user) && (<Redirect from='/login' to=''/>)}
      </Router>


    </div>

  );
}
export default App;

// function Child({ setCount }) {
//   return (
//     <div>
//     <button onClick={() => setCount(1)}>1</button>
//     <button onClick={() => setCount(2)}>2</button>
//   </div>
//   )
// }


