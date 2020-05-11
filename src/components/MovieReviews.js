// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => (
  <div className="review-list">
    {props.reviews.map(review => {
     return  <div className="review"> Movie: {review.display_title}, MPAA:{review.mpaa_rating}, Critics Pick: {review.critics_pick}</div>
    })}
  </div>
)

export default MovieReviews

