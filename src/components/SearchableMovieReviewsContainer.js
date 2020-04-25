import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const searchQuery = 'Hugh'
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchQuery}&`
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here : https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>


export default class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(this.state.search)
    }

    handleSubmit = (event) => {
        // console.log('here handle submit')
        event.preventDefault()
        this.fetchFromNYTApiSearch(this.state.search)
    }

    fetchFromNYTApiSearch = (searchQuery) => {
        // console.log(searchQuery)
        // console.log(URL)
        fetch(URL)
        .then(res => res.json())
        .then(data => {
        this.setState({
            reviews: data.results,
            searchTerm: searchQuery
        })     
      })
    }

    // componentDidMount() {
    //     this.fetchFromNYTApiSearch()
    // }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>Enter search term</label>
                <input
                type="text"
                id="search"
                name="search"
                onChange={this.handleChange}
                value={this.state.search}
                
                />
                <button type="submit">Search!</button>
            </form>
            hi
            <MovieReviews reviews={this.state.reviews}/>
            hi
        </div>
    }

}
