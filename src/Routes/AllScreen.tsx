import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Auth/SignUp";
import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/Contact";
import StaticLayout from "../Layout/StaticLayout";
import Demo from "../Page/Demo";
import Dashboard from "../Auth/Dashboard";


const AllScreen: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StaticLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/demo" element={<Demo />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
        </Route>

       
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default AllScreen;
