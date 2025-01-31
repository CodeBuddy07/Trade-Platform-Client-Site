import { FaStar, FaSearch } from "react-icons/fa";

import { formatDistanceToNow } from "date-fns";
import CalculateAverageRating from './CalculateAverageRating';

const ReviewSection = ({reviews}) => {

    const starCounts = [5, 4, 3, 2, 1].map(star => ({
        star,
        count: reviews.filter(review => review.rating === star).length,
    }));



    return (
        <div className="w-full mt-6">
                <h3 className="text-2xl font-semibold mb-2">Reviews</h3>
                <div className="bg-gray-100 p-4">
                    <div className="text-4xl font-bold text-yellow-500">
                        <CalculateAverageRating reviews={reviews}></CalculateAverageRating>

                    </div>

                    {/* Rating Breakdown */}
                    <div className="w-full ml-4">
                        {starCounts.map(({ star, count }) => {
                            const percentage = (count / reviews.length) * 100 || 0;

                            return (
                                <div key={star} className="flex items-center">
                                    <p className="">{star} Stars</p>
                                    <div className="w-96 bg-gray-300 h-3 rounded-lg overflow-hidden ml-2">
                                        <div
                                            className="bg-yellow-400 h-full"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="ml-2 text-sm">({count})</span>
                                </div>
                            );
                        })}
                    </div>

                </div>
                {/* Search Bar */}
                <div className="mt-4 flex items-center border rounded-lg px-3 py-2">
                    <FaSearch className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search reviews..."
                        className="ml-2 w-full outline-none"
                    />
                </div>

                {/* Review Cards */}
                <div className="mt-6">
                    {reviews.map((review) => {
                        const relativeDate = formatDistanceToNow(new Date(review.date), { addSuffix: true });
                        return (
                            <div key={review.id} className="p-4 border-b">
                                <div className="flex justify-between">

                                    <div className="flex items-center">
                                        <img
                                            src={review.profilePic}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full border mr-4"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{review.name}</h4>

                                            <div className="text-yellow-400 text-lg">
                                                {"★".repeat(review.rating)}
                                            </div>

                                        </div>
                                    </div>
                                    <p> <span className="text-gray-500 text-xs">{relativeDate}</span></p>

                                </div>
                                <p className="mt-2 text-gray-700">{review.reviewText}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

    );
};

export default ReviewSection;