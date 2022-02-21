import React, { useState } from 'react'
import logo from '../logo.svg';
import developerService from '../services/developer.service';
import userService from '../services/user.service';

const DeveloperSettings = ({ user, developer }) => {
    const [invalidInput, setAlert] = useState(null)


    const updateFirstname = (e) => {
        var name = document.getElementById("inputFirstName").value;

        user.firstName = name
        userService.updateUser(user)
    }

    const updatePassword = (e) => {
        var pass = document.getElementById("inputPassword").value;

        user.password = pass
        userService.updateUser(user)
    }

    const updateLastname = (e) => {
        var name = document.getElementById("inputLastName").value;

        user.lastName = name
        userService.updateUser(user)
    }

    const updateEmail = (e) => {
        var email = document.getElementById("inputEmail").value;

        user.email = email
        userService.updateUser(user)
    }

    const updatePhone = (e) => {
        var phone = document.getElementById("inputPhoneNumber").value;

        user.phoneNumber = phone
        userService.updateUser(user)
    }

    const updateStatus = (e) => {
        var status = document.getElementById("inputStatus").value;

        developer.status = status
        developerService.updateDeveloper(user)
    }

    const updateAboutMe = (e) => {
        var introduction = document.getElementById("inputAboutMe").value;

        developer.introduction = introduction
        developerService.updateDeveloper(user)
    }

    const updateRole = (e) => {
        var role = document.getElementById("inputRole").value;

        developer.role = role
        developerService.updateDeveloper(user)
    }

    return (
        <>
            {user && developer ?
                <section className="vh-200">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-8">
                                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Settings</h3>
                                        {
                                            (invalidInput)
                                            &&
                                            (<div className="alert alert-danger" role="alert">
                                                {invalidInput}
                                            </div>)
                                        }
                                        <div className="row">
                                            <div className="form-outline mb-4 col-6">
                                                <label htmlFor='inputEmail'>Email</label>
                                            </div>
                                            <div className="form-outline mb-4 col-6">
                                                <label htmlFor='inputPassword'>Password</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-outline mb-4 col-6">
                                                <input type="text" placeholder="Email" id="inputEmail" className="form-control form-control-lg" />
                                                <button className="btn btn-primary btn-lg btn-block" onClick={updateEmail} htmlFor="inputEmail">Update</button>
                                            </div>
                                            <div className="form-outline mb-4 col-6">
                                                <input type="password" placeholder="Password" id="inputPassword" className="form-control form-control-lg" />
                                                <button className="btn btn-primary btn-lg btn-block" onClick={updatePassword} htmlFor="inputPassword">Update</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-outline mb-4 col-6">
                                                <label htmlFor='inputFirstName'>First Name</label>
                                            </div>
                                            <div className="form-outline mb-4 col-6">
                                                <label htmlFor='inputLastName'>Last Name</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-outline mb-4 col-6" >
                                                <input type="text" placeholder="First Name" id="inputFirstName" className="form-control form-control-lg" />
                                                <button className="btn btn-primary btn-lg btn-block" onClick={updateFirstname} htmlFor="inputFirstName">Update</button>
                                            </div>
                                            <div className="form-outline mb-4 col-6">
                                                <input type="text" placeholder="Last Name" id="inputLastName" className="form-control form-control-lg" />
                                                <button className="btn btn-primary btn-lg btn-block" onClick={updateLastname} htmlFor="inputLastName">Update</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-outline mb-4 col-6">
                                                <label htmlFor='inputStatus'>Status</label>
                                            </div>
                                            <div className="form-outline mb-4 col-6">
                                                <label htmlFor='inputPhoneNumber'>Phone Number</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-outline mb-4 col-6">
                                                <select className="form-control form-control-lg" id="inputStatus" >
                                                    <option value="PUBLIC">Public</option>
                                                    <option value="HIDDEN">Hidden</option>
                                                </select>
                                                <button className="btn btn-primary btn-lg btn-block" onClick={updateStatus} htmlFor="inputStatus">Update</button>
                                            </div>
                                            <div className="form-outline mb-4 col-6">
                                                <input type="text" placeholder="Phone Number" id="inputPhoneNumber" className="form-control form-control-lg" />
                                                <button className="btn btn-primary btn-lg btn-block" onClick={updatePhone} htmlFor="inputPhoneNumber">Update</button>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <label htmlFor='inputAboutMe'>About Me</label>
                                        </div>
                                        <div className="row">
                                            <input type="text" placeholder="Hello I am..." id="inputAboutMe" className="form-control form-control-lg" />
                                            <button className="btn btn-primary btn-lg btn-block" onClick={updateAboutMe} htmlFor="inputAboutMe">Update</button>
                                        </div>
                                        <div className="row">
                                            <label htmlFor='inputRole'>Role</label>
                                        </div>
                                        <div className="row">
                                            <input type="text" placeholder="Frontend Developer" id="inputRole" className="form-control form-control-lg" />
                                            <button className="btn btn-primary btn-lg btn-block" onClick={updateRole} htmlFor="inputRole">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> :
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
                </section>}
        </>
    )
}

export default DeveloperSettings
