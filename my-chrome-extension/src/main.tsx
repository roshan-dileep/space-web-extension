
import ReactDOM from 'react-dom';
import Panel from './Components/Panel';
import './index.css'; // Ensure the global CSS is imported

const App = () => {
  return (
    <div>
      <Panel />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('content'));