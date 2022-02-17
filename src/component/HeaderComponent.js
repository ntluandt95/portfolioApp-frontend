import { Button } from 'bootstrap'
import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import authService from '../services/auth.service'
export const HeaderComponent = ({isLogin}) => {
  
  console.log(isLogin)
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">Portfolio</h5>
      <nav className="my-2 my-md-0 mr-md-3">
          

          
          
          <Link to='/Register' className="p-2 text-dark" >Register</Link>
          { (isLogin === null) ? (<Link to='/Login' className="p-2 text-dark" >Login</Link>) : (<Link onClick={authService.logout()} to='/login' class="p-2 text-dark" >Logout</Link>)}
          
          
      </nav>
      
  </div>
    )
}


