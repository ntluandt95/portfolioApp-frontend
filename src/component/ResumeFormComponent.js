import React, { useState, useEffect } from 'react'
import { Resume } from '../model/Resume';
import resumeService from '../services/resume.service';
import authService from '../services/auth.service';

export const ResumeFormComponent = ({setComponent,id}) => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [status, setStatus] = useState("PUBLIC");

    useEffect(async () => {
        console.log(id);
        if(id){
            const data = await resumeService.getResumeById(id);
            const resume = await data.data;
            console.log(resume)
            await setTitle(resume.title)
            await setLink(resume.link)
            await setStatus(resume.status)
            // await setDescription(project.description)
            // await setDeploymentlink(project.deploymentlink)
            // await setImagelink(project.imgLink)
            // await setGithublink(project.githublink)
            // await setStatus(setStatus)
        }
    }, []);

    const handleSubmit = async () => {
        if (id == null) {
            let devUsername = authService.getCurrentUsername;
            let resume = new Resume(1001,title,link,status);
            let response = await resumeService.postResume(resume);
            window.alert("Resume Added!");
        }else{
            let devUsername = authService.getCurrentUsername;
            let resume = new Resume(id,title,link,status);
            let response = await resumeService.putResume(id,resume);
            window.alert("Resume Updated!");
        }
        setComponent(null);
    }

    return (
        <>
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 popup">
                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                    <div className="card-body p-5 text-center">

                        <h3 className="mb-5">Add new Resume</h3>
                        <div className="form-outline mb-4 form-group">
                            <input type="text" placeholder="Title" id="typeEmailX-2" value={title} className="form-control form-control-lg" onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" placeholder="Link" id="typeEmailX-2" value={link} className="form-control form-control-lg" onChange={(e) => setLink(e.target.value)} />
                        </div>

                        <div className="form-outline mb-4">
                            <select className="form-control form-control-lg" value={status} onChange={(e) => setStatus(e.target.value)} >
                                <option value="PUBLIC">PUBLIC</option>
                                <option value="HIDDEN">HIDDEN</option>
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
