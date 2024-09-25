'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Review {
  quote: string;
  name: string;
  rating: number;
}

// Mock API call for Reviews.io (replace with the actual API call in production)
const fetchReviews = async (): Promise<Review[]> => {
  try {
    const response = await fetch('/api/get-reviews'); // Use a proxy API instead of directly using the API key in the frontend.
    if (!response.ok) throw new Error('Failed to fetch reviews');
    const data = await response.json();
    return data.reviews.map((review: any) => ({
      quote: review.review,
      name: review.reviewer_name,
      rating: review.rating,
    }));
  } catch (error) {
    console.error('Failed to fetch reviews', error);
    return [];
  }
};

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchReviews();
      if (data.length === 0) setError(true);
      setReviews(data);
      setLoading(false);
    };
    getReviews();
  }, []);

  return (
    <motion.section
      className="py-16 bg-[#F4F4F4]" // Background adjusted to Off-White
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-[#2C2C2C] mb-8" // Text color adjusted to Dark Gray
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            <p className="text-lg text-gray-500">Loading reviews...</p>
          ) : error ? (
            <p className="text-lg text-red-500">Failed to load reviews. Please try again later.</p>
          ) : (
            reviews.map((review, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#FFFFFF] rounded-lg shadow-lg" // Background adjusted to White
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120, delay: index * 0.2 }}
              >
                <p className="text-[#6F6F6F] italic mb-4">&ldquo;{review.quote}&rdquo;</p> {/* Text color adjusted to Warm Gray */}
                <p className="text-[#B38E5D] font-semibold text-right">- {review.name}</p> {/* Name color adjusted to Gold */}
                <p className="text-yellow-500 text-sm">{'★'.repeat(review.rating)}</p> {/* Star rating */}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
