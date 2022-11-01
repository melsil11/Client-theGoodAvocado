import React, { useState } from 'react' 
import { Card, Button } from 'react-bootstrap'
import { reviewDelete } from '../../api/review'
import EditReview from '../Reviews/EditReview'

// import LoadingScreen from '../LoadingScreen'

const ShowReview = (props) => {
    const {review, restaurant, user, msgAlert, triggerRefresh, handleChange} = props
    // console.log('this is the props, props')

    const [editModalShow, setEditModalShow] = useState(false)


    const handleDeleteReview = () => {
        reviewDelete(user, restaurant._id, review._id)
        .then (() => {console.log('user', user)
        console.log('restaurant', restaurant)
        console.log('review', review)
    })
        .then(() => {
            msgAlert({
                heading: 'Success: Review Deleted',
                message: "We'll never speak of it again",
                variant: 'success'
            })  
        })
        .then(() => triggerRefresh())
        .catch((error) => {
            msgAlert({
                heading: 'Oops',
                message: 'Delete Review Fail: ' + error,
                variant: 'danger'
            })
        })
    }

    return (

        <>
            <Card className="m-2">
                    <Card.Header>{user.email} said:</Card.Header>
                    <Card.Body>
                        <small>Comments: {review.comment}</small><br/>
                        <small>Rating: {review.rating}</small><br/>

                        <Button
                            className='m-2'
                            variant='warning'
                            onClick={() => setEditModalShow}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="danger"
                            handleChange = {handleChange}
                            onClick={() => handleDeleteReview()}
                        >
                            Delete
                        </Button>

                    </Card.Body>
            </Card>
            <EditReview 
                user={user}
                restaurant={restaurant}
                review={review}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
            />
        </>

    )
}

export default ShowReview

