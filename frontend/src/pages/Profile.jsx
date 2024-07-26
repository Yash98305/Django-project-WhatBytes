import React, { useEffect } from "react";
import Body from "../Layout/Body.jsx";
import ProfilePage from "../components/main pages/ProfilePage.jsx"
import Animate from "../Animate.jsx";
import  useAuth  from "../context/auth.jsx";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
const {auth} = useAuth();

useEffect(() => {
  if (!auth?.access) {
    navigate('/login');
  }
}, [navigate, auth]);
  return (
    <>
    <Animate app={<Body obj={<ProfilePage/>}/>}/>

      
    </>
    
  );
};

export default Profile;
