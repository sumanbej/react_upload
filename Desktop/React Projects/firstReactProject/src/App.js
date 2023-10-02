import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import { useEffect, useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#80ed99';
    } else {
      document.body.style.backgroundColor = '#030a14';
    }
  }, [mode])

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <Navbar title="Text Analyzer" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textbox heading="Enter Your Desired Text" mode={mode} />
      </div>
    </>

  );
}

export default App;
