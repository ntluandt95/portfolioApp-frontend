import React, { useState, useEffect, useCallback, useRef } from 'react'
import authService from '../services/auth.service';
import { useHistory } from "react-router-dom";
import userService from '../services/user.service';


export const LoginComponent = ({ setUser, user, onLogout, setDeveloper }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [alert, setAlert] = useState()
    const handleKeyDown = (e) => {

        if (e.keyCode == 13)
            handleSubmit(e);
    }

    const handleSubmit = async (e) => {


        const response = await authService.login(username, password);
        if (response === "invalid") {
            setAlert("Wrong username or password");
        } else {
            let user = await userService.getUserByUsername(username);
            localStorage.setItem("user", JSON.stringify(user.data));
            await setUser();
            window.alert("Login succeed");
            history.push("/mypage/"+username);
            
        }

    }

    const handleLogout = (e) => {
        onLogout();
    }

    return (
        <>
            {!user ?
                <section className="vh-100" >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Sign in</h3>
                                        {
                                            (alert)
                                            &&
                                            (<div class="alert alert-danger" role="alert">
                                                {alert}
                                            </div>)
                                        }
                                        <div className="form-outline mb-4">
                                            <input type="text" placeholder="username" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" placeholder="password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown} />
                                        </div>
                                        <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmit} >Login</button>
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
                                        <h3 className="mb-5">Sign out</h3>
                                        <button className="btn btn-primary btn-lg btn-block" onClick={handleLogout} >Logout</button>
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
