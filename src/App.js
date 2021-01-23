import './App.css';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import List from './Components/List';
import  './bootstrap.min.css'
import Reqres from './Components/Reqres.js'
import Login from './Components/Login';
import Number from './Components/Number';
import Countries from './Components/Countries';
import fbi from './Components/Fbi';
import Fbi from './Components/Fbi';
import Pages from './Components/Pages';
import Learn from './Components/Learn';
import All from './Components/All';
import Newlist from './Components/Newlist';
import Insert from './Components/Insert';
import Updated from './Components/Updated';
function App() {
  return (
 <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/team" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/number" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Number</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/count" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Countries</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fbi" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Firebase</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Pagination</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/learn" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Learn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/All" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Newlist" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/post" style={{fontSize:25,color:"black",fontFamily:"Times New Roman"}}>Post</a>
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
                <Route path="/count" component={Countries}/>
                <Route path="/fbi" component={Fbi}/>
                <Route path="/pages" component={Pages}/>
                <Route path="/learn" component={Learn}/>
                <Route path="/All" component={All}/>
                <Route path="/Newlist" component={Newlist}/>
                <Route path="/post" component={Insert}/>
          <Route path="/update" component={Updated}/>
                </Switch>

 
    
 </div>
 
  
    
  );
}
export default App;
