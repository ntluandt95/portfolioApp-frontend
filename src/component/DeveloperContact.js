import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom';
import userService from '../services/user.service';
import logo from '../logo.svg';

const DeveloperContact = ({ developer }) => {
    const [user, setUser] = useState({});
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    React.useEffect(() => {
        if (developer)
            userService.getUserByUsername(developer.username).then(resp => {
                setUser(resp.data)
            }).catch(e => {
            })
    }, [developer])

    return (
        <>
            {developer && user.firstName ?
                developer.status !== "PUBLIC" ?
                    <Redirect to="/404" /> :
                    <>
                        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <h1 className="display-2 text-white bg-dark">Where to Reach Me</h1>
                            <h1 className="display-5 text-white bg-dark">{developer.introduction}</h1>
                        </div>
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
