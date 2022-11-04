import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ReviewForm from '../shared/ReviewForm'
import { reviewUpdate } from '../../api/review'
import messages from '../shared/AutoDismissAlert/messages'


const EditReview = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh, restaurant, 
        handleImageChange, picture, setPicture, 
        setImageSelected, imageSelected
    } = props

    const [review, setReview] = useState(props.review)

    const handleChange = (e) => {
        setReview(prevReview => {
            const name = e.target.name
            let value = e.target.value

            const updatedReview = { [name]: value }

            return {
                ...prevReview, ...updatedReview
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        reviewUpdate(user, restaurant._id, review)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.updateReviewSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: messages.updateReviewFailure + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
                <ReviewForm 
                    imageSelected={imageSelected}
                    setImageSelected={setImageSelected}
                    picture={picture}
                    setPicture={setPicture}
                    review={review}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    // triggerRefresh={triggerRefresh}
                    handleImageChange={handleImageChange}
                    heading="Edit this review!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditReview