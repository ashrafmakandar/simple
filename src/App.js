import './App.css';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import List from './Components/List';
import  './bootstrap.min.css'
import Reqres from './Components/Reqres.js'
import Login from './Components/Login';
import Number from './Components/Number';
function App() {
  return (
 <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/team">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/number">Number</a>
        </li>
      
       
      </ul>
      
    </div>
  </div>
</nav>
       
<Switch>
  <Route path="/" component={List} exact />
                <Route path="/about" component={About} />
                <Route path="/team" component={Reqres} /> 
                <Route path="/contact" component={Contact} />    
                <Route path="/login" component={Login} /> 
                <Route path="/number" component={Number} /> 
                </Switch>

 
    
 </div>
 
  
    
  );
}
export default App;
