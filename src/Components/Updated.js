import React,{useState,useEffect} from 'react'

import { useLocation,useHistory } from "react-router-dom";

export default function Updated() {
    const location = useLocation();
    const[na,setNa]= useState([]);
    const history= useHistory();
    const myparam = location.state.id;
    let textInput= React.useRef();


    function getupdate(number){
        fetch('http://127.0.0.1:8000/api/update/'+myparam,{
            method:'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name: textInput.current.value, email: textpass.current.value})
        })
        .then((res)=>res.json())
        .then((resjson)=>{
        
            console.log("api",resjson);
            setNa(resjson);
            history.push('/Newlist');
        })

    }

    function getdata(number)
    {

        fetch('http://127.0.0.1:8000/api/show/'+myparam)
.then((res)=>res.json())
.then((resjson)=>{

    console.log("api",resjson);
    setNa(resjson);
})

    }



    useState(()=>{
        getdata(myparam);

    },[]);
let textpass= React.useRef();
    return (
        <div>
            <h1>update</h1>
            <h1>
                id:{myparam}
            </h1>
            <div class="container-fluid" style={{marginTop:30}}>
  
  <div class="row" style={{margin:10}}>
  <label  style={{marginRight:120,marginLeft:120}}>
      Name:
      <input type="text" ref={textInput}  style={{marginLeft:50,contenteditable:true}}  defaultValue={na.name}  contenteditable="true" />
    </label>
  </div>
  <div class="row" >
  <label  style={{marginRight:120,marginLeft:120}}>
      password:
      <input type="text" ref={textpass} style={{marginLeft:50,contenteditable:true}}  defaultValue={na.email} contenteditable="true" />
    </label>
    
  </div>
<div style={{marginRight:120,marginLeft:300,marginTop:15}}>
    
  <input type="submit" value="Submit" onClick={()=>getupdate(myparam)} />
</div>
        </div>


        </div>
    )
}
