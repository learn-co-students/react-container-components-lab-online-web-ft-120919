import React from 'react'

const MovieReviews = (props) => {

    let arr = props.moviesReviews.map( movieReview =>  <li> {movieReview} </li>)
    
    return (
      <div className='review-list'>
          <p className="review">
              {arr}
          </p>
          
      </div>
    )
  }

  export default MovieReviews
