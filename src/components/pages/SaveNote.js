import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDangerous, MdOutlineCheckCircleOutline } from 'react-icons/md';
import { AddNote, GetNoteById, UpdateNote } from "../services/NoteService";

export class SaveNote extends React.Component {

    constructor(props) {
        super(props);


        var getUserData = JSON.parse(sessionStorage.getItem("data"))
        this.state = {
            data: {
                userId: getUserData.userId,
            },
            isNavigate: false

        }


    }
    componentDidMount() {
        var getNoteId = sessionStorage.getItem("noteId")
        if (getNoteId != null) {
            GetNoteById(getNoteId).then((item) => {
                this.setState({ ...this.state, data: item.data })
                console.log(this.state.data.header)
            })

        }
    }


    handleSubmit() {
        console.log(this.state.data)
        if (sessionStorage.getItem('noteId') != null) {
            UpdateNote(this.state.data).then((res) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Save Note',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.setState({ ...this.state, isNavigate: true })
            });
        }
        else {
            AddNote(this.state.data).then((res) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Save Note',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.setState({ ...this.state, isNavigate: true })
            });
        }

    }
    handleAddData(field, value) {
        this.setState({ ...this.state, data: { ...this.state.data, [field]: value } })
    }

    render() {


        return (
            <>

                <div className="d-flex justify-content-center p-5">
                    <div className="border border-dark bg-warning p-5">

                        <h1>Notes</h1>


                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" value={this.state.data.header} onChange={(e) => this.handleAddData("header", e.target.value)} />
                            <label className="form-label">Header</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" value={this.state.data.description} onChange={(e) => this.handleAddData("description", e.target.value)} />
                            <label className="form-label">Description</label>
                        </div>

                        <button onClick={() => this.handleSubmit()} type="button" className="btn btn-primary btn-block mb-4"><MdOutlineCheckCircleOutline />Save</button>

                        <Link to="/home">
                            <button type="button" onClick={() => sessionStorage.removeItem('noteId')} className="btn btn-danger btn-block mb-4"><MdDangerous />Cancel</button>
                        </Link>



                    </div>

                    {this.state.isNavigate ? <Navigate to="/home" /> : null}

                </div>

            </>
        )

    }
}