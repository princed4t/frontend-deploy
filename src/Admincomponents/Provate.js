import React from 'react'
import { Outlet } from 'react-router-dom'

const Provate = () => {

                 const token=localStorage.getItem("jwtToken");
                 

          
if( JSON.parse(localStorage.getItem("roles"))=='ROLE_ADMIN'){
    return <Outlet/>
}
   else{
   return window.alert("you are not a Admin");

   } 


}

export default Provate