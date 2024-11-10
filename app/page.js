import Counter from '../components/Counter';
import GitHubLink from '../components/GitHubLink';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      <h1>Next.js Assignment</h1>
      <Counter incrementBy={1} bgColor="lightblue" />
      <Counter incrementBy={2} bgColor="lightgreen" />
      <GitHubLink />
      <SearchBar />
    </div>
  );
}