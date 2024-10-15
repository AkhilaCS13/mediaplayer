import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteVideoHistoryApi, getVideoHstoryApi } from '../services/allApi';

function Watchhistory() {

  const [allHisvideo, setallHisvideo] = useState([])
  const [deleteStatus ,setDeleteStatus] = useState(false)

  const getVideoHistory = async () => {
    const result = await getVideoHstoryApi()
    setallHisvideo(result.data);

  }

  console.log(allHisvideo);

  const handleDelete = async(id)=>{
    const result =await deleteVideoHistoryApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteStatus(true)
    }
    
  }

  useEffect(() => {
    getVideoHistory()
    setDeleteStatus(false)
  }, [deleteStatus])


  return (
    <>

      <div className='p-4'>
        <div className='d-flex mt-5'>
          <h4 >  Watch History</h4>
          <Link to={'/home'} style={{ textDecoration: 'none' }} className='ms-auto'><h5> <FontAwesomeIcon icon={faHouse} className='me-2' /><span className='d-none d-md-inline'>Back Home</span></h5></Link>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-10 p-3 table-responsive'>
              {allHisvideo.length > 0 ? <table className='table mt-5'>
                <thead>
                  <tr>
                    <th>sl.no</th>
                    <th>Caption</th>
                    <th>Url</th>
                    <th>TimeStamp</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allHisvideo?.map((item,index) => (

                    <tr>
                      <td>{index+1}</td>
                      <td>{item?.Caption}</td>
                      <td>{item?.Url}</td>
                      <td>{item?.time}</td>
                      <td><button onClick={()=>handleDelete(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
                :
                <h4 className='text-warning text-center'>No Watch History</h4>}
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Watchhistory



