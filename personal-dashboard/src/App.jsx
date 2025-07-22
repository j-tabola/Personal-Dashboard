import Weather from './components/Weather';
import News from './components/News';
import GithubActivity from './components/GithubActivity';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-3xl font-bold mb-6">Personal Info Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-3 min-h-[600px]">
        <Weather />
        <News />
        <GithubActivity />
      </div>
    </div>
  );
}

export default App;
