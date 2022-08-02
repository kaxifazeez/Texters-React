//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [modetxt, setmodetxt] = useState("dark");
  const [txtCol, settxtCol] = useState("black");
  const [alert, setalert] = useState(null);


  function toggleSwitch() {
    if (mode === "light") {
      setmode("dark");
      setmodetxt("light");
      settxtCol("white");
      document.body.style.backgroundColor='grey'
      alertChange("Dark Mode Enabbled","success")

    } 
    else {
      setmode("light");
      setmodetxt("dark");
      settxtCol("black");
      document.body.style.backgroundColor='white'
      alertChange("Light Mode Enabbled","success")

    }
  }
 const alertChange=(message,type)=>
 {
  setalert({
      msg:message,
      typ:type
  })
 }
  return (
    <> <Router>
      <Navbar title="Textsters" mode={mode} modetxt={modetxt} toggle={toggleSwitch}  />
      <Alert alert={alert}/>
        <Routes>
          <Route exact path="/About" element={<About/>}/>
        </Routes>
        <Routes>
          <Route exact path="/" element={<TextForm heading=" Change Your Text  "mode={mode} txtCol={txtCol} alertChange={alertChange}/>}/>
        </Routes>
      </Router>
      
  
    </>
  );
}

export default App;
//prop is used to pass any kind of information like i pass title
