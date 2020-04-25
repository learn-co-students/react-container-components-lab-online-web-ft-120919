import React from 'react'

const MovieReviews = (props) => {
    // console.log(props)
    // let arr = props.moviesReviews.map( movieReview =>  <li> {movieReview} </li>)
    // console.log(props.reviews)
    let arr = props.reviews.map( movieReview => <p className="review">  <li> {movieReview.summary_short} </li></p>)

    return (
      <div className='review-list'>
          {arr}
      </div>
    )
  }

  export default MovieReviews
