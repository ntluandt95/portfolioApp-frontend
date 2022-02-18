import React, { useState } from 'react'
import userService from '../services/user.service';


export default function SearchComponent() {
    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);
    const handleSearch = async () => {
        const result = await userService.search(search);
        const data = result.data;
        console.log(data);
        setList(data.map((element) =>(
            <div class="col-4 offset-1" style={{ backgroundColor: 'white', marginTop: '1%' }}>
                <h4>{element.username}</h4>
                <p>{element.introduction}</p>
            </div>
        )));
        console.log(list)

    }
    return (
        <div className="container" style={{ paddingTop: '15%' }}>
            <div className="row" >

                <div className="col-8 offset-1" style={{ backgroundColor: 'white',padding: '0' }}>
                    <input type="text" placeholder='Search for portfolio' className="form-control" name="" id="" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="col-1" style={{paddingLeft:'20'}}>
                    <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="row"  >

            {list}


                
            </div>


        </div>


    )
}
