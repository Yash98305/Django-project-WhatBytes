import React, { useEffect, useState } from "react";
import Body from "../Layout/Body.jsx";
import ChangePasswordPage from "../components/main pages/ChangePasswordPage.jsx"
import Animate from "../Animate.jsx";
import  useAuth  from "../context/auth.jsx";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const navigate = useNavigate();
const {auth} = useAuth();

useEffect(() => {
  if (!auth?.access) {
    navigate('/login');
  }
}, [navigate, auth]);
  return (
    <>
    <Animate app={<Body obj={<ChangePasswordPage/>}/>}/>

      
    </>
    
  );
};

export default ChangePassword;
