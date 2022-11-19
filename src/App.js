import './App.css';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Intro from './pages/Intro';

function App() {

  return (
    <div className="App">
      <NavigationBar/>  
      <div className='content'>
        <Intro/>
        <About/>
      </div>
      
    </div>
  );
}

export default App;
