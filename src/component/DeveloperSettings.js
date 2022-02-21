import React, { useState } from 'react'
import { ProfileUpdateComponent } from './ProfileUpdateComponent'
import ProjectListComponent from './ProjectListComponent'
import ResumeListComponent from './ResumeListComponent'

const DeveloperSettings = () => {
    const [component, setComponent] = useState((<ProjectListComponent/>))
    return (
        <div className="container" >
            <div className="row" style={{ paddingTop: '3%' }}>
                <button className='btn btn-primary' onClick={()=>{setComponent(<ProfileUpdateComponent/>)} }>Profile</button>
                <button className='btn btn-primary' onClick={()=>{setComponent(<ProjectListComponent/>)} } style={{marginLeft:'1%'}}>Project</button>
                <button className='btn btn-primary' onClick={()=>{setComponent(<ResumeListComponent/>)} } style={{marginLeft:'1%'}}>Resume</button>
            </div>
            <div className="row" style={{ paddingTop: '1%' }}>
                {component}
            </div>

        </div>








    )
}

export default DeveloperSettings
