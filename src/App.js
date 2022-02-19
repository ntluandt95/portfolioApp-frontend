import './App.css';
import React, { Component, useState, useEffect } from 'react';
import "./bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { LoginComponent } from './component/LoginComponent';
import { RegisterComponent } from './component/RegisterComponent';
import authService from './services/auth.service';
import SearchComponent from './component/SearchComponent';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import './services/developer.service'
import DeveloperProfileComponent from './component/DeveloperProfileComponent';
import { PageNotFound } from './component/PageNotFound';
import { Header } from './component/Header';
import DeveloperAboutComponent from './component/DeveloperAboutComponent';
import DeveloperSettings from './component/DeveloperSettings';
import DeveloperContact from './component/DeveloperContact';
import ResumeListComponent from './component/ResumeListComponent';

function App() {

  const [username, setUsername] = useState(authService.getCurrentUsername());
  const [user, setUser] = useState(JSON.parse(authService.getCurrentUser()));
  const [developer, setDeveloper] = useState({});
 

  const handleLogout = () => {

    authService.logout();
    setUser(JSON.parse(authService.getCurrentUser()));
    setUsername(authService.getCurrentUsername());
  }

  const handleLogin = () => {
    setUser(JSON.parse(authService.getCurrentUser()));
    setUsername(authService.getCurrentUsername());
  }

  return (
    <div className="App">
      
      <Router>
        <Header user={user} onLogout={handleLogout} setDev={setDeveloper}  />
        <Switch>
          <Route exact path='/Login'><LoginComponent setUser={handleLogin} user={username} onLogout={handleLogout} /></Route>
          <Route exact path='/Register'> {(username) && (<Redirect to='/login' />)}<RegisterComponent /></Route>
          <Route exact path='/mypage'> {(!username) && (<Redirect to='/login' />)}<DeveloperProfileComponent developer={developer} /></Route>
          <Route path='/developer/*'><DeveloperProfileComponent developer={developer} /></Route>
          <Route path='/contact/*'><DeveloperContact developer={developer} /></Route>
          <Route path='/about/*'><DeveloperAboutComponent developer={developer} /></Route>
          <Route path='/settings'>{(!username) && (<Redirect to='/login' />)}<DeveloperSettings /></Route>
          <Route exact path='/' render={(props) => <SearchComponent {...props} user={username} onLogout={handleLogout} />} />
          <Route exact path='/resume'><ResumeListComponent/></Route>
          <Route> <PageNotFound user={username} onLogout={handleLogout} /></Route>
        </Switch>
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


