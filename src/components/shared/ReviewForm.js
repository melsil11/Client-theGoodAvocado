import React from 'react'
import { Form, Container, Button, Col } from 'react-bootstrap'
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";


const ReviewForm = (props) => {
    const { review, handleChange, handleSubmit, heading, handleImageChange, picture, setPicture, imageSelected, setImageSelected } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Comment:</Form.Label>
                <Form.Control
                    placeholder="Add comments about the restaurant, the food, and your overall experience"
                    name="comment"
                    id="comment"
                    value={review.comment}
                    onChange={handleChange}
                    as="textarea"
                    rows={3}
                />
                <Form.Label className='mt-2'>Rating:</Form.Label>
                <Col sm={4}>
                    <Form.Select
                        aria-label="rating"
                        name="rating"
                        value={review.rating}
                        onChange={handleChange}
                    >
                        <option>Select an option</option>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Great</option>
                        <option value="3">3 - Average</option>
                        <option value="2">2 - Bad</option>
                        <option value="1">1 - Terrible</option>
                    </Form.Select>
                </Col>
                <hr class="bg-success border-2 border-top border-success" />
                <>
                    <Form.Label>Upload an Image:</Form.Label>
                    <CloudinaryUploadWidget
                        handleImageChange={handleImageChange}
                        picture={picture}
                        setPicture={setPicture}
                        imageSelected={imageSelected}
                        setImageSelected={setImageSelected}
                    />
                </>
                <hr class="bg-success border-2 border-top border-success" />
                <Button variant='success' type="submit">Submit</Button>
            </Form>
        </Container>
    )
}


export default ReviewForm
