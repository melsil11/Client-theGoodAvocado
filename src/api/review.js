import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE a review- token require
export const reviewCreate = (user, restaurantId, newReview) => {
	const ownerId = { owner: user._id }
	const review = {...newReview, ...ownerId}

	return axios({
		url: `${apiUrl}/reviews/${restaurantId}`,
		method: 'POST',
		data: { review: review }
	})
}

// INDEX reviews - no token
export const reviewIndex = (user) => {

	return axios({
		url: apiUrl + `/reviews`,
		method: 'GET',

	})
}

// UPDATE a review - token Require
export const reviewUpdate = (user, restaurantId, updatedReview) => {
	const ownerId = { owner: user._id }
	const review = {...updatedReview, ...ownerId}

	return axios({
		url: `${apiUrl}/reviews/${restaurantId}/${review.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { review: review }
	})
}

// DELETE review - token require
export const reviewDelete = (user, restaurantId, reviewId) => {
	return axios({
		url: `${apiUrl}/reviews/${restaurantId}/${reviewId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}