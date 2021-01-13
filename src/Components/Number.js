import React,{useState,useEffect} from 'react'
import {useHistory,useLocation} from 'react-router-dom'
export default function Number() {
    let textInput = React.createRef();
    const [dates,setDates]= useState([]);
    let history= useHistory();

    
function getdate(){
fetch('http://numbersapi.com/'+textInput.current.value+'/math?json')
.then((res)=>res.json())
.then((resjson)=>{
    setDates(resjson.text);
})
}
function getvalues(drop
    ){
        alert(drop.target.value)
    }

function onChangeValue(event){
    alert(event.target.value)
    history.push('/',{
        radio:event.target.value
    })
}
function onChangeValuecheck(event){
    alert(event.target.value)
}


    return (  
        <div style={{margin:10,padding:10,flex:1}}>
            <input type="number" ref={textInput} style={{margin:10,padding:10}} placeholder="please enter a number"/>
          <button type="button" class="btn btn-primary btn-lg" onClick={()=>getdate()}>CLICK</button>
          <div class="card" style={{margin:10,padding:10}}>
       
  <div class="card-body">
  <h3 style={{color:"#88dd"}}>{dates}</h3> 
  </div>
</div>
    <div>
    </div>

    <select className="form-control mb-2" onChange={(e) => getvalues(e)}>
  <option value="5">5 dollars</option>
  <option value="10">10 dollars</option>
</select>

<div onChange={(text)=>onChangeValue(text)}>
        <input type="radio" value="Male" name="gender"  style={{margin:10,padding:10}}/> Male
        <input type="radio" value="Female" name="gender" style={{margin:10,padding:10}} /> Female
        <input type="radio" value="Other" name="gender" style={{margin:10,padding:10}} /> Other
      </div>
      <div onChange={(text)=>onChangeValuecheck(text)}>
        <input type="checkBox" value="Male" name="gender"  style={{margin:10,padding:10}}/> Male
        <input type="checkBox" value="Female" name="gender" style={{margin:10,padding:10}} /> Female
        <input type="checkBox" value="Other" name="gender" style={{margin:10,padding:10}} /> Other
      </div>
  




        </div>
    )
}
