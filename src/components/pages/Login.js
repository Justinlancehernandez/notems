import React from "react";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LogInUser } from "../services/UserService"

export class Login extends React.Component {
    state = {
        data: {},
        isNavigate: false,
        item: {}
    }
    handleSubmit() {
        LogInUser(this.state.data).then((item) => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome',
                showConfirmButton: false,
                timer: 1500
            })
            this.setState({ ...this.state, isNavigate: true} )
         
            sessionStorage.setItem('data', JSON.stringify(item.data))
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

                        <h1>Note Management System</h1>
                        <h1>Login</h1>

                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" val={this.state.data.username} onChange={(e) => this.handleAddData("username", e.target.value)} />
                            <label className="form-label">Username</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="password" className="form-control" val={this.state.data.password} onChange={(e) => this.handleAddData("password", e.target.value)} />
                            <label className="form-label">Password</label>
                        </div>
                        <button onClick={()=>this.handleSubmit()} type="submit" className="btn btn-primary btn-block mb-4">Login</button>

                        <p>Create an acoount</p><Link to="/signup"><a>Sign up</a></Link>

                    </div>


                </div>
                {this.state.isNavigate ? <Navigate to="/home" /> : null}
            </>
        )

    }
}
