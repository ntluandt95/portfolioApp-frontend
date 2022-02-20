
import {useState} from 'react';

const ResumeListForm = ({onAdd}) => {
    const[title, setTitle] = useState('');
    const[link, setLink] = useState('');

    const onSubmit = (e)=> {
        e.preventDefault();

        if(!title){
            alert('Please add a Title')
            return
        }
        onAdd({title, link})
        setTitle('');
        setLink('');
    }

  return (
    <form className= 'resumeForm' onSubmit = {onSubmit} >
        <div  className='resControl'>
            <label >Title</label>
            <input type='text' placeholder='Enter the Title' value={title}
            onChange={(e) => setTitle(e.target.value) }/>
            </div>
            <div className='resControl'>  
            <label >Link</label>
            <input type='text' placeholder='Enter the Link'
             value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <input type='submit' value='Submit Resume' className="getbtn formbtn-block" />
    </form>
  )
}

export default ResumeListForm