import  { useState } from 'react';

const Panel = () => {
  const [query, setQuery] = useState('');

  function sendQueryData() {
    fetch('http://localhost:8080/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div
      style={{
        width: '300px', 
        height: '100%', 
        backgroundColor: 'black', 
        boxShadow: '0px 0px 5px #0000009e', 
        position: 'relative',
      }}
    >
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          position: 'absolute',
          bottom: '50px',
          width: '100%',
          padding: '5px',
          border: '1px solid #0000009e',
          backgroundColor: 'black',
          color: 'white',
        }}
      />  

      <button 
        onClick={sendQueryData}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Go
      </button>
    </div>
  );
};

export default Panel;