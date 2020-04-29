// Code MovieReviews Here
import React from 'react'

const Review = ({
    display_title,
    headline,
    byline,
    summary_short,
    publication_date,
    link
}) => {
    return (
        <div key={display_title} className="review">
            <h3>Title: {display_title}</h3>
            <h3>Headline: {headline}</h3>
            <h3>Byline: {byline}</h3>
            <h4>Summary: {summary_short}</h4>
            <h5>Publication Date: {publication_date}</h5>
            <h5> <a href={link.url}> {link.suggested_link_text}</a> </h5>
            <h3>----------</h3>
        </div>
    )
}

export default function MovieReviews({reviews}) {
    
    return (
        <div className="review-list">
            {reviews.map(Review)}
        </div>
    )
}
