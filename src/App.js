import './App.css';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Intro from './pages/Intro';
import Projects from './pages/Projects';

function App() {

  return (
    <div className="App">
      <NavigationBar/>  
      <div className='content'>
        <Intro/>
        <About/>
        <Projects/>
      </div>
      
    </div>
  );
}

export default App;
