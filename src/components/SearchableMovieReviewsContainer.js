import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const POSTFIX = `&api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }//constructor

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }//handleChange

  handleSubmit(event) {
    event.preventDefault();
    this.searchDatabase(this.state.searchTerm)
  }//handleSubmit

  searchDatabase(q) {
    fetch(URL + `query=${q}` + POSTFIX).then( resp => resp.json() )
      .then( reviewsJSON => {
        this.setState({reviews: reviewsJSON.results});
      })
  }//searchDatabase

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <label>Enter search term: </label>
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
            <input type="submit" value='Search Reviews'></input>
          </form>
          {/* {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>} */}
          <h2>Movie Reviews By Search:</h2>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    )//return
  }//render
}//class

export default SearchableMovieReviewsContainer;
