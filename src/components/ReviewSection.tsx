import React, { useState, useEffect } from 'react';
import { Star, Phone } from 'lucide-react';
import { collection, addDoc, orderBy, query, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: any;
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submitMessage, setSubmitMessage] = useState('');

  // Load reviews from Firebase on component mount and listen for real-time updates
  useEffect(() => {
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, orderBy('createdAt', 'desc'));
    
    // Set up real-time listener
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewsData: Review[] = [];
      querySnapshot.forEach((doc) => {
        reviewsData.push({
          id: doc.id,
          ...doc.data()
        } as Review);
      });
      setReviews(reviewsData);
      setIsLoading(false);
    }, (error) => {
      console.error('Error fetching reviews:', error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.comment.trim() || formData.rating === 0) {
      setSubmitMessage('Please fill in all fields and select a rating.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Add review to Firebase
      await addDoc(collection(db, 'reviews'), {
        name: formData.name.trim(),
        rating: formData.rating,
        comment: formData.comment.trim(),
        createdAt: serverTimestamp()
      });

      // Reset form
      setFormData({ name: '', rating: 0, comment: '' });
      setSubmitMessage('Thank you for your review! It has been submitted successfully.');
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitMessage('Sorry, there was an error submitting your review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTimeAgo = (timestamp: any) => {
    if (!timestamp) return 'Recently';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  if (isLoading) {
    return (
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Star className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500 mr-3 sm:mr-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Customer Reviews</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Share your experience with our mobile auto repair service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Review Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Leave a Review</h3>
            
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg text-center font-medium ${
                submitMessage.includes('Thank you') 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Rate Your Experience
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      className={`transition-colors duration-200 focus:outline-none ${
                        star <= formData.rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                      }`}
                    >
                      <Star className="h-8 w-8 fill-current" />
                    </button>
                  ))}
                  <span className="ml-3 text-gray-600 font-medium">
                    {formData.rating > 0 ? `${formData.rating} star${formData.rating > 1 ? 's' : ''}` : 'Click to rate'}
                  </span>
                </div>
              </div>

              {/* Comment Section */}
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>

          {/* Reviews Display */}
          {reviews.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                What Our Customers Say ({reviews.length} review{reviews.length !== 1 ? 's' : ''})
              </h3>
              
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex items-center mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-5 w-5 ${
                              star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{formatTimeAgo(review.createdAt)}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          )}

          {reviews.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No reviews yet</h3>
              <p className="text-gray-600">Be the first to share your experience!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}