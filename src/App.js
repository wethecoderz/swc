import './App.css';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm'; 
import React, {useState} from 'react'
// import About from './components/About'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';  
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  

  return (
    <>
    <Navbar title="SWC" About="About us" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    {/* <About/> */}
    <TextForm heading="Sarkari Word Counter" mode={mode}/>
    </div>
    </>
    
  );
}

export default App;
