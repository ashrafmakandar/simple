import React,{useState,useEffect} from 'react'
import { useHistory ,useLocation} from 'react-router-dom';
export default function List() {
const[war,setWar]= useState([]);
const [cpage,setCpage]= useState([1]);
const [ppage,setPpage]= useState([10])
let history = useHistory();
const location = useLocation();
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
function getward(test)
{
    alert(test);
    history.push('/About',{
        names:test,
        values:"you are at"
    });
}
function getitem(wards){
alert(wards)
}
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
<p onClick={()=>getward(s.properties.WARD_NAME)}> ward no: {s.properties.WARD_NO}</p>
<div></div>
<p>zone : {s.properties.ZONE}</p>
  </div>
  </div>
</div>
     </li>))}
     </ol>
     <div style={{margin:15}}>
     <table class="table table-bordered">
     <tr >
    <th style={{margin:10,padding:10,}}><h4>Ward Name</h4></th>
    <th style={{margin:10,padding:10}}><h4>Ward No</h4></th> 
    <th style={{margin:10,padding:10}}><h4>Ward Zone</h4></th>
    <th style={{margin:10,padding:10}}><h4>Actions</h4></th>
  </tr>
{war.map((s)=>
  <tr>
    <td style={{margin:10,padding:10}}>{s.properties.WARD_NAME}</td>
    <td style={{margin:10,padding:10}}>{s.properties.WARD_NO}</td>
    <td style={{margin:10,padding:10}}>{s.properties.ZONE}</td>
    <td style={{margin:10,padding:10}}><button type="button" class="btn btn-warning">UPDATE</button></td>
    <td style={{margin:10,padding:10}} ><button type="button" class="btn btn-danger" onClick={()=>getitem(s.properties.WARD_NAME)}>DELETE</button></td>
  </tr>
)}
</table>
     </div>
        </div>
    )
}
