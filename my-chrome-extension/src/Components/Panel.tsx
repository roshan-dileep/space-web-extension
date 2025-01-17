
import '../index.css'; // Importing global CSS
import './Panel.css'; // Importing Panel-specific CSS

const Panel = () => {
  return (
    <div className="panel">
      <input className='input' type="text" placeholder="Enter your query here" />
    </div>
  );
};

export default Panel;