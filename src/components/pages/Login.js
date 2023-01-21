import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { LogInUser } from "../services/UserService"

export class Login extends React.Component {
    state = {
        data: {},
        item:{}
    }
    handleSubmit(){
          LogInUser(this.state.data).then((item)=>{
            this.setState({...this.state,item:{item:item}})
          });
                   console.log(this.state.item.item);             
    }
    handleAddData(field, value) {
        this.setState({ ...this.state, data: { ...this.state.data, [field]: value } })

    }
    render() {
        return (
            <>
                <div className="d-flex justify-content-center p-5">

                    <form className="w-50 mt-5 bg-warning p-3" onSubmit={() => this.handleSubmit()}>
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
                        <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
                        
                       <p>Create an acoount</p><Link to ="/signup"><a>Sign up</a></Link>
                        
                        

                    </form>
                </div>

            </>
        )

    }
}
   