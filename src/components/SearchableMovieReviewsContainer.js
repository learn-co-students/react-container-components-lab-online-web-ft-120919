import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vB66qvVqV4EcOi1tLJnABiYzUaAKhfws';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''

  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  fetchMovies = (event) => {
    event.preventDefault()
    fetch(URL + "&query=" + this.state.searchTerm)
      .then(resp => resp.json())
      .then(data => {
        this.setState = ({
          reviews: data
        })
      })

  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.fetchMovies}>
          <label>Search</label>
          <input type="text" onChange={this.handleChange} value={this.state.searchWord} />
          <input type="submit" value="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer