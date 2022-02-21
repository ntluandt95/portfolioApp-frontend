import React, { useState } from 'react'
import { User } from '../model/User';
import userService from '../services/user.service';
import { useHistory } from "react-router-dom";
import authService from '../services/auth.service';

export function RegisterComponent() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    //const [status, setStatus] = useState("PUBLIC");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("DEVELOPER");
    const [alert, setAlert] = useState(null)
    const history = useHistory();
    const handleSubmit = async () => {
        if (username === "") {
            setAlert("Username is required!");
        } else if (password === "") {
            setAlert("Password is required!");
        } else if (repassword != password) {
            //console.log(repassword!=password)
            setAlert("Please confirm password!");
        } else {
            let user = new User(username, password, firstname, lastname, email, phone);
            await userService.postUser(user);
            if (role === "DEVELOPER") {
                await authService.login(user.username, user.password);
                await userService.postDeveloper(user.username);
            }
            window.alert("Register succeed");
            history.push('/login');
        }
    }

    return (
        <>
            <section className="vh-200">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-8">
                            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Register Form</h3>
                                    {
                                        (alert)
                                        &&
                                        (<div class="alert alert-danger" role="alert">
                                            {alert}
                                        </div>)
                                    }

                                    <div className="row">
                                        <div className="form-outline mb-4 col-6">
                                            <input type="text" placeholder="username" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                        <div className="form-outline mb-4 col-6">
                                            <input type="text" placeholder="First name" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setFirstname(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-outline mb-4 col-6" >
                                            <input type="password" placeholder="password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="form-outline mb-4 col-6">
                                            <input type="text" placeholder="Last name" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setLastname(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-outline mb-4 col-6">
                                            <input type="password" placeholder="Confirm password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setRepassword(e.target.value)} />
                                        </div>
                                        <div className="form-outline mb-4 col-6">
                                            <input type="email" placeholder="Email" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-outline mb-4 col-6">
                                            <select className="form-control form-control-lg" onChange={(e) => setRole(e.target.value)} >
                                                <option value="DEVELOPER">Developer</option>
                                                <option value="RECRUITER">Recruiter</option>
                                            </select>
                                        </div>
                                        <div className="form-outline mb-4 col-6">
                                            <input type="phone" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} id="typePasswordX-2" className="form-control form-control-lg" />
                                        </div>
                                    </div>









                                    <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Register</button>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
