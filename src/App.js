import './App.css';
import AboutUS from './components/AboutUS';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="Textutils" />
        <div className="container my-3">
      <TextForm heading="Enter the text to analyse" />
      <AboutUS />
        </div>
    </>
  );
}

export default App;
