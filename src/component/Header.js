import React, { useState, Component, useReducer } from 'react'
import { Link } from 'react-router-dom'
import developerService from '../services/developer.service';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export const Header = ({ user, setDev }) => {

  const [devUsername, setDevUsername] = useState("");
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const changeDevUsername = (devUsername) => {
    setDevUsername(devUsername);
    if (devUsername) {
      developerService.getDevelopersByUsername(devUsername).then(resp => {
        setDev(resp)
      }).catch(e => {
        history.push("/404")
        forceUpdate()
      })
    }
  }

  const history = useHistory();
  const pathname = window.location.pathname
  const isDevPage = pathname.match("/developer/")
  const isMyPage = pathname.match("/mypage")
  const isAbout = pathname.match("/about/")
  const isContact = pathname.match("/contact/")
  const isSettings = pathname.match("/settings")
  const isProject = pathname.match("/projects/")

  let pathDevName = pathname.split("/")[2];
  if ((isDevPage || isAbout || isContact) && devUsername !== pathDevName)
    changeDevUsername(pathDevName);
  else if (!(isDevPage || isAbout || isContact) && user && devUsername !== user.username)
    changeDevUsername(user.username);
  else if (!user && !pathDevName && devUsername)
    changeDevUsername(null)

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <div><Link to={user ? '/mypage' : '/'} onClick={forceUpdate} className="my-0 mr-md-auto font-weight-normal text-dark">Portfolio</Link></div>
      {!user ?
        <>
          <div className="my-0 mr-md-auto font-weight-normal text-dark" style={{ marginLeft: '1%' }} ></div>
          <nav className="my-2 my-md-0 mr-md-3">
            <div>
              {(isAbout || isContact || isDevPage) && <Link to={"/developer/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">Profile</Link>}
              {(isAbout || isContact || isDevPage) && <Link to={"/about/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">About</Link>}
              {(isAbout || isContact || isDevPage) && <Link to={"/contact/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">Contact</Link>}
              <Link to='/Register' onClick={forceUpdate} className="p-2 text-dark">Register</Link>
              <Link to='/' onClick={forceUpdate} className="p-2 text-dark">Search</Link>
              <Link to='/Login' onClick={forceUpdate} className="p-2 text-dark">Login</Link>
            </div>

          </nav>
        </> :
        <>
          <div className="my-0 mr-md-auto font-weight-normal text-dark" style={{ marginLeft: '1%' }} >Hello {user.firstName + " " + user.lastName + " "}</div>
          <nav className="my-2 my-md-0 mr-md-3">
            <div>
              <Link to={"/developer/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">Profile</Link>
              <Link to={"/project/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">Create Project</Link>
              <Link to={"/projectmanagement/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">My Projects</Link>
              <Link to={"/about/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">About</Link>
              <Link to={"/contact/" + devUsername} onClick={forceUpdate} className="p-2 text-dark">Contact</Link>
              <Link to="/settings" className="p-2 text-dark" onClick={forceUpdate}>Settings</Link>
              <Link to='/' className="p-2 text-dark">Search</Link>
              <Link to='/Login' onClick={forceUpdate} className="p-2 text-dark">Logout</Link>
            </div>
          </nav >
        </>
      }
    </div >


  )
}


