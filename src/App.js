import './App.css';
import { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Intro from './pages/Intro';

function App() {
  const [width, setWindowWidth] = useState(0);

   useEffect(() => { 

     updateDimensions();

     window.addEventListener("resize", updateDimensions);
     return () => 
       window.removeEventListener("resize",updateDimensions);
    }, [])

    const updateDimensions = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    }

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
