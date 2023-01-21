import React from "react";
import { Link } from "react-router-dom";
import { MdUpdate, MdDelete, MdAdd,MdLogout } from 'react-icons/md';
import { GrNotes } from 'react-icons/gr';
export class Home extends React.Component {
    state = {
        data: { userId: 4 }
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-warning bg-warning p-3 mb-4">


                    <h1>
                        <strong className="text-light"><GrNotes />NOTES </strong>
                    </h1>
                    <div>
                    
                    <Link to ="/savenote">
                    <button type="button" class="btn btn-primary rounded-pill mt-3"><MdAdd />Add</button>
                    </Link>  
                    <Link to ="/login">
                    <button type="button" class="btn rounded-pill mt-3"><MdLogout />Logout</button> 
                    </Link>
                    
                    
                    </div>
                    
                    

                </nav>
                 

                <div className="container bootstrap snippets bootdeys">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 content-card bg-dark">
                            <div className="card-big-shadow bg-dark">
                                <div className="card card-just-text" data-background="color " data-color="blue" data-radius="none">
                                    <div className="content bg-warning p-3">
                                        
                                        <h4 className="title text-light">Blue Card</h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                        <button type="button" class="btn btn-success rounded-pill"><MdUpdate />Update</button>
                                        <button type="button" class="btn btn-danger rounded-pill"><MdDelete />Delete</button>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Green Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Yellow Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Brown Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Purple Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">Best cards</h6>
                                        <h4 className="title"><a href="#">Orange Card</a></h4>
                                        <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="text.center bg-warning mt-5 p-2">
                <h4>
                        <strong className="text-light">Keep Writing </strong>
                    </h4>
                

                </footer>

            </>
        )
    }
}