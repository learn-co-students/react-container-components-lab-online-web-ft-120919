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

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL + '&query=' + this.state.searchTerm)
      .then(resp => resp.json())
      .then(json => {
        this.setState({reviews: Object.values(json.results)})
      })
  }

  handleChange = (e) => {
    e.persist()
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews" >
        <form >
          <input type='text' name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm} />
          <input type='submit' onClick={this.handleSubmit}></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
