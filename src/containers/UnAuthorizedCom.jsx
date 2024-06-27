
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";

const UnAuthorizedCom = () => {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
  
  );
};

export default UnAuthorizedCom;
