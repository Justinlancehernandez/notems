import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { MdUpdate, MdDelete, MdAdd, MdLogout } from 'react-icons/md';
import { GrNotes } from 'react-icons/gr';
import { DeleteNote, GetAllNote } from "../services/NoteService";
import Swal from "sweetalert2";
export function Home() {

    const [data, setData] = useState([])
    const [isNavigate, setIsNavigate] = useState(false)
    useEffect(() => {
        var getUserData = JSON.parse(sessionStorage.getItem("data"))
        GetAllNote(getUserData.userId).then((res) => {
            setData(res.data)
        })
    }, [data]);
    const handleLogout =()=>{

        Swal.fire({
            title: 'Do you want to Logout?',
           
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: `No`,
            icon:"warning"
          }).then((result) => {
            
            if (result.isConfirmed) {
               
               setIsNavigate(true)            
            } 
          })
    }
    const handleDelete=(noteId)=>{
        Swal.fire({
            title: 'Do you want to delete this note?',
           
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: `No`,
            icon:"warning"
          }).then((result) => {
            
    
            if (result.isConfirmed) {
                DeleteNote(noteId).then(()=>{
                    Swal.fire('Deleted!', '', 'success')
                    sessionStorage.removeItem("noteId")

                })
           
            } 
          })


    }
    return (
        <>
            <nav className="navbar navbar-warning bg-warning p-3 mb-4">


                <h1>
                    <strong className="text-light"><GrNotes />NOTES </strong>
                </h1>
                <div>

                    <Link to="/savenote">
                        <button type="button" class="btn btn-primary rounded-pill mt-3"><MdAdd />Add</button>
                    </Link>
                    
                        <button onClick={()=>handleLogout()}  type="button" class="btn rounded-pill mt-3"><MdLogout />Logout</button>
                    

                </div>



            </nav>
            <div className="container bootstrap snippets bootdeys">
                <div className="row">
                    {data.map((item) =>
                        <div className="col-md-4 col-sm-6 content-card bg-dark">
                            <div className="card-big-shadow bg-dark">
                                <div className="card card-just-text" data-background="color " data-color="blue" data-radius="none">
                                    <div className="content bg-warning p-3 h-25 overflow-auto">

                                        <h4 className="title text-light"> {item.header}</h4>
                                        <p className="description overflow-auto">{item.description} </p>
                                        <Link to='/savenote'>
                                            <button onClick={() => sessionStorage.setItem("noteId", item.noteId)} type="button" class="btn btn-success rounded-pill"><MdUpdate />Update</button>
                                        </Link>

                                        
                                            <button onClick={() => {handleDelete(item.noteId)}} type="button" class="btn btn-danger rounded-pill"><MdDelete />Delete</button>
                                       


                                    </div>
                                </div>
                            </div>
                        </div>

                    )}


                </div>
            </div>

            <footer className="text.center bg-warning mt-5 p-2">
                <h4>
                    <strong className="text-light">Keep Writing </strong>
                </h4>


            </footer>
            {
                isNavigate? 

                <Navigate to ="/logout" ></Navigate>
                :null 
            }

        </>
    )
}
