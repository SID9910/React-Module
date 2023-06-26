
// i have used the react version of npm install  "react-router-dom": "^5.3.4", ye version lea hai
//so first install this then u can move further
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

function App() {

  const[mode ,setMode] = useState('light');//whether dark mode is enable or not
 const [alert, setalert] = useState(null); //here we are using alert as a object 

 const showalert =(message, type) =>{
   setalert({

    msg: message,
    type: type
   })
   setTimeout(() =>{
     setalert(null);
   },1400)

 }
 const removeBodyclasses =() =>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');

  
 }
  const toggleMode =(cls) =>{
    removeBodyclasses();
    document.body.classList.add('bg-'+cls);
 if(mode ==='light'){
  setMode('dark')
  document.body.style.backgroundColor ='#042743';
  showalert("Dark mode has enabled","success");
 
 }else{
  setMode('light')
  document.body.style.backgroundColor ='white';
  showalert("Light mode has enabled","success");
  
 }

  }
  return (
  <>
  <Router>

  <Navbar title ="TextUtils"  mode ={mode}  toggleMode ={toggleMode} Abouttext="About TextUtils " />

<Alert alert ={alert}  />
<div className="container my-3">
  
<Switch>
          <Route exact path="/about">
            <About   mode ={mode}/>
          </Route>
          <Route exact path="/">
          <Textform  showalert ={showalert} heading ="Enter the Text to Analyze" mode ={mode} />
          </Route>
        </Switch>
        
</div>
</Router>

  </>
    
  );
}


export default App;
