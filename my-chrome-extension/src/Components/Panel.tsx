const Panel = () => {

  function sendQueryData() {
    fetch('http://localhost:5000/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: 'SELECT * FROM users',
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
        width: '300px', // Adjust the width as needed
        height: '100%', // Full height
        backgroundColor: 'white', // Background color
        boxShadow: '0px 0px 5px #0000009e', // Optional shadow
      }}
    >
      <input style={{
        
        position: 'absolute',
        

        bottom: '50px',
        width: '100%',
        padding: '5px',
        border: '10px solid #0000009e',
        backgroundColor: 'white',

      }}/>  

      <button 
      
      style={{
        position: 'absolute',
        
        bottom: '200px',
        
        
        width: '100%',
        padding: '5px',
        border: '10px solid #0000009e',
        backgroundColor: 'white',
      }}
      />
    </div>
  );
};

export default Panel;