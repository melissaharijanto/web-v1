import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './pages/Intro';

function App() {
  return (
    <div className="App">
      <NavigationBar/>    
      <div className='content'>
        <Intro/>
      </div>
      
    </div>
  );
}

export default App;
