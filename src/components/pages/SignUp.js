import React from "react";
import { Link, Navigate } from "react-router-dom";
import { AddUser } from "../services/UserService"
import Swal from "sweetalert2";
export class SignUp extends React.Component {
    state = {
        data: {},
        isNavigate:false
    }
    handleSubmit(){
          AddUser(this.state.data).then((res)=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Accout Has Been Created ',
                showConfirmButton: false,
                timer: 1500
              })
              this.setState({...this.state,isNavigate:true})
          });                  
    }
    handleAddData(field, value) {
        this.setState({ ...this.state, data: { ...this.state.data, [field]: value } })
    }
    render() {
        return (
            <>
                <div className="d-flex justify-content-center p-5">
                <div className="border border-dark bg-warning p-5">
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



                        <button onClick={()=>this.handleSubmit()} type="submit" class="btn btn-primary btn-block mb-4">Sign Up</button>
                        <p>Already have an account</p><Link to ="/login"><a>Log in</a></Link>
                </div>
                  
                </div>
           {this.state.isNavigate?<Navigate to ="*"/>:null} 
            </>
        )

    }
}
