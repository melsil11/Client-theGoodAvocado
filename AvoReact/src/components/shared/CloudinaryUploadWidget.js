import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { Button } from 'react-bootstrap'
// import { Image } from 'cloudinary-react'

const CloudinaryUploadWidget = ({ handleImageChange, picture, setPicture, setImageSelected, imageSelected }) => {

    // const [imageSelected, setImageSelected] = useState('')
    // const [picture, setPicture] = useState('')
    // const [clear, setClear] = useState(false)

    const uploadImage = (files) => {
        // console.log(files[0])
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "gxc7sx3v")

        Axios.post("https://api.cloudinary.com/v1_1/dtszeeznm/image/upload", formData)
            .then((response) => {
                // console.log(response.data.url);
                setPicture(response.data.url)
                handleImageChange(response.data.url)
                // setClear(true)
                // console.log('this is public_id', public_id)
            })
            // .then(() =>{
            //     setPicture('')
            // })
            // return () => {
            //     // e.target.files = ''
            //     // console.log('post setPictureMount', setPicture)
            //     setPicture('')
            //     // // setImageSelected('')
            //     // // handleImageChange('')
            // }
    };

    // if(clear) {
    //     setPicture('')
    //     // setClear(!clear)
    // }

    useEffect(() => {
        return () => {
            setPicture('')
        }
    }, [])
    
    console.log('picture', picture)
    return (
        <div>
            <input
                type="file"
                onChange={(e) => { setImageSelected(e.target.files[0]) }}
            />
            <Button id="upload_widget" className="m-2 cloudinary-button btn-secondary" onClick={uploadImage}>
                Upload
            </Button>

            <img
                style={{ width: 200 }}
                cloudName="dtszeeznm"
                // publicId= { picture }
                src={picture}
            />
        </div>
    );

}

export default CloudinaryUploadWidget;
