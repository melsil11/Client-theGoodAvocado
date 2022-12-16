import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
const linkStyle = {
	color: 'Black',
	textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='restaurants' style={linkStyle}>
				All Restaurants
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='create' style={linkStyle}>
				Add a Restaurant
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='reviews' style={linkStyle}>
				My Reviews
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<SearchBar />
		</Nav.Item>
		<Nav.Item>
			<Link className='btn text-light mt-1' to='sign-out' style={{ backgroundColor: '#ba7a5f', borderColor: '#ba7a5f' }}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	
	<Container className='container-fluid d-flex justify-content-end'>
		<Nav.Item className='m-2'>
			<SearchBar />
		</Nav.Item>
		<Nav.Item className='mx-2'>
			<Link className='btn text-light btn-success mt-1' to='sign-up'>Sign Up</Link>
		</Nav.Item>
		<Nav.Item>
			<Link className='btn text-light mt-1' to='sign-in' style={{ backgroundColor: '#ba7a5f', borderColor: '#ba7a5f' }}>Sign In</Link>
		</Nav.Item>
		
	</Container>
	
)

const Header = ({ user }) => (
	<Navbar variant='dark' expand='md'>
		
			<Navbar.Brand className='m-2'>
				<Link to='/' style={linkStyle}>
					<img
						src="https://i.imgur.com/ut67YmM.png"
						width="125"
						height="auto"
						alt={"The word 'good' with perfectly ripened avocados instead of 'o's"}
					/>
				</Link>
			</Navbar.Brand>
		
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto container-fluid d-flex justify-content-between'>
				{user && (
					<span className='m-2'><i>Welcome, {user.email}</i></span>
				)}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
