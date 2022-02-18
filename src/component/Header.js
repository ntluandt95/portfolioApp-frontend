import React, { useState, Component, useReducer } from 'react'
import { Link } from 'react-router-dom'
import developerService from '../services/developer.service';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export const Header = ({ user, onLogout, setDev }) => {

  const [devUsername, setDevUsernemt] = useState("");
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const handleLogout = (e) => {
    onLogout();
  }

  React.useEffect(() => {
    if (devUsername)
      developerService.getDevelopersByUsername(devUsername).then(resp => {
        setDev(resp)
      }).catch(e => {
        history.push("/404")
        forceUpdate();
      })
  }, [devUsername])

  const history = useHistory();
  const pathname = window.location.pathname
  const isDevPage = pathname.match("/developer/")
  const isMyPage = pathname.match("/mypage")
  const isAbout = pathname.match("/about/")
  const isContact = pathname.match("/contact/")
  const isSettings = pathname.match("/settings")
  let pathDevName = pathname.split("/")[2];
  if ((isDevPage || isAbout || isContact) && devUsername !== pathDevName)
    setDevUsernemt(pathDevName);
  else if (isMyPage && (devUsername !== user.username))
    setDevUsernemt(user.username);

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <Link to={user ? '/mypage' : '/'} onClick={forceUpdate} className="my-0 mr-md-auto font-weight-normal text-dark">Portfolio</Link>
      {!user ?
        <nav className="my-2 my-md-0 mr-md-3">
          <div>
            {(isDevPage || isMyPage) && <Link to={"/about/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">About</Link>}
            {isAbout && <Link to={"/developer/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">Profile</Link>}
            <Link to='/Register' className="p-2 text-dark">Register</Link>
            <Link to='/Login' className="p-2 text-dark">Login</Link>
          </div>
        </nav> :
        <nav className="my-2 my-md-0 mr-md-3">
          <div>
            Hello {user.firstName + " " + user.lastName + " "}
            <Link to="/settings" className="p-2 text-dark" onClick={forceUpdate}>Settings</Link>
            {(isDevPage || isMyPage || isContact) && <Link to={"/about/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">About</Link>}
            {(isAbout || isContact) && < Link to={"/developer/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">Profile</Link>}
            {(isAbout || isDevPage || isMyPage) && < Link to={"/contact/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">Contact</Link>}
            <Link to='/Login' onClick={handleLogout} className="p-2 text-dark">Logout</Link>
          </div>
        </nav >
      }
    </div >


  )
}


