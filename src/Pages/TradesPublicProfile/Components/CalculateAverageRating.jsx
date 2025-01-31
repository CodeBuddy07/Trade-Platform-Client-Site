import React from 'react';

const CalculateAverageRating = ({ reviews }) => {
    if (reviews?.length === 0) return <p className='text-xl'>No reviews available.</p>; // If there are no reviews, return a message

    const totalRating = reviews.reduce((sum, review) => sum + review?.rating, 0);
    const averageRating = totalRating / reviews.length;
    const roundedRating = parseFloat(averageRating?.toFixed(1)); // Round to one decimal place

    // Generate stars based on the average rating
    const fullStars = Math.floor(roundedRating); // Full stars (integer part)
    const halfStar = roundedRating % 1 >= 0.5 ? 1 : 0; // Half star condition
    const emptyStars = 5 - fullStars - halfStar; // Empty stars to make total 5

    // Create an array of stars
    const stars = [
        ...Array(fullStars).fill('★'), // Full stars
        ...Array(halfStar).fill('☆'), // Half star
        ...Array(emptyStars).fill('☆'), // Empty stars
    ];

    return (
        <div className='flex items-center gap-5'>
            <h2 className='text-3xl'>{roundedRating}</h2>
            <div style={{ fontSize: '24px', color: '#f39c12' }}>
                {stars.map((star, index) => (
                    <span key={index}>{star}</span>
                ))}
            </div>
        </div>
    );
};

export default CalculateAverageRating;
