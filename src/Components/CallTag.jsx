import React from 'react'
import '../Components/CallTag.css'

const CallTag = () => {
  return (
  <div className='call-tag'>
    <div className='call-tag-mes'>
      <h1>Would you like  to start a project with us? </h1>
      <p> Let’s bring your ideas to life! Whether you're launching a new brand or scaling an existing one,
         Al-Ameen Spark is ready to partner with you. Reach out today and let’s build something impactful together.</p>
    </div> 
    <button className='submit-btn'> Start Now!</button>
  </div>
  )
}

export default CallTag
