import React, { useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { Project } from '../model/Project';
import projectService from '../services/project.service';
import developerService from '../services/developer.service';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export const Header = ({ user, setDev }) => {

    const [devUsername, setDevUsername] = useState("");
    const [, forceUpdate] = useReducer(x => x + 1, 0);
  
    const changeDevUsername = (devUsername) => {
      setDevUsername(devUsername);
      if (devUsername) {
        developerService.getDevelopersByUsername(devUsername).then(resp => {
          setDev(resp)
        }).catch(e => {
          history.push("/404")
          forceUpdate()
        })
      }
    }

const ProjectManagementComponent = () => {
    return (
        <section className="vh-100" >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">My Projects</h3>

                                        {/* <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmit, loadCreate} >Create</button> */}
                                        {/* <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmit, loadEdit} >Edit</button>
                                        <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmit, loadDelete} >Delete</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}

export default ProjectManagementComponent