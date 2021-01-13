import React,{useState,useEffect} from 'react'

export default function Countries() {
    const[nat,setNat]= useState([]);
function getnation(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then((res)=>res.json())
    .then((resjosn)=>{
        setNat(resjosn);
    })
}
useEffect(()=>{
getnation();
},[])


    return (
        <div>
        <h1>Countries  </h1>
        {nat.map(item=>
        <ol>
<li>
<div>

<p>{item.name}</p>
<p>{item.capital}</p>
<p>{item.region}</p>
<img src={item.flag} style={{height:50,width:100}} alt="new"/>
    
</div>


</li>

        </ol>
        
        )}
            
        </div>
    )
}
