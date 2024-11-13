import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'


function App() {
  const [mode, setmode] = useState('light');

  const togglemode = () => {
    if(mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
  <>
<Navbar title="Text Analyzer" abouttext="About my hobby" mode={mode} togglemode = {togglemode} btntext={`Enable ${mode==='light'?'dark':'light'} Mode`}/>
<div className="container my-3">
<TextForm head="Enter your text" mode={mode}/>
</div>
  </>
  );
}

export default App;
