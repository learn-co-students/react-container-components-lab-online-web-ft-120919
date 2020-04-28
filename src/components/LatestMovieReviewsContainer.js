import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }//constructor

  componentDidMount() {
    fetch(URL).then( resp => resp.json() )
      .then( reviewsJSON => {
        //console.log("reviewsJSON: ", reviewsJSON)
        this.setState({reviews: reviewsJSON.results})
      })
  }//componentDidMount

  render() {
    // {console.log("State in LatestMovieReviewsContainer: ", this.state.reviews)}
    return(
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )//return 
  }//render
}//class

export default LatestMovieReviewsContainer;
