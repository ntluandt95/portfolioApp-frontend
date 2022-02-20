import React from 'react'

const ResumeHeader = ({onAdd, showRes}) => {

 
  return (
   <header className= 'resheader'>
       <h1 >Resumes</h1>
       <button className='getbtn'  onClick={onAdd} >
           {showRes ? 'Close' : 'Add Resume' }</button>
   </header>
  )
}



export default ResumeHeader