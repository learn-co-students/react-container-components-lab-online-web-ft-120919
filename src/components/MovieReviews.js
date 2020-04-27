import React from 'react'

const MovieReviews = props => {
	
	if (props.reviews.length > 0) {
	return (
	<div className='review-list'>
		{props.reviews.map((review, index) => {
			return <p className='review' key={index}>{review.headline}</p>
		})}
	</div>
)}	else {
	return null
}}

export default MovieReviews