import React from 'react';
import ArticleList from '../components/ArticleList';

interface CategoryPageProps {
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-blue-800">{category} News</h1>
      <ArticleList category={category} />
    </div>
  );
};

export default CategoryPage;