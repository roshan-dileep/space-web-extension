import React from 'react';
import './App.css';

function App() {
  const handleButtonClick = () => {
    // Example action: Open a new tab with a specific URL
    chrome.tabs.create({ url: 'https://www.example.com' });
  };

  return (
    <div className="App">
      <h1>React Chrome Extension</h1>
      <p>Welcome to your Chrome extension powered by React!</p>
      <button onClick={handleButtonClick}>Open Example Website</button>
    </div>
  );
}

export default App;
