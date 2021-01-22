import React,{useState,useEffect,useRef} from 'react'
import styles from './news.module.css'
import { useHistory ,useLocation} from 'react-router-dom';
import axios from 'axios'

import Zoom from 'react-reveal/Zoom'
export default function Learn() {

    let name= React.useRef();
   let pass= React.useRef();

let history= useHistory();
    function getvalues(){

        axios.get('https://api.jsonapi.co/rest/v1/user/list',{params:{
           filter:'name:Amina Metz',

        }})
        .then(function (response) {
       
          
            if(response.data.success=true)
            {
history.push('/pages')
            }
          })
          .catch(function (error) {
            console.log(error);
          })

     
    }
    return (
        <Zoom>
    <div className={styles.rows}>
           <div>
         

           <h1 className={styles.newsdata}>Simple Website </h1>
          
<div className={styles.contain}>
<h3 className={styles.newtitle}>Welcome</h3>


   


</div>
<div className={styles.text}>
<label  className={styles.label}> Enter Your Name</label>
<input type="text" placeholder="Name Here" className={styles.input}/>


</div>
<div className={styles.email}>
<label  className={styles.label}> Enter Your Email</label>
<input type="email" placeholder="Email Here" className={styles.input}  ref={name}/>

<div className={styles.check}>
    <input type="checkbox" className={styles.box}/><label className={styles.cbox} ref={pass}>Remember Me</label>
</div>
</div>
<div className={styles.click}>
<button className={styles.labelbrn}  type="button"  onClick={()=>getvalues()}>Login</button>
<p className={styles.forgot}> Forgot Password ? Click Here </p>
 
</div>
<div
className={styles.foot}>

<p className={styles.footer}>Kalyani Motors</p>
<p className={styles.foter}>All Rights Reserved</p>

</div>



           </div>



        
        </div>

        </Zoom>
    
    )
}
