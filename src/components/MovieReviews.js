// Code MovieReviews Here
import React from 'react';

const Review = ({
  headline,
  byline,
  display_title,
  summary_short,
  mpaa_rating,
  date_updated
}) => {
    return (
   <div
      key={headline}
      className="review"
    >
      <header>
        <h2>{display_title}</h2>
        <h4 ><span>{mpaa_rating}</span><br />{headline.split(":")[1]}</h4>
    <span className="author"><small>{byline}, {date_updated}</small></span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews