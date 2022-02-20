import {FaTimes} from 'react-icons/fa'

const Resume = ({res, onDelete}) => {
  return (
    <div className = 'resume'>
    <h3>
        {res.title} <FaTimes 
         style = {{color: 'red', cursor: 'pointer', marginLeft: '80px'}}
         onClick={() =>onDelete(res.id)} />
    </h3>
    <p>{res.link}</p>
    </div>
  )
}

export default Resume