import React,{useState,useEffect} from 'react'
import {useHistory,useLocation} from 'react-router-dom'
import styles from  './all.module.css'
import Zoom from 'react-reveal/Zoom'
export default function All() {
    const [user,setUser]= useState([]);
    const [val,setVal]= useState([]);
    let history= useHistory();
    const location = useLocation();
    function getall(){
        fetch("https://api.jsonapi.co/rest/v1/user/list")
        .then((res)=>res.json())
        .then((resjsonb)=>{

          console.log("apis",resjsonb)
          setUser(resjsonb.data.users)
        })
    }
    function getclick(user)
    {
        
        fetch("https://api.jsonapi.co/rest/v1/user/"+user.id)
        .then((res)=>res.json())
        .then((resu)=>{
            console.log("res",resu.data.name)
            setVal(resu.data.name)
         
          
           
        })
    }

    useEffect(()=>{
getall()
    },[])
    return (
      <Zoom>

<div style={{margin:15}} className={styles.alls}>
<div>
<h2 className=
{styles.Blog}>Blog</h2>

</div>


        

        <table class="table table-bordered">
        <tr >
       <th style={{margin:10,padding:10,color:"#fff" ,fontWeight:900}}><h4>Name</h4></th>
       <th style={{margin:10,padding:10,color:"#fff" ,fontWeight:900}}><h4>Email</h4></th> 
       <th style={{margin:10,padding:10,color:"#fff" ,fontWeight:900}}><h4>Address</h4></th>
       <th style={{margin:10,padding:10,color:"#fff" ,fontWeight:900}}><h4>Company</h4></th>
       <th style={{margin:10,padding:10,color:"#fff" ,fontWeight:900}}><h4>Action</h4></th>
     </tr>
   {user.map((s)=>
     <tr>
       <td style={{margin:10,padding:10,color:"#fff",fontWeight:900}}>{s.name}</td>
       <td style={{margin:10,padding:10 ,color:"#fff" ,fontWeight:900}}>{s.email}</td>
       <td style={{margin:10,padding:10,color:"#fff" ,fontWeight:900}}>{s.address.city}</td>
       <td style={{margin:10,padding:10,color:"#fff" ,fontWeight:900}}>{s.company.name}</td>
       <td style={{margin:10,padding:10,color:"#22ff",fontSize:25 ,fontWeight:900}} onClick={()=>getclick(s)}><button type="button" class="btn btn-success" >VIEW</button></td>
     </tr>
   )}
   </table>
   <div className={styles.full}>

   <div className={styles.imgs}>
<div className={styles.conat}>
<Zoom>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

</Zoom>

</div>
<div className={styles.conat}>
<Zoom>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

</Zoom>

</div>
<div className={styles.fll}>
<Zoom>
<div className={styles.nan}>
<h3>Our Motto</h3>

</div>
<div className={styles.nin}>
<p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>


</div>
</Zoom>


</div>
<div className={styles.conatct}>
<Zoom>
<h3 className={styles.newshead}>Contact Us</h3>
<br></br>
<div className={styles.news}>
<p>Cecilia Chapman
<br></br>
<br></br>
711-2880 Nulla St.
<br></br>
<br></br>
Mankato Mississippi 96522
<br></br>
<br></br>
(257) 563-7401</p>

</div>
</Zoom>

</div>


   </div>
  


</div>

<div className={styles.footers}>

<p className={styles.foottext}>Kalyani Motors</p>
<p className={styles.footletf}>All Rights Reserved</p>
</div>          
        </div>


      </Zoom>

   
    )
}
