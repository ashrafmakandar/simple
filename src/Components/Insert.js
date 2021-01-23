import React from 'react'


import { useLocation,useHistory } from "react-router-dom";

import Zoom from 'react-reveal/Pulse'
export default function Insert() {
let textInput= React.useRef();
let textpass= React.useRef();
let history = useHistory();

function getdata(){
fetch('http://127.0.0.1:8000/api/model',{
    method:'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: textInput.current.value, email: textpass.current.value})
})
.then((res)=>res.json())
.then((resjson)=>{
    console.log("app",resjson);
    history.push('/Newlist');

})


}

    return (
       <Zoom>
       {/*    <div style={{marginRight:220,marginLeft:450,marginTop:140,marginBottom:50}}>
          <h3 style={{marginRight:220,marginLeft:250,marginTop:40,marginBottom:50}}>Add Details</h3>
            <div class="container-fluid" style={{marginTop:30}}>
            
  <div class="row" style={{margin:10}}>


  <label  style={{marginRight:120,marginLeft:120}}>
      Name:
      <input type="text" ref={textInput}  style={{marginLeft:50}} />
    </label>
  </div>
  <div class="row" >
  <label  style={{marginRight:120,marginLeft:120}}>
      password:
      <input type="text" ref={textpass} style={{marginLeft:50}}  />
    </label>
    
  </div>
<div style={{marginRight:120,marginLeft:300,marginTop:15}}>
    
  <input type="submit" value="Submit" onClick={()=>getdata()} />
</div>
        </div>

        
        </div> */}
        <form action="/Newlist" style={{width:400,marginLeft:600,marginTop:160}}>
        <h2 style={{marginLeft:120,marginTop:20,marginBottom:10,fontFamily:"monospace",fontWeight:500}}>Add Details</h2>
  <div class="form-group" style={{margin:10}}>
    <label for="exampleInputEmail1" style={{margin:10}}>Email address</label>
    <input type="email" class="form-control" style={{margin:10}} ref={textInput} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group" style={{margin:10}}>
    <label for="exampleInputPassword1" style={{margin:10}}>Password</label>
    <input type="password" class="form-control" style={{margin:10}} ref={textpass}  id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={()=>{getdata()}} style={{marginLeft:180 ,marginTop:20}}>Submit</button>
</form>
   
       </Zoom>
    )
}
