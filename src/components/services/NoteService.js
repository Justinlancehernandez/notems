import { EntryPoint } from "../Config";
import axios, { Axios } from "axios";
const EndPoint="/note";


function AddNote(note){
    return axios.post(EntryPoint+EndPoint+"/add",note)
}

function UpdateNote(note){
    return axios.post(EntryPoint+EndPoint+"/update",note)
}
function DeleteNote(noteId){
    return axios.delete(EntryPoint+EndPoint+"/"+noteId)
}

function GetAllNote(userId){
    return axios.get(EntryPoint+EndPoint+"/all/"+userId)
}

function GetNoteById(userId){
    return axios.get(EntryPoint+EndPoint+"/"+userId)
}
export{
    AddNote,UpdateNote,DeleteNote,GetAllNote,GetNoteById
}