import React, {useState} from 'react';
import './App.css';
import AboutUS from './components/AboutUS';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState("light");

  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="#111212";
      document.body.style.color="#ffffff";
    }else{
      setMode("light")
      document.body.style.backgroundColor="#ffffff";
      document.body.style.color="#000000";
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
      <TextForm heading="Enter the text to analyse" mode={mode} />
      <AboutUS mode={mode} />
        </div>
    </>
  );
}

export default App;
