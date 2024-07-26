import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import  useAuth  from "../../context/auth.jsx";
import img from "../../assets/My password-pana.png";
import { IconButton, OutlinedInput, TextField } from "@mui/material";

const ChangePasswordPage = () => {
  const location = useLocation();
  const [new_password, setNewPassword] = useState("");
  const [re_new_password, setReNewPassword] = useState("");
  const [current_password, setCurrentPassword] = useState("");
  const { auth, api } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/auth/users/set_password/`, {
        new_password,
        re_new_password,
        current_password
      },{
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      });
      if (res) {
        toast.success("Password changed successfully");
        navigate("/home");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
        if (error.response && error.response.data) {
            const errors = error.response.data;
        if (errors.new_password) {
            errors.new_password.forEach((err) => toast.error(`New Password: ${err}`));
          }
        if (errors.re_new_password) {
            errors.re_new_password.forEach((err) => toast.error(`Confirm Password: ${err}`));
          }
        if (errors.current_password) {
            errors.current_password.forEach((err) => toast.error(`Current Password: ${err}`));
          }
        else{
            toast.error("Something went wrong")
        }
    }}
  };

useEffect(()=>{

},[api,auth])
  

  return (
    <>
    <div style={{display:"flex",}} >
    <div style={{width:"70%"}}>
      <img src={img} style={{ width: "85%", height: "100%" }} />
    </div>
    <div style={{width:"50%"}}>
          <form onSubmit={handleSubmit} style={{ width: "400px" }}>
            <h1 style={{ textAlign: "center", padding: "40px" }}>
              Change Password
            </h1>

            <TextField
              id="outlined-multiline-flexible"
              label="Current Password"
              value={current_password}
            
              
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
              style={{
                width: "100%",
                borderColor: "red",
                marginBottom: "40px",
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="New Password"
              value={new_password}
            
              
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              style={{
                width: "100%",
                borderColor: "red",
                marginBottom: "40px",
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Confirm Password"
              value={re_new_password}
            
              
              onChange={(e) => {
                setReNewPassword(e.target.value);
              }}
              style={{
                width: "100%",
                borderColor: "red",
                marginBottom: "40px",
              }}
            />

           

            <button
              style={{
                width: "100%",
                padding: "17px",
                backgroundColor: "black",
                color: "white",
                fontSize: "15px",
                borderRadius: "7px",
              }}
            >
              Submit
            </button>
          
             
          </form>
        </div>
        </div>
     
    </>
  );
};

export default ChangePasswordPage;
