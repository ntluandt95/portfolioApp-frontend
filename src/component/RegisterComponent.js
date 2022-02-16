import React from 'react'

export function RegisterComponent() {

    const handleSubmit = async () => {

    }

    return (
        <>



            <section class="vh-200" style={{ backgroundColor: 'white' }} >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-8">
                            <div class="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div class="card-body p-5 text-center">

                                    <h3 class="mb-5">Register Form</h3>
                                    <div class="row">
                                        <div class="form-outline mb-4 col-6">
                                            <input type="text" placeholder="username" id="typeEmailX-2" class="form-control form-control-lg" />
                                        </div>
                                        <div class="form-outline mb-4 col-6">
                                        <input type="text" placeholder="First name" id="typePasswordX-2" class="form-control form-control-lg" />
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div class="form-outline mb-4 col-6" >
                                        <input type="password" placeholder="password" id="typePasswordX-2" class="form-control form-control-lg" />
                                    </div>
                                    <div class="form-outline mb-4 col-6">
                                        <input type="text" placeholder="Last name" id="typePasswordX-2" class="form-control form-control-lg" />
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div class="form-outline mb-4 col-6">
                                        <input type="password" placeholder="Confirm password" id="typePasswordX-2" class="form-control form-control-lg" />
                                    </div>
                                    <div class="form-outline mb-4 col-6">
                                        <input type="email" placeholder="Email" id="typePasswordX-2" class="form-control form-control-lg" />
                                    </div>
                                    </div>
                                    
                                    <div class="row">
                                    <div class="form-outline mb-4 col-6">
                                        <select class="form-control form-control-lg">
                                            <option>Public</option>
                                            <option>Hidden</option>
                                        </select>
                                    </div>
                                    <div class="form-outline mb-4 col-6">
                                        <input type="phone" placeholder="Phone Number" id="typePasswordX-2" class="form-control form-control-lg" />
                                    </div>
                                    </div>
                                    

                                    

                                    

                                    

                                    
                                    <button class="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Register</button>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
