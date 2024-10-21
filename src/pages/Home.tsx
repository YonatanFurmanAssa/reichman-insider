import React from 'react';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleList from '../components/ArticleList';

const Home: React.FC = () => {
  return (
    <div>
      <FeaturedArticle />
      <ArticleList />
    </div>
  );
};

export default Home;