import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import RestaurantForm from '../shared/RestaurantForm'
import { restaurantUpdate } from '../../api/restaurant'

const RestaurantUpdateModal = (props) => {
    const {
        user, show, handleClose,
        msgAlert, triggerRefresh
    } = props

    const [restaurant, setRestaurant] = useState(props.restaurant)

    const handleChange = event => {
        setRestaurant(prevRestaurant => {
            const updatedName = event.target.name
            // check input type
            // if input type = checkbox, assign event.target.checked (boolean)
            let updatedValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value

            const updatedRestaurant = { [updatedName]: updatedValue }
            return { ...prevRestaurant, ...updatedRestaurant }
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        restaurantUpdate(restaurant, user, props.restaurant._id)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Updated Restaurant',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(error => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Update Restaurant Failure' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal size='lg' show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <RestaurantForm
                    restaurant={restaurant}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Restaurant"
                />
            </Modal.Body>
        </Modal>
    )
}

export default RestaurantUpdateModal