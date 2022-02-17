import React from 'react'

export default function SearchComponent() {
    return (
        <div class="container" style={{paddingTop: '15%'}}>
            <div class="row">
            
                <div class="col-8 offset-1">
                    <input type="text" placeholder='Search for portfolio' class="form-control" name="" id="" />
                </div>
                <div class="col-1">
                    <button class="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    )
}
