import React from "react";
import { Login } from "../pages/Login"
import { SignUp } from "../pages/SignUp"
import { Home } from "../pages/Home";
import { SaveNote } from "../pages/SaveNote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logout } from "../pages/Logout";


export class NotesMSRoutes extends React.Component {
  render() {
    return (
      <><BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />

          <Route path="signup" element={<SignUp />} />

          <Route path="home" element={<Home />} />
          

          <Route path="savenote" element={<SaveNote />} />
          <Route path="logout" element={<Logout />} />

          
        
          
          

        </Routes>
      </BrowserRouter>
      </>
    )

  }


} 