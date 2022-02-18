import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import userService from '../services/user.service';



const DeveloperProfileComponent = ({ developer }) => {
    const [user, setUser] = useState({});
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    console.log("renderDeveloperProfileComponent")
    React.useEffect(() => {
        userService.getUserByUsername(developer && developer.username).then(resp => {
            setUser(resp.data)
        }).catch(e => {
            history.push("/404")
            forceUpdate();
        })
    }, [])

    const history = useHistory();
    if (developer && developer.status !== "PUBLIC") {
        console.log(developer)
        history.push("/404")
        forceUpdate();
    }

    const projects = developer && developer.projectList.map(proj =>
        <>
            <dt className="col-sm-3 text-white bg-dark"><a href={proj.deploymentlink}>{proj.name}</a></dt >
            <dd class="col-sm-9">
                <dl class="row">
                    <dt class="col-sm-4 text-white bg-dark">Status: {proj.status}</dt>
                    <dd class="col-sm-8 text-white bg-dark">
                        <p>{proj.description}</p>
                        <p>{proj.githublink}</p>
                    </dd>
                </dl>
            </dd>
        </>
    )

    return (
        <>
            {developer && developer.status !== "PUBLIC" ?
                <Redirect to="/404" /> :
                <>
                    <h1 className="display-2 text-white bg-dark">Hello I'm {user.firstName + " " + user.lastName}</h1>
                    <h1 className="display-5 text-white bg-dark">I'm a {developer && developer.role}</h1>
                    <dl className='row'>
                        {projects}
                    </dl>
                </>
            }
        </>
    )
}

export default DeveloperProfileComponent
