import { EntryPoint } from "../Config";
import axios, { Axios } from "axios";
const EndPoint="/user";

function AddUser(user){
    return axios.post(EntryPoint+EndPoint+"/add",user)
}

function UpdateUser(user){
    return axios.post(EntryPoint+EndPoint+"/update",user)
}
function DeleteUser(userId){
    return axios.delete(EntryPoint+EndPoint+"/delete/"+userId)
}

function LogInUser(user){
    return axios.post(EntryPoint+EndPoint+"/login/",user)
}
export{
    AddUser,UpdateUser,DeleteUser,LogInUser
}