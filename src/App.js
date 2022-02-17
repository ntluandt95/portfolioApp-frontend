import './App.css';
import React, { Component } from 'react';
import "./bootstrap.min.css";
import { useState } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginComponent } from './component/LoginComponent';
import { HeaderComponent } from './component/HeaderComponent';
import { RegisterComponent } from './component/RegisterComponent';
function App() {

  const [username, setUsername] = useState("");
  const [JWTtoken, setToken] = useState("");

  const logout = () => {
    setUsername("")
    setToken("")
  }

  const login = (username, JWTToken) => {
    setUsername(username)
    setToken(JWTToken)
  }

  const LoginProps = { onLogout: { logout }, onLogin: { login } }

  return (
    <div className="App">
      <Router>
        <HeaderComponent user={username} />
        {/* <Route path='/Login' element={<LoginComponent onLogout={logout} onLogin={login} />} /> */}
        <Route path='/Login' render={(props) => <LoginComponent {...props} onLogin={login} onLogout={logout} />} />
        <Route path='/Register' component={RegisterComponent} />
      </Router>
    </div>
  );
}

export default App;
