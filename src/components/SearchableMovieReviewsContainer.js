import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
	constructor() {
		super()
		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		fetch(URL + '&query=' + this.state.search)
		.then(resp => resp.json())
		.then(data => this.setState({
			reviews: data.results
		}))
	}

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	render() {
		return (
			<div className='searchable-movie-reviews'>
				<form onSubmit={event => this.handleSubmit(event)}>
					<input type='text' onChange={event => this.handleChange(event)}/>
					<input type='submit' />
				</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

