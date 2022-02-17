import React, { useState } from 'react'
import authService from '../services/auth.service';
import { Link } from 'react-router-dom'
export const Header = ({ user, onLogout }) => {

  const handleLogout = (e) => {
    onLogout();
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <Link to='/' className="my-0 mr-md-auto font-weight-normal text-dark">Portfolio</Link>
      <nav className="my-2 my-md-0 mr-md-3">
        {!user ? (
          <div>
            <Link to='/Register' className="p-2 text-dark">Register</Link>
            <Link to='/Login' className="p-2 text-dark">Login</Link>
          </div>) : (
          <div>
            Hello {user} <Link to='/Login' onClick={handleLogout} className="p-2 text-dark">Logout</Link>
          </div>)}
      </nav>
    </div>
  )
}


