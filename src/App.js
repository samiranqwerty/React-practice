import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); // Weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 3000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');


  }


  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#222222"; // set light mode background color
      showAlert("Dark mode has been enabled", "success");
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = "#f0f0f0"; // set dark mode background color
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar title="DOC" aboutText="About Us" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="DOC" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to reveal" mode={mode} />}></Route>
            {/* <TextForm showAlert={showAlert} heading="Enter Text to reveal" mode={mode} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
