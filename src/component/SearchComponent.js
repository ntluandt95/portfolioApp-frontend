import React from 'react'

export default function SearchComponent() {
    return (
        <div className="container" style={{ paddingTop: '15%' }}>
            <div className="row">

                <div className="col-8 offset-1">
                    <input type="text" placeholder='Search for portfolio' className="form-control" name="" id="" />
                </div>
                <div className="col-1">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    )
}
