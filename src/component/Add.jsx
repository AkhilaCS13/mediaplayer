import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Addvideosapi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddVideoStatus}) {
  const [VideoDetails,setVideoDetails] = useState({
    caption :"",
    imageUrl :"",
    embededLink :""
})


  
  const [show, setShow] = useState(false);
  console.log(VideoDetails);
  const handleClose = () => {setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  // const setEmbeded =(e)=>{
  //     const link = e.target.value
     
      
  // }


  // https://www.youtube.com/watch?v=nFgsBxw-zWQ
  // https://youtu.be/nFgsBxw-zWQ?si=rIPi0q8t9bPjAVla

  // https://www.youtube.com/embed/nFgsBxw-zWQ


  //<iframe width="100%" height="514" src="https://www.youtube.com/embed/nFgsBxw-zWQ" title="Aayi Nai -Stree 2 | Shraddha Kapoor | Rajkummar Rao | Sachin-Jigar |Pawan Singh,Simran,Divya,Amitabh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


  const handleCancel = () =>{
    setVideoDetails({
      caption:"",
      imageUrl:"",
      embededLink:""
    })
  }

  const handleAdd =async()=>{
   const {caption , imageUrl , embededLink} = VideoDetails

   if(!caption || !imageUrl || !embededLink){
    toast.info('Please Fill the  form Completely')
   }
   else{
    if(VideoDetails.embededLink.startsWith('https://youtu.be/')){
      const embedL = `https://www.youtube.com/embed/${VideoDetails.embededLink.slice(17,28)}`
      // setVideoDetails({...VideoDetails , embededLink: embedL})
 
      const result = await Addvideosapi({...VideoDetails , embededLink: embedL})
      console.log(result);
      
      if(result.status>=200 && result.status<300){
        toast.success('Video uploaded successfully')
        handleClose()
        setAddVideoStatus(result.data)
      }
      else{
        toast.error('Something Went Wrong')
        handleClose()
      }
      
    }else{
      const embedL =`https://www.youtube.com/embed/${VideoDetails.embededLink.slice(-11)}`
      // setVideoDetails({...VideoDetails , embededLink:embedL})

      const result = await Addvideosapi({...VideoDetails , embededLink: embedL})
      console.log(result);

      if(result.status>=200 && result.status<300){
        toast.success('Video uploaded successfully')
        handleClose()
        setAddVideoStatus(result.data)

      }
      else{
        toast.error('Something Went Wrong')
        handleClose()
      }

    }
   }


  } 


  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Videos</h5>
        <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5'/></button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2'/>upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          <div className='border border-secondary rounded  p-3'>
            <input  type="text" value={VideoDetails.caption} onChange={(e)=>setVideoDetails({...VideoDetails , caption:e.target.value})} className='form-control' placeholder='Video Caption' /><br />
            <input type="text" value={VideoDetails.imageUrl} onChange={(e)=>setVideoDetails({...VideoDetails , imageUrl:e.target.value})} className='form-control' placeholder='Video Image' /><br />
            <input type="text" value={VideoDetails.embededLink}  onChange={(e)=>setVideoDetails({...VideoDetails , embededLink:e.target.value})}  className='form-control' placeholder='Video URL' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme="colored" />

    </>
  )
}

export default Add


