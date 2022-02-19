import  {useState} from 'react';
import { Resume } from '../model/Resume';
import resumeService from '../services/resume.service';

const ResumeListComponent = () => {
    
    const[title, setTitle] = useState('');
    const[link, setLink] = useState('');
    const[status, setStatus] = useState('');
    const[devUsername, setDevUserName] = useState('');
    const [resumes, setResumes] = useState([]);





    
    const addResume = ({add}) =>{
        const onSubmit = async (e) => {
            e.preventDefault();
            if(!title){
                alert('Add a Resume');
                return;
            }
            let resume = new Resume(title,link,status,devUsername);
            console.log(resume);
               await resumeService.addResume(resume);
        };


        return(
            <>
             <form className="add">
             <div>
                <label>Title</label>
                <input type='text' placeholder='Enter Title' value={title}  onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Link</label>
                <input type='text' placeholder='Enter TLink' value={link}  onChange={(e) => setLink(e.target.value)} />
            </div>
            <div>
                <label>Status</label>
                <input type='text' placeholder='Enter Status' value={status}  onChange={(e) => setStatus(e.target.value)} />
            </div>
            
        </form>
        <input type='submit' value='Save Task' className='btn btn-block'/>
            </>)
    }

         function getAllResumes(){
           resumeService.getAllResumes().then(res=> {
               setResumes(res.data);
           })

        }

    const showResume = resumes.map(r =>
        <tr key ={r.id}>
            <td>{r.title}</td>
            <td>{r.link}</td>
            <td>{r.status}</td>
        </tr>)
   

    return (
        <div >
        <button onClick={getAllResumes}>Show All Resumes</button>
        <button onClick = {addResume}>Add Resume</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Link</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {showResume}
            </tbody>
        </table>
        </div>
    )
}

export default ResumeListComponent
