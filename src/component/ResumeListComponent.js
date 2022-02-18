import  {useState} from 'react'
import { Resume } from '../model/Resume';
import resumeService from '../services/resume.service';

const ResumeListComponent = () => {
    const [id, setId] = useState(id);
    const[title, setTitle] = useState('');
    const[link, setLink] = useState('');
    const[status, setStatus] = useState('');
    const[devUsername, setDevUserName] = useState('');

    const addSubmit = async () =>{
        let resume = new Resume(title,link,status,devUsername);
        resumeService.addResume(resume);
    }

    const deleteSubmit = async (id) => {
        resumeService.deleteResume(id);
    }
    const updateSubmit = async (resume) => {
        resume = resume(title,link,status,devUsername);
        resumeService.updateResume(resume);
    }
    const getSubmit = async (id) => {
        resumeService.getResume(id)
    }
    const getDevSubmit = async (devUsername) => {
        resumeService.getResumeByDeveloper(devUsername);
    }

    return (
        <form>
             <div>
                <label>Title</label>
                <input type='text' placeholder='Enter Title' value={text}  onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Link</label>
                <input type='text' placeholder='Enter TLink' value={text}  onChange={(e) => setLink(e.target.value)} />
            </div>
            <div>
                <label>Status</label>
                <input type='text' placeholder='Enter Status' value={text}  onChange={(e) => setStatus(e.target.value)} />
            </div>
            <div>
                <label>Title</label>
                <input type='text' placeholder='Enter Developer User Name' value={text}  onChange={(e) => setDevUserName(e.target.value)} />
            </div>
        </form>
    )
}

export default ResumeListComponent
