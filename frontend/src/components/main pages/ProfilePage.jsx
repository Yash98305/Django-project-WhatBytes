import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import  useAuth  from "../../context/auth.jsx";
import img from "../../assets/robot.gif";
import { IconButton, OutlinedInput, TextField } from "@mui/material";

const ProfilePage = () => {
  const location = useLocation();
  const { auth, api } = useAuth();
  const [user,setUser] = useState();
    const profile = async()=>{
    try {
      const res = await axios.get(`${api}/auth/me/`,{headers:{
        Authorization: `Bearer ${auth.access}`
      }})
      setUser(res.data);
    } catch (error) {
     console.log(error.response.data.detail);
    }
  }
  useEffect(()=>{
   auth && profile()
  },[api,auth])

  return (
    <>
    <div style={{display:"flex",}} >
    <div style={{width:"70%"}}>
      <img src={img} style={{ width: "85%", height: "100%" }} />
    </div>
    <div style={{width:"50%"}}>
          <form style={{ width: "400px" }}>
            <h1 style={{ textAlign: "center", padding: "40px" }}>
              Your Profile
            </h1>

            <TextField
              id="outlined-multiline-flexible"
              label="Username"
              InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
              value={user?.username}
              style={{
                width: "100%",
                borderColor: "red",
                marginBottom: "40px",
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Email"
              InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
              value={user?.email}
              style={{
                width: "100%",
                borderColor: "red",
                marginBottom: "40px",
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Date of Joining"
              value={user?.date_joined.substring(0,10) +" "+"("+ user?.date_joined.substring(11,16)+")"}
              InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
              style={{
                width: "100%",
                borderColor: "red",
                marginBottom: "40px",
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Last Login"
              InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
              value={user?.last_login.substring(0,10) +" "+"("+ user?.last_login.substring(11,16)+")"}
              style={{
                width: "100%",
                borderColor: "red",
                marginBottom: "40px",
              }}
            />
          </form>
        </div>
        </div>
     
    </>
  );
};

export default ProfilePage;
