import React from "react";
import { Link, Navigate } from "react-router-dom";
import { AddUser } from "../services/UserService"
import Swal from "sweetalert2";
export class SignUp extends React.Component {
    state = {
        data: {}
    }
    handleSubmit(){
          AddUser(this.state.data).then(()=>{
          
          });
        
          <Navigate to  = "/home"/>             
    }
    handleAddData(field, value) {
        this.setState({ ...this.state, data: { ...this.state.data, [field]: value } })

    }
    render() {
        return (
            <>
                <div className="d-flex justify-content-center p-5">

                    <form className="w-50 mt-5 bg-warning p-3" onSubmit={() => this.handleSubmit()}>
                        <h1>Note Management System </h1>
                        <h1>SignUp</h1>
                        <div class="form-outline mb-4">
                            <input type="text" class="form-control" val={this.state.data.name} onChange={(e) => this.handleAddData("name", e.target.value)} />
                            <label class="form-label" for="form2Example1">Name</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="text" class="form-control" val={this.state.data.username} onChange={(e) => this.handleAddData("username", e.target.value)} />
                            <label class="form-label" for="form2Example1">Username</label>
                        </div>


                        <div class="form-outline mb-4">
                            <input type="password" class="form-control" val={this.state.data.password} onChange={(e) => this.handleAddData("password", e.target.value)} />
                            <label class="form-label" for="form2Example2">Password</label>
                        </div>



                        <button type="submit" class="btn btn-primary btn-block mb-4">Sign Up</button>
                        <p>Already have an account</p><Link to ="/login"><a>Log in</a></Link>


                    </form>
                </div>

            </>
        )

    }
}
