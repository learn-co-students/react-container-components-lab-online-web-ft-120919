import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {

    state = {
        reviews: []
    }

    fetchFromNYTApi = () => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({ reviews: data.results.forEach (result => this.state.reviews.push(result.summary_short)) })
        // this.setState({ reviews: data.results.map( review => ({ review: review.summary_short  })) })
        // this.setState({ review: data })
      })

    }



    componentDidMount() {
        this.fetchFromNYTApi()
    }

    render() {
        return (
            <div 
            
            className='latest-movie-reviews'>
                hello
                {this.state.reviews.map((review, id) => <h1 key={id}>{review}</h1>)}
            </div>
        )
    }
    
}