import  {useState} from 'react';
import { Resume } from '../model/Resume';
import resumeService from '../services/resume.service';
import ResumeHeader from './ResumeHeader';
import ResumeList from './ResumeList';
import ResumeListForm from './ResumeListForm';

 
const ResumeListComponent = () => {
    const [showResume, setShowResume] = useState(false)
    const [resumes, setResumes] = useState([
        ////Testing data
        // {
        //     id:  1,
        //     title: "test",
        //     link: "test"
        // },
        // {
        //     id: 2,
        //     title: "test",
        //     link: "test"
        // },
        // {
        //     id: 3,
        //     title: "test",
        //     link: "test"
        // }
    ]);


        const addResume = (res)=> {
            const id = Math.floor(Math.random() * 50) +1;
            const newResume = {id, ...res};
            setResumes([...resumes, newResume]);

        }


    const deleteResume = (id) => {
       setResumes(resumes.filter((res) => res.id !== id))
    }
    
       
     async function getAll () {
         try{
            const url = 'https://ec2-34-224-38-22.compute-1.amazonaws.com:8081/Resumes'
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
