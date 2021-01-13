import React,{useState} from 'react'
import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";


import { useHistory ,useLocation} from 'react-router-dom';
export default function Fbi() {
    
 const[name,setName]= useState([]);
 const [pass,setPass]= useState([]);
 let textInput = React.createRef();
 let textpass = React.createRef();
 const history = useHistory();
   let firebaseConfig = {
        apiKey: "AIzaSyCYrkad5DZCOUIF3J8Z9T2Bs0JrjZqO8nQ",
        authDomain: "webproject-fdfe0.firebaseapp.com",
        projectId: "webproject-fdfe0",
        storageBucket: "webproject-fdfe0.appspot.com",
        messagingSenderId: "247535544126",
        appId: "1:247535544126:web:d3f54a2913f4f870426e6f",
        measurementId: "G-TTNM3X0DGB"
      };
      if (!firebase.apps.length) {
        try {
            firebase.initializeApp(firebaseConfig)
        } catch (err) {
            console.error("error", err.stack)
        }
    }
 const auth = firebase.auth();
 const db= firebase.database();

 function getdata(){


    auth.signInWithEmailAndPassword
    (textInput.current.value,textpass.current.value)
   .then((res)=>{
      
     console.log("signin",res);
       if(res.user.email == textInput.current.value)
       {
       
           history.push('/count')
       }
       else{
alert("not login")
       }
   })
   .catch(err => {
    alert(err)
  })

 }

 function regdata(){


    auth.createUserWithEmailAndPassword
    (textInput.current.value,textpass.current.value)
   .then((res)=>{
      
    console.log("create",res);
       if(res.additionalUserInfo.isNewUser == true)
       {
          db.ref('users').set({
              email:textInput.current.value,
              pass:textpass.current.value
          });
           history.push('/count')
       }
       else{
alert("not regsiter")
       }
   })
   .catch(err => {
    alert(err)
  })

 }






    return (

        <div style={{margin:10 ,flexDirection:"row",flex:1}} >

<input type="email" placeholder="email"  ref={textInput}/>
      <input type="password" placeholder="password" ref= {textpass} />
      <button  onClick={()=>getdata()} style={{margin:10}}>LOGIN</button>

<div style={{margin:10 ,flexDirection:"row",flex:1}}>
<input type="email" placeholder="email"  ref={textInput}/>
      <input type="password" placeholder="password" ref= {textpass} />
      <button  onClick={()=>regdata()} style={{margin:10}}>REGSITER</button>


</div>
        </div>
          

 





       
            
    );
}
