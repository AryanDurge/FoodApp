import React, { useState } from 'react'

const Register = () => {

  const[image,setImage] = useState({})
  const [uploading,setUploading] = useState(false)
  const handleImage = async(e)=>{
    const file = e.target.files[0]
    let formData = new FormData()
    formData.append('image',file)
    setUploading(true)
    try{
        const {data} = await axios.post('http://localhost:8000/api/v1/all/upload-image')
        setUploading(false)
        setImage({
            url:data.url,
            public_id:data.public_id
        })

    } catch(err){
        console.log("error"+err)
    }
  } 

  return (
    <div>Register</div>
  )
}

export default Register