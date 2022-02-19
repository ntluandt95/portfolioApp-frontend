import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import userService from '../services/user.service';
import Card from './card';



const DeveloperProfileComponent = ({ developer }) => {
    const [user, setUser] = useState({});
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    React.useEffect(() => {
        if (developer)
            userService.getUserByUsername(developer.username).then(resp => {
                setUser(resp.data)
            }).catch(e => {
            })
    }, [developer])

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
                developer && (developer.status !== "PUBLIC") ?
                    <Redirect to="/404" /> :
                    <>
                        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <h1 className="display-2 text-white bg-dark">Hello I'm {user.firstName + " " + user.lastName}</h1>
                            <h1 className="display-5 text-white bg-dark">I'm a {developer && developer.role}</h1>
                        </div>
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
