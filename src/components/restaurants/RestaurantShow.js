import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Button, Image, } from 'react-bootstrap'
import { restaurantShow, restaurantDelete } from '../../api/restaurant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faKeyboard, faShop } from '@fortawesome/free-solid-svg-icons'
import RestaurantUpdateModal from './RestaurantUpdateModal'
import NewReview from '../Reviews/NewReview'
import ShowReview from '../Reviews/ShowReview'
import FoodImages from '../shared/FoodImages'
import LoadingScreen from '../LoadingScreen'
import StarRating from '../shared/StarRating'
import RestaurantAmenity from './RestaurantAmenity'

// Declare FontAwesome icons for use
const restaurantOwner = <FontAwesomeIcon icon={faShop} style={{ color: '#5d52c7' }} bounce />
const address = <FontAwesomeIcon icon={faLocationDot} />
const telephone = <FontAwesomeIcon icon={faPhone} />
const website = <FontAwesomeIcon icon={faKeyboard} />

const RestaurantShow = ({ user, msgAlert }) => {
    const [restaurant, setRestaurant] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [averageRating, setAverageRating] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    // scroll to top on page load
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    useEffect(() => {
        restaurantShow(user, id)
            .then(res => {
                setRestaurant(res.data.restaurant)
                // Get the ratings from the restaurant's reviews
                let ratings = res.data.restaurant.reviews.map(review => review.rating)
                // Calculate the average rating for the restaurant, round to the nearest 0.5
                let calAvgRating = Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) / 0.5) * 0.5
                setAverageRating(calAvgRating)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Restaurant Failure' + error,
                    variant: 'danger'
                })
            })
    }, [updated])

    const handleDeleteRestaurant = () => {
        restaurantDelete(user, id)
            .then(() => {
                setDeleted(true)
                msgAlert({
                    heading: 'Success',
                    message: 'Deleting a Restaurant',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Deleting a Restaurant Fail: ' + error,
                    variant: 'danger'
                })
            })
    }

    let reviewCards
    if (restaurant) {
        if (restaurant.reviews.length > 0) {
            // map over the reviews
            // produce one ShowReview component for each of them
            reviewCards = restaurant.reviews.map(review => (
                <Container>
                    <ShowReview
                        key={review._id}
                        review={review}
                        restaurant={restaurant}
                        user={user}
                        msgAlert={msgAlert}
                        triggerRefresh={() => setUpdated(prev => !prev)}
                    />
                </Container>
            ))
        }
    }
    // Redirect to restaurant index page when restaurant is deleted
    if (deleted) navigate('/restaurants')

    if (!restaurant) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container fluid='md'>
                <Container className='show-image-container mb-3'>
                    <Image className='rounded-bottom show-image' src={FoodImages[`${restaurant.type}`]} alt={restaurant.type} />
                    <h1 className='display-1 show-image-header'>{restaurant.name}</h1>
                </Container>
                <Container className='text-center'>
                    <h1 className='border-bottom border-2 border-success mb-2'>{restaurant.type} Restaurant</h1>

                    <StarRating
                        value={averageRating}
                        style={{ fontSize: 18, color: 'yellow' }}
                    />

                    {
                        restaurant.otherTypes
                            ?
                            <h4>Other options available: {restaurant.otherTypes}</h4>
                            :
                            null
                    }
                    {
                        restaurant.isUserRestaurantOwner
                            ?
                            <h5>{restaurantOwner} You are the business owner!</h5>
                            :
                            null
                    }

                    <h4>{address} {restaurant.address}</h4>

                    <h4>{telephone} {restaurant.telephone}</h4>

                    {
                        restaurant.website
                            ?
                            <>
                                <h4>{website}
                                    <a href={restaurant.website} target='blank' style={{ color: '#ba7a5f', textDecoration: 'none' }}> {restaurant.name}</a>
                                </h4>
                            </>
                            :
                            <h4>{website} No Website for this restaurant yet</h4>
                    }


                </Container>

                <RestaurantAmenity restaurant={restaurant} />

                <Container className='text-center mb-5'>
                    {
                        restaurant.owner && user && restaurant.owner._id === user._id
                            ?
                            <>
                                <Button onClick={() => setEditModalShow(true)} className="m-2"
                                    variant="success"
                                >
                                    Edit Restaurant
                                </Button>
                                <Button onClick={() => handleDeleteRestaurant()}
                                    className="m-2"
                                    variant="danger"
                                >
                                    {restaurant.name} is Closed Permanently
                                </Button>
                            </>
                            :
                            null
                    }
                </Container>

                <RestaurantUpdateModal
                    user={user}
                    restaurant={restaurant}
                    show={editModalShow}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                    handleClose={() => setEditModalShow(false)}
                />
                {
                    user
                        ?
                        <Container style={{ width: '40rem' }}>
                            <NewReview
                                user={user}
                                restaurant={restaurant}
                                msgAlert={msgAlert}
                                triggerRefresh={() => setUpdated(prev => !prev)}
                            />
                        </Container>
                        :
                        <h5 className='text-center'><i>Please sign in if you would like to leave a review.</i></h5>
                }


                <Container>
                    <h3 className='my-5'>All of {restaurant.name}'s reviews:</h3>
                    {
                        restaurant.reviews.length > 0
                            ?
                            <>
                                {reviewCards}
                            </>
                            :
                            <>
                                <h5 className='text-center'>This restaurant does not have any reviews yet. Be the first to review!</h5>
                            </>
                    }

                </Container>
            </Container>
        </>
    )
}

export default RestaurantShow