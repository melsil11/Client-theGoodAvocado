import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faBicycle, faClipboardList, faBurger, faBowlFood, faCreditCard, faSquareParking, faWifi, faMaskFace, faWineGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

// Declare FontAwesome icons for use
const delivery = <FontAwesomeIcon icon={faBicycle} style={{ color: '#308534' }} />
const reservations = <FontAwesomeIcon icon={faClipboardList} style={{ color: '#308534' }} />
const takeout = <FontAwesomeIcon icon={faBurger} style={{ color: '#308534' }} />
const catering = <FontAwesomeIcon icon={faBowlFood} style={{ color: '#308534' }} />
const credit = <FontAwesomeIcon icon={faCreditCard} style={{ color: '#308534' }} />
const parking = <FontAwesomeIcon icon={faSquareParking} style={{ color: '#308534' }} />
const wifi = <FontAwesomeIcon icon={faWifi} style={{ color: '#308534' }} />
const mask = <FontAwesomeIcon icon={faMaskFace} style={{ color: '#308534' }} />
const alcohol = <FontAwesomeIcon icon={faWineGlass} style={{ color: '#308534' }} />
const xMark = <FontAwesomeIcon icon={faXmark} style={{ color: '#ba4e47' }} />
const vegan = <FontAwesomeIcon icon={faCarrot} style={{ color: '#308534' }} />


const RestaurantAmenity = ({ restaurant }) => {

    return (
        <Container className='d-flex'>
            <Container className='d-flex justify-content-end'>
                <ul>
                    <li>{restaurant.delivery ? delivery : xMark} Offers delivery </li>
                    <li>{restaurant.reservations ? reservations : xMark} Takes reservations</li>
                    <li>{restaurant.takeout ? takeout : xMark} Offers takeout</li>
                    <li>{restaurant.catering ? catering : xMark} Offers catering</li>
                    <li>{restaurant.vegan ? vegan : xMark} Vegan friendly</li>
                </ul>
            </Container>
            <Container className='d-flex justify-content-start'>
                <ul>
                    <li>{restaurant.acceptsCreditCard ? credit : xMark} Accepts credit cards</li>
                    <li>{restaurant.parking ? parking : xMark} Free parking</li>
                    <li>{restaurant.wifi ? wifi : xMark} Free Wi-fi</li>
                    <li>{restaurant.masksRequired ? mask : xMark} Requires masks</li>
                    <li>{restaurant.alcohol ? alcohol : xMark} Offers alcohol</li>
                </ul>
            </Container>
        </Container>
    )

}

export default RestaurantAmenity