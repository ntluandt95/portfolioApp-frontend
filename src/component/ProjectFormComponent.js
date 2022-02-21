import React, { useState, useEffect } from 'react'
import { Project } from '../model/Project';
import authService from '../services/auth.service';
import projectService from '../services/project.service';

export const ProjectFormComponent = ({ setComponent, id }) => {
    const [projectname, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [deploymentlink, setDeploymentlink] = useState("");
    const [imageLink, setImagelink] = useState("");
    const [githublink, setGithublink] = useState("");
    const [status, setStatus] = useState("FINISHED");

    useEffect(async () => {
        console.log(id);
        if(id){
            const data = await projectService.getProjectById(id);
            const project = await data.data;
            console.log(project)
            await setProjectName(project.name)
            await setDescription(project.description)
            await setDeploymentlink(project.deploymentlink)
            await setImagelink(project.imgLink)
            await setGithublink(project.githublink)
            await setStatus(setStatus)
        }
    }, []);
    
    const handleSubmit = async () => {
        if (id == null) {
            let devUsername = authService.getCurrentUsername;
            let project = new Project(1001, projectname, description, deploymentlink, imageLink, githublink, status, devUsername);
            let response = await projectService.postProject(project);
            window.alert("Project Added!");
        }else{
            let devUsername = authService.getCurrentUsername;
            let project = new Project(id, projectname, description, deploymentlink, imageLink, githublink, status, devUsername);
            let response = await projectService.putProject(id,project);
            window.alert("Project Updated!");
        }
        setComponent(null);
    }
    return (

        <>
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 popup">
                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                    <div className="card-body p-5 text-center">
                    
                        <h3 className="mb-5">Add new Project</h3>
                        <div className="form-outline mb-4 form-group">
                        <input type="text" placeholder="Project Name" id="typeEmailX-2" value={projectname} className="form-control form-control-lg" onChange={(e) => setProjectName(e.target.value)} />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" placeholder="Description" id="typeEmailX-2" value={description} className="form-control form-control-lg" onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" placeholder="Deployment link" id="typeEmailX-2" value={deploymentlink} className="form-control form-control-lg" onChange={(e) => setDeploymentlink(e.target.value)} />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" placeholder="Github link" id="typeEmailX-2" value={githublink} className="form-control form-control-lg" onChange={(e) => setGithublink(e.target.value)} />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" placeholder="Image link" id="typeEmailX-2" value={imageLink} className="form-control form-control-lg" onChange={(e) => setImagelink(e.target.value)} />
                        </div>

                        <div className="form-outline mb-4">
                            <select className="form-control form-control-lg" value={status} onChange={(e) => setStatus(e.target.value)} >
                                <option value="FINISHED">Finished</option>
                                <option value="UNFINISHED">Unfinished</option>
                            </select>
                        </div>

                        <div className="form-outline mb-4">
                            <button className="btn btn-primary btn-lg" onClick={handleSubmit}>Update</button>
                            <button className="btn btn-danger btn-lg" onClick={() => setComponent(null)}>Exit</button>
                        </div>
                        
                    </div>
                </div>
            </div>



        </>
    )
}
