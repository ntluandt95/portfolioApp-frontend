import React, { useState, useEffect } from 'react'
import authService from '../services/auth.service';
import projectService from '../services/project.service';
import { ProjectFormComponent } from './ProjectFormComponent';
import { ProjectDelete } from './ProjectDelete';
const ProjectListComponent = () => {

    const [data, setData] = useState([])
    const [component, setComponent] = useState(null)
    var i = 1;
    useEffect(() => {
        fetchCards();
    }, [data]);


    const fetchCards = async () => {
        const username = authService.getCurrentUsername();
        const response = await projectService.getProjectsByUsername(username);
        console.log(response)
        setData(response.map((element) => (
            <tr>
                <td>{i++}</td>
                <td>{element.name}</td>
                <td>{element.description}</td>
                <td>{element.status}</td>
                <td>
                    <button className='btn btn-primary' onClick={() => { setComponent((<ProjectFormComponent setComponent={setComponent} id={element.id} />)) }}>Update</button>
                    <button className='btn btn-danger' onClick={() => { setComponent((<ProjectDelete setComponent={setComponent} id={element.id} />)) }}>Delete</button>
                </td>
            </tr>
        )));

    }
    return (
        <>
            <h3>Projects Table</h3>
            <table class="table" style={{ backgroundColor: 'white' }}>
            
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col"><button className='btn btn-success' onClick={() => { setComponent((<ProjectFormComponent setComponent={setComponent} />)) }}>Add new project</button></th>
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

export default ProjectListComponent
