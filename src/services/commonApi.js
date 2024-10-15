import axios from "axios"



export const commonApi =async(httpreq , url , reqbody )=>{
    const reqconfig ={
        method : httpreq,
        url,
        data : reqbody,
        headers : {"Content-Type":"application/json"}
    }

    return await axios(reqconfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}