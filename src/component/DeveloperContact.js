import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom';
import userService from '../services/user.service';
import logo from '../logo.svg';

const DeveloperContact = ({ user }) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const developer = user && user.developer;

    return (
        <>
            {developer && user.firstName ?
                developer.status !== "PUBLIC" ?
                    <Redirect to="/404" /> :
                    <>
                        <section>
                            <div className=" py-3">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                        <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                            <div className="card-body p-5 text-center">
                                                <h1 className="display-2">Where to Reach Me</h1>
                                                <div className="text-white bg-dark">
                                                    <h1 className="display-">{user.email && "Email: " + user.email}</h1>
                                                    <h1 >{user.phoneNumber && "Phone Number: " + user.phoneNumber}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                :
                <section className="vh-100" >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Loading</h3>
                                        <img src={logo} className="App-logo" alt="logo"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default DeveloperContact
