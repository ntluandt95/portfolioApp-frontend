import React from 'react'
import logo from '../logo.svg';

export const Loading = () => {

    return (
        <section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">Loading</h3>
                                <img src={logo} className="App-logo" alt="logo" style={{ width: "100%" }}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}