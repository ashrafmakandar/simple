import React,{useState,useEffect} from 'react'

export default function List() {
const[war,setWar]= useState([]);


function getalldata(){
    fetch('https://raw.githubusercontent.com/openbangalore/bangalore/master/bangalore/GIS/BBMP_Wards_2011_region.json')
    .then((res)=>res.json())
    .then((responsejson)=>{
        setWar(responsejson.features);
        console.log("wards",responsejson)
    })
}

useEffect(()=>{
    getalldata();
},[]);



    return (
        <div>

           <h3>List of wards</h3>
           <br/>
     <ol>
     {war.map(s=>(<li>


<div class="card">
  <div class="card-body">
  <div class="card-header">
  
   <div></div>
   <p>{s.properties.WARD_NAME}</p>
   <div></div>
<p> ward no: {s.properties.WARD_NO}</p>
<div></div>
<p>zone : {s.properties.ZONE}</p>
  </div>

  </div>
</div>

     </li>))}
         
     </ol>
      
        
    
        </div>
    )
}
