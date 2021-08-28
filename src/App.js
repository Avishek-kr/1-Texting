import React, {useState} from 'react';
import './App.css';
import AboutUS from './components/AboutUS';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="#111212";
      document.body.style.color="#ffffff";
      showAlert("Dark mode has been enabled", "success")
    }else{
      setMode("light")
      document.body.style.backgroundColor="#ffffff";
      document.body.style.color="#000000";
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
      <AboutUS mode={mode} />
        </div>
    </>
  );
}

export default App;
