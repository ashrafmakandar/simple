import React,{useState,useEffect} from 'react'
export default function Number() {
    let textInput = React.createRef();
    const [dates,setDates]= useState([]);
function getdate(){
fetch('http://numbersapi.com/'+textInput.current.value+'/math?json')
.then((res)=>res.json())
.then((resjson)=>{
    setDates(resjson.text);
})
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
        </div>
    )
}
