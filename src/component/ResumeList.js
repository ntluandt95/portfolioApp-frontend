import Resume from "./Resume"


const ResumeList = ({resumes, onDelete}) => {

  return (
    <>
    {resumes.map((res) =>(
    <Resume key = {res.id} res={res} onDelete ={onDelete} />
    ))}
    </>
  )
}


export default ResumeList