import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE a restaurant - token require
export const restaurantCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/restaurants',
		data: {
			restaurant: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

// INDEX all restaurants - no token require
export const restaurantIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/restaurants'
	})
}

// SHOW a restaurant - no token require
export const restaurantShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/restaurants/' + id
	})
}

// UPDATE a restaurant - token require
export const restaurantUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/restaurants/' + id,
		data: {
			restaurant: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

// DELETE a restaurant - token require
export const restaurantDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/restaurants/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}