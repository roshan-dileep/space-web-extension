import { useState } from 'react';
import '../index.css'; // Importing global CSS
import './Panel.css'; // Importing Panel-specific CSS
import { Input } from './ui/input'; // Adjusting the import path

const Panel = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/query?query=${encodeURIComponent(query)}`);
      const result = await response.json();
      setResponse(result.response); // Set the response field
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-end pb-10">
      {response && (
        <div className="result mt-4 text-white w-full px-4">
          <pre className="whitespace-pre-wrap break-words">{response}</pre>
        </div>
      )}
      <div className="flex items-center w-full justify-center mb-4">
        <Input
          className="input w-7/10 md:w-96"
          type="text"
          placeholder="Enter your query here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button bg-blue-500 text-white px-4 py-2 rounded ml-2" onClick={fetchData}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Panel;