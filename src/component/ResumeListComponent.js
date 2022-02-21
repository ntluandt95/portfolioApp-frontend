import React, { useState,useEffect } from 'react'
import authService from '../services/auth.service';

import { ProjectFormComponent } from './ProjectFormComponent';
import { ProjectDelete } from './ProjectDelete';
import resumeService from '../services/resume.service';
import { ResumeFormComponent } from './ResumeFormComponent';
import { ResumeDeleteComponent } from './ResumeDeleteComponent';
const ResumeListComponent = () => {
    const [data, setData] = useState([])
    const [component, setComponent] = useState(null)
    var i=1;
    useEffect(() => {
        fetchCards();
    }, [data]);

    
    const fetchCards = async () => {
        const username = authService.getCurrentUsername();
        const response = await resumeService.getResumesByUsername(username);
        console.log(response)
        setData(response.map((element) => (
            <tr>
                <td>{i++}</td>
                <td>{element.title}</td>
                <td>{element.link}</td>
                <td>{element.status}</td>
                <td>
                    <button className='btn btn-primary' onClick={()=>{setComponent((<ResumeFormComponent setComponent={setComponent} id={element.id}/>))} }>Update</button>
                    <button className='btn btn-danger' onClick={()=>{setComponent((<ResumeDeleteComponent setComponent={setComponent} id={element.id}/>))}}>Delete</button>
                </td>
            </tr>
        )));

    }
    return (
        <>
            <h3>Resumes Table</h3>            
            <table class="table" style={{ backgroundColor: 'white' }}>
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Link</th>
                        <th scope="col">Status</th>
                        <th scope="col"><button className='btn btn-success' onClick={()=>{setComponent((<ResumeFormComponent setComponent={setComponent}/>))}  }>Add new Resumes</button></th>
                    </tr>
                </thead>
                <tbody>
                    {data}

                </tbody>
            </table>
            {component}
        </>
    )
}

export default ResumeListComponent
