import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";


export class Logout extends React.Component {

    render(){
    sessionStorage.removeItem("data")
   return(
    <Navigate to= '/signin'></Navigate>
   ) 
}
   }    

