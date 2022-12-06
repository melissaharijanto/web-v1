import './App.css';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className="App">
      <NavigationBar/>  
      <div className='content'>
        <Intro/>
        <About/>
        <Projects/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
