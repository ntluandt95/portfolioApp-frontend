import  {useState} from 'react';
import { Resume } from '../model/Resume';
import resumeService from '../services/resume.service';
import authHeader from '../services/auth-header';
import ResumeHeader from './ResumeHeader';
import ResumeList from './ResumeList';
import ResumeListForm from './ResumeListForm';

 
const ResumeListComponent = (prop) => {
    const [showResume, setShowResume] = useState(false)
    const [resumes, setResumes] = useState([
       
    ]);

           

       async function addResume (res){
           // const id = Math.floor(Math.random() * 50) +1;
           const request = {
            method: 'Post',
            headers: authHeader(),
            body: JSON.stringify({title: prop.resTitle, link: prop.link })
             };
            const response = await fetch('http://ec2-34-224-38-22.compute-1.amazonaws.com:8081/Resumes', request);
            const data = await response.json();
             const id = (data.id);
            const newResume = {id, ...res};
            setResumes([...resumes, newResume]);
     }

            

        

        async function deleteById (id) {
            fetch('http://ec2-34-224-38-22.compute-1.amazonaws.com:8081/Resumes/' + id , {method: 'DELETE'})
            .then(async res => {
                const data = await res.json();

                if(!res.ok){
                    const err = (data && data.message || res.status);
                    return Promise.reject(err);
                }

            }).catch(error =>{
                console.log(error);
            })
        }


    const deleteResume = (id) => {
       setResumes(resumes.filter((res) => res.id !== id))
       deleteById(id);
    }
    
       
     async function getAll () {
         try{
            const url = 'http://ec2-34-224-38-22.compute-1.amazonaws.com:8081/Resumes'
            const response = await fetch(url);
          const resumeList = await response.json()
          setResumes(resumeList);
           console.log(resumeList);
         }catch(err) {
             console.log(err);

         }
    }     
    return (
        <div className= 'resumecontainer page' >
              
      <ResumeHeader onAdd={() => setShowResume
           (!showResume) }  showRes = {showResume}/>
       {showResume && <ResumeListForm onAdd={addResume} />}
      {resumes.length > 0 ? (<ResumeList resumes ={resumes} onDelete ={deleteResume} />) : ('No Resumes to show')} 
      <button className='getbtn' onClick = {getAll}>Get Resumes</button> 
        </div>
    )
    
}


export default ResumeListComponent
