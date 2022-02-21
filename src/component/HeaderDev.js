import React, { useState, Component, useReducer } from 'react'
import { Link } from 'react-router-dom'
import developerService from '../services/developer.service';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export function HeaderDev({ username, onLogout }) {

    const handleLogout = (e) => {
        onLogout();

    }
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">

            <Link to={username ? '/mypage/'+username : '/'} className="my-0 mr-md-auto font-weight-normal text-dark">Portfolio</Link>
            <Link to={'/mypage/'+username} className="p-2 text-dark">Hello, {username}</Link>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to='/settings' className="p-2 text-dark">Settings</Link>
                <Link to='/Login' onClick={handleLogout} className="p-2 text-dark">Logout</Link>
            </nav >
        </div >
    )
}
