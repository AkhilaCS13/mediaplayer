import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addvideotocategoryapi, getVideoApi } from '../services/allApi'
import { toast } from 'react-toastify'

function Allvideos({addVideoStatus,setvideostatus}) {

    const [Allvideos , setAllVideos] = useState([])
    const [deleteVideoStatus , setDeletevideoStatus] =useState({})

    // side Effect
    const getAllVideos = async()=>{
        const result = await getVideoApi()
        // console.log(result);
        setAllVideos(result.data)    
    }
    console.log(Allvideos);

    const ondrop=(e)=>{
        e.preventDefault()
    }

    const videoDrop=async(e)=>{
        const {category, video}= JSON.parse(e.dataTransfer.getData("datashare"))
        console.log(category,video);

        const newArray = category.allvideos.filter((item)=>item.id!=video.id)
        const newcategory ={
            category:category.category,
            allvideos:newArray,
            id:category.id
        }
        const result = await addvideotocategoryapi(category.id,newcategory)
        console.log(result);
        if(result.status>=200 && result.status<300){
            setvideostatus(result.data)
        }
    }

    
    useEffect(()=>{
        getAllVideos()
    },[addVideoStatus,deleteVideoStatus])  // [] - useEffect is called when the component render to the browser

    return (
        <>
          <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>videoDrop(e)}>
                <h4>All Videos</h4>
               {Allvideos.length>0?
                <div className="container">
                    <div className="row">
                        { Allvideos?.map((item)=>(  //() used bcoz content is html
                            <div className="col-md-3 p-2">
                            <Videocard video={item} setDeletevideoStatus={setDeletevideoStatus}/>
                        </div>
                        ))
                            }
    
                    </div>
                </div>
    
                :
    
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/3299/3299536.png" alt="no image" className='w-100' />
    
                            <h5 className='text-warning text-center'>No Video Added Yet</h5>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>}
          </div>
        </>
    )
}

export default Allvideos


