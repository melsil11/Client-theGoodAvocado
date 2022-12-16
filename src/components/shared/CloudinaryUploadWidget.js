import React from "react";
import Axios from 'axios'
import { Button } from 'react-bootstrap'

// Shout out to John McCants for helping pull the image back from cloudinary for display on the website
const CloudinaryUploadWidget = ({ handleImageChange, picture, setPicture, setImageSelected, imageSelected }) => {

    // Sends the image to cloudinary for storage
    const uploadImage = (files) => {

        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "gxc7sx3v")

        // Requests cloudinary to send the image back for viewing on the website
        Axios.post("https://api.cloudinary.com/v1_1/dtszeeznm/image/upload", formData)
            .then((response) => {
                setPicture(response.data.url)
                handleImageChange(response.data.url)
            })
    };
    

    return (
        <div>
            <input
                type="file"
                onChange={(e) => { setImageSelected(e.target.files[0]) }}
            />
            <Button id="upload_widget" className="m-2 cloudinary-button btn-secondary" onClick={uploadImage}>
                Upload
            </Button>

            {/* displays a preview of the image */}
            <img
                style={{ width: 200 }}
                cloudName="dtszeeznm"
                src={picture}
                alt={""}
            />
        </div>
    );

}

export default CloudinaryUploadWidget;