import React from 'react'


const Card = ({ name, desc, img, github, link, status }) => {

    return (
        <div>
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{name}</h4>
                </div>
                <div>

                    <a href={link}><img src={img} alt={name} height='250' width='100%' /></a>
                    <p>{desc}</p>
                    <a href={github} className="btn btn-block btn-lg ">Github</a>
                </div>
            </div>

        </div>
    )
}

export default Card
