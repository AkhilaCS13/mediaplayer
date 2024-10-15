import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { Addcategoryapi, addvideotocategoryapi, deletecategoryapi, getcategoryapi } from '../services/allApi';
import { toast } from 'react-toastify';

function Category({videostatus}) {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("")
  const [allcategory, setallcategory] = useState([])
  const [Addcategorystatus, setaddcategorystatus] = useState({})
  const [deletecategory, setdeletecategory] = useState({})
  const [videocategorystatus , setvideocategorystatus]= useState({})

  console.log(category);

  const handleCancel = () => {
    setCategory("")
  }
  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);


  const handleAdd = async () => {
    if (category) {
      const reqbody = {
        category,      // name as same in the state
        allvideos: []
      }
      const result = await Addcategoryapi(reqbody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('category added successfully')
        handleClose()
        setaddcategorystatus(result.data)
      }
      else {
        toast.error('something went wrong')
        handleClose()
      }
    }
    else {
      toast.info('please add a category name')
    }

  }

  const getcategory = async () => {
    const result = await getcategoryapi()
    setallcategory(result.data);

  }
  console.log(allcategory);


  const handleDelete = async (id) => {
    const result = await deletecategoryapi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setdeletecategory(result.data)
    }

  }

  const ondrag = (e) => {
    e.preventDefault() //prevent the data lose

  }
  const videoDrop = async(e, categorydetails) => {
    console.log(categorydetails);
    const videodetails = JSON.parse(e.dataTransfer.getData("videodetails"))
    console.log(videodetails);

    if(categorydetails.allvideos.find((item)=>item.id==videodetails.id)){
      toast.error('video already present in the category')
    }
    else{
      categorydetails.allvideos.push(videodetails)
      console.log(categorydetails);
      const result =await addvideotocategoryapi(categorydetails.id , categorydetails)

      if (result.status >= 200 && result.status < 300){
        toast.success('video added')
        setvideocategorystatus(result.data)
      }
      else{
        toast.error('something went wrong')
      }

    }
  
    


  }

  const videoDrag=(e,video,category)=>{
    console.log(video);
    console.log(category);
    const datashare ={
      category,
      video
    }
    e.dataTransfer.setData("datashare",JSON.stringify(datashare))
    
  }

  useEffect(() => {
    getcategory()
  }, [Addcategorystatus, deletecategory,videocategorystatus,videostatus])


  return (
    <>
      <div>
        <h4>Category</h4>
        <button onClick={handleShow} className='btn btn-warning w-100 mt-4'>Add Category</button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='p-3 border border-secondary border-2 rounded '>
              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='category name' className='form-control' />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="warning" onClick={handleAdd}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>

      {allcategory?.length > 0 &&

        allcategory.map((item) => (
          <div className='border border-dark p-3 rounded mt-4' droppable onDragOver={(e) => ondrag(e)} onDrop={(e) => videoDrop(e, item)}>
            <div className='d-flex justify-content-between'>
              <p>{item?.category}</p>
              <Button onClick={() => handleDelete(item?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
            </div>
           {item?.allvideos?.length>0 &&
           item?.allvideos?.map((video)=>(
            <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
              <Videocard video={video} ispresent={true}/>
            </div>
           )) }
          </div>
        ))
      }
    </>
  )
}

export default Category 