import React from 'react'
import resumeService from '../services/resume.service';

export const ResumeDeleteComponent = ({ setComponent, id }) => {
    const handleSubmit = () =>{
        resumeService.deleteResume(id);
        setComponent(null);
    }
    return (
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 popup">
                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                    <div className="card-body p-5 text-center">
                    
                        <h3 className="mb-5">Do you really want to delete?</h3>
                        

                        <div className="form-outline mb-4">
                            <button className="btn btn-danger btn-lg" onClick={handleSubmit}>Delete</button>
                            <button className="btn btn-primary btn-lg" onClick={() => setComponent(null)}>Exit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
