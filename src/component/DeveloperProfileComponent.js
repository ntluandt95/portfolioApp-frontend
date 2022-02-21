import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import userService from '../services/user.service';
import Card from './card';



const DeveloperProfileComponent = ({ user }) => {
    const developer = user && user.developer;

    const projects = developer && developer.projectList.map(proj =>
        <>
            <div className="col-sm-4">
                <Card name={proj.name} desc={proj.description} img={proj.imgLink} github={proj.githublink} link={proj.deploymentlink} status={proj.status} />
            </div>
        </>
    )

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
                                                <h1 className="display-4">Hello I'm</h1>
                                                <h1 className="display-2">{user.firstName + " " + user.lastName}</h1>
                                                <h1 className="display-5">I'm a {developer.role}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {projects}
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

export default DeveloperProfileComponent
