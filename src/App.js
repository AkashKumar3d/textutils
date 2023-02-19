
import './App.css';
import Navbar from './component/Navbar'
import Alert from './component/Alert';
import TextForm from './component/TextForm';
import Aboutus from './component/Aboutus'
import React, {useState} from "react"; //importing the use state 

// import react router dom 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // usestate 
  let [mode, setmode]=useState("light")
  let [text, newtext]=useState("Enable dark mode")
  let [alert , setalert]=useState(null)
  
  // alert  show function
let showalert=(message , type )=>{
 setalert({
  msg: message,
  type: type
 })
 setTimeout(() => {
  setalert(null)
 }, 1500);
 console.log("show alert is  call ")  
}

  // function for changing the dark to light mode mode 
  let togglemode=()=>{
    console.log("you are triggred ")

    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#053442"
    newtext("Enable light mode ") 
    showalert("Enable light mode", "success")

    }else{
      setmode("light")
      document.body.style.backgroundColor="white"
      newtext("Enable dark mode ")
      showalert("Enable dark mode ", "success")
    }
  }

  return (
   <>
   <Router>    
   <Navbar title="TextUtils" home="Home" about="About Us" mode={mode}  text={text} toggle={togglemode} /> {/*  searchbar={true} */}
   <Alert alert={alert}/>
   <Routes>
        <Route path="/about"  element={<Aboutus/>}/>
         <Route path="/" element={ <div className='container'> <TextForm heading="Enter the text to anlize below " showalert={showalert} toggle={togglemode} mode={mode} /></div>}/>
   </Routes>
    </Router>
   </>
  ); 
}

export default App;
