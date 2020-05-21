// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(r => <div className="review">
          <h3>{r.display_title}</h3>
          <p>{r.byline}</p>
        </div>
      )}
    </div>
  )
}

export default MovieReviews