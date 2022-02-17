import './App.css';
import React, { Component, useState, useEffect } from 'react';
import "./bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { LoginComponent } from './component/LoginComponent';
import { Header } from './component/Header';
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

  const onClick = (e) => {

  }

  return (
    <div className="App">
      <Router>

        <Header user={user} onLogout={handleLogout} />
        <Route path='/Login'>
          <LoginComponent setUser={setUser} />
        </Route>
        <Route path='/Register' component={RegisterComponent} />
        <Route path='/' component={SearchComponent} exact />
        {(user) && (<Redirect from='/login' to='' />)}
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


