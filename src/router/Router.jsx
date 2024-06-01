import React from "react";
import {Routes, Route} from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default Router;