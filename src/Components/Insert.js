import React from 'react'

export default function Insert() {
let textInput= React.useRef();
let textpass= React.useRef();

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
})


}

    return (
        <div>
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
        </div>
    )
}
