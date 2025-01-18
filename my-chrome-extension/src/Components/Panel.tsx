import  { useState } from 'react';
import '../index.css'; // Importing global CSS
import './Panel.css'; // Importing Panel-specific CSS
import { Input } from './ui/input'; // Adjusting the import path

const Panel = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/query?query=${encodeURIComponent(query)}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="panel">
      <Input
        className="input"
        type="text"
        placeholder="Enter your query here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" onClick={fetchData}>Search</button>
      {data && (
        <div className="result">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Panel;