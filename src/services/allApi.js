import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


//add all videos
export const Addvideosapi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqbody)       //serverUrl used bcoz maybe it will change when hosting
}
//get all videos
export const getVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/videos`)
}
//add video history
export const AddVideohistoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqbody)
}
//to get video history
export const getVideoHstoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/history`)
}

//path parameter
// api to delete a video from allvideos
export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}

//api to datlete video from history
export const deleteVideoHistoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`)
}

// api to add category
export const Addcategoryapi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqbody)
}

//api to get the category
export const getcategoryapi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`)
}

//api to delete category
export const deletecategoryapi = async(id)=>{
    return await commonApi('DELETE', `${serverUrl}/category/${id}`)
}

// api to add video details to a category
export const addvideotocategoryapi = async(id,reqbody)=>{
    return await commonApi('PUT', `${serverUrl}/category/${id}`,reqbody)
}