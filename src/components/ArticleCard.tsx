import React from 'react';

interface ArticleCardProps {
  title: string;
  category: string;
  image: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, category, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-blue-600 text-sm font-semibold">{category.toUpperCase()}</span>
        <h3 className="text-xl font-bold mt-2 mb-2 text-gray-800">{title}</h3>
        <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Read More</a>
      </div>
    </div>
  );
};

export default ArticleCard;