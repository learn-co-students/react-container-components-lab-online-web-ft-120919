import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(reviewData => this.setState({
                reviews: reviewData.results
            }))
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm}></input>
                    <button type="submit">Submit</button>    
                </form>
                {this.state.reviews.length > 0 ? <MovieReviews reviews={this.state.reviews} /> : "Nothing Searched Yet"}        
            </div>
        )
    }
}
