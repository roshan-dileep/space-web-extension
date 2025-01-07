const Panel = () => {
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
        // make it a little higher than the bottom

        bottom: '50px',
        width: '100%',
        padding: '5px',
        border: '10px solid #0000009e',
        backgroundColor: 'white',

      }}/>  
    </div>
  );
};

export default Panel;