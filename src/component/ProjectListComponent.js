import React, { useState } from 'react'
import { Project } from '../model/Project';
import projectService from '../services/project.service';
import { useHistory } from "react-router-dom";
import Card from './card';

const ProjectListComponent = () => {
    const [projectname, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [deploymentlink, setDeploymentlink] = useState("");
    const [imageLink, setImagelink] = useState("");
    const [githublink, setGithublink] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async () => {
        let devUsername = 'some';
        let project = new Project(1001, projectname, description, deploymentlink, imageLink, githublink, status, devUsername);
        let response = await projectService.postProject(project);
        
        window.alert("Project Created!");
    }
    return (
<<<<<<< Updated upstream
        <div>
            
        </div>
=======
        <>
            <section className="vh-100" >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Create new Project</h3>
                                        <div className="form-outline mb-4">
                                            <input type="text" placeholder="Project Name" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setProjectName(e.target.value)} />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" placeholder="Description" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setDescription(e.target.value)} />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" placeholder="Deployment link" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setDeploymentlink(e.target.value)} />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" placeholder="Github link" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setGithublink(e.target.value)} />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" placeholder="Image link" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setImagelink(e.target.value)} />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <select className="form-control form-control-lg" onChange={(e) => setStatus(e.target.value)} >
                                                <option value="FINISHED">Finished</option>
                                                <option value="UNFINISHED">Unfinished</option>
                                            </select>
                                        </div>

                                        <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
>>>>>>> Stashed changes
    )
}

export default ProjectListComponent
