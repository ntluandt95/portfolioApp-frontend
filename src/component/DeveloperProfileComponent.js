import React, { useReducer, useState, useEffect } from 'react'
import logo from '../logo.svg';
import userService from '../services/user.service';
import { useParams } from 'react-router-dom'
import Card from './Card'
import projectService from '../services/project.service';
import developerService from '../services/developer.service';
import resumeService from '../services/resume.service';
import { Link } from 'react-router-dom'

const DeveloperProfileComponent = (props) => {
    const { username } = useParams()
    const [data, setData] = useState([])
    var [user, setUser] = useState(userService.getUserByUsername(username))
    var [dev, setDev] = useState(developerService.getDevelopersByUsername(username))
    const [resumes, setResumes] = useState([]);
    const [option, setOption] = useState(1);


    useEffect(async () => {
        const responseUser = await userService.getUserByUsername(username);
        user = await responseUser.data;
        await setUser(user)
        


        const responseDev = await developerService.getDevelopersByUsername(username);
        dev = await responseDev.data
        await setDev(dev)
        
        

        fetchCards();
        fetchResumes();
        
        
    }, [data]);

    const fetchCards = async () => {
        
        const response = await projectService.getProjectsByUsername(username);


        setData(response.map((element) => (
            <div class="col-sm-4">
                <Card description={element.description} name={element.name} img={element.imgLink} github={element.githublink} link={element.deploymentlink} />
            </div>
        )));

    }
    const fetchResumes = async () => {
        const response = await resumeService.getPublicResumesByUsername(username);

        setResumes(response.map((element) => (
            <p className="lead" style={{ textAlign: 'left' }}>
                <a href={element.link}>Download my {element.title} resume</a>
            </p>
        )));
        
    }


    return (
        user.firstName ?
            <>
                <div className='container' style={{ backgroundColor: 'white' }}>
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                        <Link className="my-0 mr-md-auto font-weight-normal text-dark">{user.firstName + " " + user.lastName} Portfolio</Link>
                        <div>
                            <nav className="my-2 my-md-0 mr-md-3">
                                <Link className="p-2 text-dark" onClick={() => { setOption(1) }}>Projects</Link>
                                <Link className="p-2 text-dark" onClick={() => { setOption(2) }}>About</Link>
                                <Link className="p-2 text-dark" onClick={() => { setOption(3) }}>Contact</Link>
                            </nav >
                        </div>
                    </div>
                    {(option == 1) && (
                        <>
                            <div class="row" style={{ marginTop: '5%' }}>
                                <div className='col-4 offset-4'>
                                    <h1 className="display-4" style={{ textAlign: 'center' }}>My Projects</h1>
                                </div>
                            </div>
                            <div class="row">
                                {data}
                            </div>
                        </>
                    )}
                    {(option == 2) && (<div class="row">
                        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <h1 className="display-4">Hello, I'm {user.firstName + " " + user.lastName}</h1>
                            <p className="lead" style={{ textAlign: 'left' }}>{user.developer.introduction}</p>

                            {resumes}
                        </div>
                    </div>)}
                    {(option == 3) && (<div class="row">
                        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <h1 className="display-4">If you fancy a chat, feel free to contact me:</h1>
                            <p className="lead" style={{ textAlign: 'left' }}>Phone: {user.phoneNumber}</p>
                            <p className="lead" style={{ textAlign: 'left' }}>Email: {user.email}</p>
                        </div>
                    </div>)}
                </div>
            </> :
            <>
                <section className="vh-100" >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Loading</h3>
                                        <img src={logo} className="App-logo" style={{ width: '50%' }} alt="logo"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

    )
}

export default DeveloperProfileComponent
