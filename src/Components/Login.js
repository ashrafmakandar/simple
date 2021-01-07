import React,{useState,useEffect} from 'react'  
export default function Login() {
   
    let textInput = React.createRef();
    let textpass = React.createRef();
   function getdata(){
     
if(textInput.current.value=="ashraf"&&textpass.current.value=="ashraf")
{
    
    window.location.href='/about'
}
else{
    alert("please check crendentials")
}

   }
    
    return (
        <div>
        <div>
        <nav class="navbar navbar-light bg-primary">
      <span class="navbar-brand" style={{color:"#fff"}}>LOGIN</span>
    </nav>
        </div>

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
    <nav class="navbar fixed-bottom navbar-light bg-primary">
  <a class="navbar-brand" href="#"><span>&#169;</span>Kalyani Motors</a>
</nav>

        </div>
       
    )
}
