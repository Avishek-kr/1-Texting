import React, {useState} from 'react';
import './App.css';
import AboutUS from './components/AboutUS';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ThemeColor from './components/ThemeColor';



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
  const yellow=()=>{
    document.body.style.backgroundColor="#FFDE03";
    document.body.style.color="#000000";
  }
  const blue=()=>{
    document.body.style.backgroundColor="#0336ff";
    document.body.style.color="#ffffff";
  }
  const red=()=>{
    document.body.style.backgroundColor="#ff0266";
    document.body.style.color="#000000";
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container mt-3">
          <ThemeColor yellow={yellow} blue={blue} red={red}/>
      </div>
        <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
      <AboutUS mode={mode} />
        </div>
    </>
  );
}

export default App;
