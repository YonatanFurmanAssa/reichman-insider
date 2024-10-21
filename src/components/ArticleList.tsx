import React from 'react';
import ArticleCard from './ArticleCard';

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "5G Networks Revolutionize IoT Applications",
    category: "Telecommunications",
    image: "https://source.unsplash.com/random/800x600?telecommunications"
  },
  {
    id: 2,
    title: "Global Economic Outlook: Challenges and Opportunities",
    category: "Economy",
    image: "https://source.unsplash.com/random/800x600?economy"
  },
  {
    id: 3,
    title: "Startup Ecosystem Thrives in Tel Aviv",
    category: "Business",
    image: "https://source.unsplash.com/random/800x600?startup"
  },
  {
    id: 4,
    title: "Advancements in Quantum Computing",
    category: "Computer Science",
    image: "https://source.unsplash.com/random/800x600?quantum-computer"
  },
  {
    id: 5,
    title: "The Rise of Edge Computing in Telecom",
    category: "Telecommunications",
    image: "https://source.unsplash.com/random/800x600?edge-computing"
  },
  {
    id: 6,
    title: "Cryptocurrency's Impact on Traditional Banking",
    category: "Economy",
    image: "https://source.unsplash.com/random/800x600?cryptocurrency"
  }
];

interface ArticleListProps {
  category?: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ category }) => {
  const filteredArticles = category
    ? articles.filter(article => article.category.toLowerCase() === category.toLowerCase())
    : articles;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredArticles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;