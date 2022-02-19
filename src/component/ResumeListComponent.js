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
    }
        async function getAll () {
           const url = 'https://ec2-34-224-38-22.compute-1.amazonaws.com:8081/Resume'
           const response = await fetch(url);
         const resumeList = await response.json().catch(error =>{
             if(error.response){
                 console.log(error.response.data);
             }
         })
           setResumes(resumeList);
           console.log(resumeList);
        // resumeService.getAllResumes().then(data =>{
        //     setResumes(data.data);
        // }).catch(error => {
        //     if(error.data){
        //         console.log(error.data.data)
        //     }
        // })
        }

        const tableData ={
            color: 'steelblue',
        }
      
        const table = {
          
            border: '2px solid black',
            width: '600px',
            height: '200px',
            margin: "auto"
        }
        const tableHead = {
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            borderBottom: '1px solid black',
            margin: 'auto',
            padding: "auto",
            backgroundColor: 'navy'

        }
        const tableRow = {
            borderBottom: '1px solid black',
            padding: "auto",
            color: 'steelblue'
        }

        
       

    const showResume = resumes.map(r =>
        <tr style={tableRow} key ={r.id}>
            <td>{r.title}</td>
            <td>{r.link}</td>
            <td>{r.status}</td>
        </tr>)
   

    return (
        <div >
              <button className='btn' onClick = {getAll}>Get Resumes</button>
        <table style={table}>
            <thead style={tableHead}>
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
      
        <button className='btn' onClick = {addResume}>Add Resume</button>
        </div>
    )
}


export default ResumeListComponent
