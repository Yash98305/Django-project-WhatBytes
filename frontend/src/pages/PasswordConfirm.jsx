import React, { useEffect, useState } from "react";
import Body from "../Layout/Body.jsx";
import PasswordConfirmPage from "../components/main pages/PasswordConfirmPage.jsx"
import Animate from "../Animate.jsx";
import  useAuth  from "../context/auth.jsx";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
const {auth} = useAuth();

useEffect(() => {
  if (!auth?.access) {
    navigate('/login');
  }
}, [navigate, auth]);
  return (
    <>
    <Animate app={<Body obj={<PasswordConfirmPage/>}/>}/>

      
    </>
    
  );
};

export default Home;
