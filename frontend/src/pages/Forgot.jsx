import React, { useEffect, useState } from "react";
import Body from "../Layout/Body.jsx";
import ForgotPage from "../components/main pages/ForgotPage.jsx"
import Animate from "../Animate.jsx";
import  useAuth  from "../context/auth.jsx";
import { useNavigate } from "react-router-dom";
const Forgot = () => {

  return (
    <>
    <Animate app={<Body obj={<ForgotPage/>}/>}/>

    </>
    
  );
};

export default Forgot;
