import './App.css';
import Random from './components/Random'
import Custom from './components/Custom'
function App() {
  return (
    <div className='container'>
      <h1>Random GIF Generator</h1>
      <Random/>
      <Custom/>
    </div>
  );
}

export default App;
