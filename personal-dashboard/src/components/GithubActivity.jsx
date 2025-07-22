import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa';

const GithubActivity = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const username = import.meta.env.VITE_GITHUB_USERNAME;

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then((res) => {
        setRepos(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.error('GitHub fetch error:', err);
        setError('Could not fetch GitHub repos');
      });
  }, []);

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold">
            <FaGithub className="text-black dark:text-white text-2xl" />
            GitHub Activity
            </h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!repos.length) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold">
            <FaGithub className="text-black dark:text-white text-2xl" />
            GitHub Activity
            </h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaGithub className="text-black dark:text-white text-2xl" />
        Recent Repositories
        </h2>
      <ul className="list-disc pl-5 space-y-1">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {repo.name}
            </a>{' '}
            — ⭐ {repo.stargazers_count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubActivity;