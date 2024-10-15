import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Add from '../component/Add'
import Category from '../component/Category'
import Allvideos from '../component/Allvideos'
/* import Allvideos from '../component/Allvideos' */


function Home() {
  const [addVideoStatus , setAddVideoStatus] = useState({})
  const [videostatus,setvideostatus]=useState({})

  return (
    <>
    <div className='d-flex p-md-5 p-3'>
      <Add setAddVideoStatus={setAddVideoStatus}/>
      <Link to={'/watchHistory'} className='ms-auto' style={{textDecoration:'none'}}><h4>Watch History <FontAwesomeIcon icon={faClockRotateLeft} className='ms-2'/></h4></Link>
    </div>

    <div className="container-fluid p-4">
      <div className="row">

        <div className="col-md-9">
              <Allvideos addVideoStatus={addVideoStatus} setvideostatus={setvideostatus}/>
        </div>

        <div className="col-md-3">
          <Category videostatus={videostatus}/> 
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Home


