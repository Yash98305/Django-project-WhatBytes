import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {  toast } from "react-toastify";
import  useAuth  from "../../context/auth.jsx";
import img from "../../assets/My password-amico.png";
import { TextField } from "@mui/material";

const PasswordConfirmPage = () => {
    const { uid, token } = useParams()
  const location = useLocation();
  const [new_password, setNewPassword] = useState("");
  const [re_new_password, setReNewPassword] = useState("");
  
  const { auth, setAuth, api } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/auth/users/reset_password_confirm/`, {
        uid,
        token,
       new_password,
       re_new_password
      });
      if (res) {
        toast.success("Email sent successfully please check your mail");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  
  
  useEffect(() => {
    if (auth.access) {
      toast.success(`you already logged in`);
      navigate("/home");
    }
  }, [navigate, auth,location]);

  return (
    <>
    <div style={{display:"flex",}} >
    <div style={{width:"70%"}}>
      <img src={img} style={{ width: "85%", height: "100%" }} />
    </div>
    <div style={{width:"50%"}}>
          <form onSubmit={handleSubmit} style={{ width: "400px" }}>
            <h1 style={{ textAlign: "center", padding: "40px" }}>
            Create Password
            </h1>

            <TextField
              id="outlined-multiline-flexible"
              label="Enter Your New Password"
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
              label="Confirm Your New Password"
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
              Send
            </button>
           
           
          </form>
        </div>
        </div>
     
    </>
  );
};

export default PasswordConfirmPage;
