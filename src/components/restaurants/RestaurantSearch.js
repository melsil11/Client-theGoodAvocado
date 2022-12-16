import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from "axios"
import FoodImages from "../shared/FoodImages"
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'


const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const RestaurantSearch = ({ msgAlert }) => {
    const { searchInput } = useParams()
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        axios.get(`${apiUrl}` + '/restaurants')
            .then((response) => {
                // filter restaurants based on search input
                // allow search on these fields - name, type, and address of restaurant
                const filteredRestaurants = response.data.restaurants.filter(restaurant => {
                    return restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
                        || restaurant.type.toLowerCase().includes(searchInput.toLowerCase())
                        || restaurant.address.toLowerCase().includes(searchInput.toLowerCase())
                })
                setRestaurants(filteredRestaurants)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Search Failure: ' + error,
                    variant: 'danger'
                })
            })
    }, [searchInput])

    // Display the restaurants that match the search term
    const restaurantCards = restaurants.map(restaurant => (
        <Card key={restaurant.id} style={{ width: '30rem', margin: 8, backgroundColor: '#f2f6ec' }}>
            <Card.Img variant="top" src={FoodImages[`${restaurant.type}`]} style={{ height: '300px' }} alt={restaurant.type} />
            <Card.Header><b>{restaurant.name}</b> / {restaurant.type}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link style={{ color: '#ba7a5f', textDecoration: 'none', fontWeight: 'bold' }} to={`/restaurants/${restaurant._id}`}>View {restaurant.name} </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    // Display this if there is no restaurant that match the search
    if (restaurants.length === 0) {
        return (
            <div className='text-center mt-5 mb-5'>
                <h4>Sorry! Your search did not return any matching results.</h4>
                <h6>Try searching for something else.</h6>
            </div>
        )
    }

    return (
        <>
            <h2 className='text-center mt-3'>Restaurant Search Results</h2>
            <div className='container-md text-center' style={cardContainerLayout}>
                {restaurantCards}
            </div>
        </>
    )
}

export default RestaurantSearch
