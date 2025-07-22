import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaNewspaper } from 'react-icons/fa';

const News = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`)
      .then(res => setArticles(res.data.articles.slice(0, 15)))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaNewspaper className="text-blue-500 text-2xl" />
        Top BBC News
        </h2>
      <ul className="list-disc pl-5">
        {articles.map((a, i) => (
          <li key={i}>
            <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {a.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
