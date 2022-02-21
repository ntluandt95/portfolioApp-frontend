import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import userService from '../services/user.service';

export default function SearchComponent() {
    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);
    const handleSearch = async () => {
        const result = await userService.search(search);
        const data = result.data;
        console.log(data);
        setList(data.map((element) =>(
            <div class="portfolioCard col-4 offset-1">
                <h5>{element.username}</h5>
                <hr></hr>
                <p>{element.introduction}</p>
                <Link to={'/mypage/'+element.username}>Detail</Link>
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
