// Code MovieReviews Here
import React from 'react';


const Review = ({headline, byline, link, summary_short, display_title}) => {

    return(
        <div key={headline} className="review">
            {headline}
            {display_title}
            {byline}
        
        </div>
        
    )
}

const MovieReviews = ({reviews}) => <div className='review-list'>{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews