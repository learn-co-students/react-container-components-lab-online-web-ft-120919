import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'DXGZJbDi16fi94GoKFL6XnSl6f6zKqVC';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=DXGZJbDi16fi94GoKFL6XnSl6f6zKqVC';

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends Component {

    constructor(){
        super();

        this.state = {
            reviews: []
            }
    }

    componentDidMount(){
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=DXGZJbDi16fi94GoKFL6XnSl6f6zKqVC')
        .then(res => res.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }


    render(){
        return( 
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}