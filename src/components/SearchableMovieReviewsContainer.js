import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'DXGZJbDi16fi94GoKFL6XnSl6f6zKqVC';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

const BaseURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=DXGZJbDi16fi94GoKFL6XnSl6f6zKqVC&query=`

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch(BaseURL+`${this.state.searchTerm}`)
        .then(res => res.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }



    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        id="search-input"
                        onChange={this.handleChange}
                        />
                        <button type="submit">Submit</button>
                </form>


                {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}