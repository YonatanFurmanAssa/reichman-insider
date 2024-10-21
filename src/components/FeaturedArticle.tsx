import React from 'react';

const FeaturedArticle: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 transition-transform duration-300 hover:scale-105">
      <img
        src="https://source.unsplash.com/random/1200x600?university"
        alt="Featured Article"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <span className="text-blue-600 text-sm font-semibold">FEATURED</span>
        <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">Reichman University Launches Innovative AI Research Center</h2>
        <p className="text-gray-600 mb-4">In a groundbreaking move, Reichman University has established a state-of-the-art AI research center, positioning itself at the forefront of artificial intelligence innovation and education...</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">Read More</a>
      </div>
    </div>
  );
};

export default FeaturedArticle;