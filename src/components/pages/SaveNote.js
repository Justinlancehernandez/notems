import React from "react";
import { Link } from "react-router-dom";
import { Home } from "./Home";
import { MdDangerous,MdOutlineCheckCircleOutline } from 'react-icons/md';

export class SaveNote extends React.Component{

state = {
        data: {}
        
    }
    render() {
        return (
            <>
                <div className="d-flex justify-content-center p-5">

                    <form className="w-50 mt-5 bg-warning p-3" onSubmit={() => this.handleSubmit()}>
                    <h1>Notes</h1>
                       
                       
                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" val={this.state.data.header} onChange={(e) => this.handleAddData("username", e.target.value)} />
                            <label className="form-label">header</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="password" className="form-control" val={this.state.data.desciption} onChange={(e) => this.handleAddData("password", e.target.value)} />
                            <label className="form-label">desciption</label>
                        </div>
                        
                        <button type="button" className="btn btn-primary btn-block mb-4"><MdOutlineCheckCircleOutline />Save</button>
                        
                        <Link to ="/home">
                        <button type="button" className="btn btn-danger btn-block mb-4"><MdDangerous />cancel</button>                            
                        </Link>
                       
                        

                        
                
                    </form>
                </div>

            </>
        )

    }
}