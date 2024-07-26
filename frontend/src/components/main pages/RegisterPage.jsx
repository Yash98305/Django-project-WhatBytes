import img from "../../Layout/Mobile login-pana.png";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../context/auth.jsx";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { IconButton, OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");

  const { api, auth } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowRePassword = () => setShowRePassword((show) => !show);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password!==re_password){
      toast.error(`Password and confirm password not match`)
    }else{
    try {
      const res = await axios.post(`${api}/auth/users/`, {
        username,
        email,
        password,
        re_password,
      });
      if (res) {
        toast.success("Register successfully");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        if (errors.username) {
          errors.username.forEach((err) => toast.error(`Username: ${err}`));
        }
        if (errors.email) {
          errors.email.forEach((err) => toast.error(`Email: ${err}`));
        }
        if (errors.password) {
          errors.password.forEach((err) => toast.error(`Password: ${err}`));
        }
        if (errors.re_password) {
          errors.re_password.forEach((err) => toast.error(`Confirm Password: ${err}`));
        }
      } else {
        toast.error("Something went wrong");
      }
    }}
  };

  useEffect(() => {
    if (auth.token) {
      toast.success(`You are already logged in`);
      navigate("/home");
    }
  }, [navigate, auth]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "70%" }}>
        <img src={img} style={{ width: "88%", height: "100%" }} />
      </div>
      <div style={{ width: "50%" }}>
        <form onSubmit={handleSubmit} style={{ width: "400px" }}>
          <h1 style={{ textAlign: "center", padding: "50px 20px 20px 20px" }}>
            Register Yourself
          </h1>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            value={username}
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            multiline
            style={{
              width: "100%",
              borderColor: "red",
            }}
          />
           <ul type="circle" className="reg_e"  style={{
              marginBottom: "15px",
              marginTop: "5px",
            }}>
            <li><FiberManualRecordIcon sx={{fontSize:7,marginRight:1}}/>Ensure this field has no more than 150 characters.</li>
          </ul>
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            multiline
            style={{
              width: "100%",
              borderColor: "red",
              marginBottom: "15px",
            }}
          />
          <FormControl
            sx={{ m: 1, width: "400px", marginLeft: "-0.1px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <ul type="circle" className="reg_e" style={{
              marginBottom: "10px",
            }}>
            <li><FiberManualRecordIcon sx={{fontSize:7,marginRight:1}}/> Your password can’t be too similar to your other personal information.</li>
            <li><FiberManualRecordIcon sx={{fontSize:7,marginRight:1}}/>Your password must contain at least 8 characters.</li>
            <li><FiberManualRecordIcon sx={{fontSize:7,marginRight:1}}/>Your password can’t be a commonly used password.</li>
            <li><FiberManualRecordIcon sx={{fontSize:7,marginRight:1}}/>Your password can’t be entirely numeric.</li>
          </ul>
          <FormControl
            sx={{ m: 1, width: "400px", marginLeft: "-0.1px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-re_password">Confirm Password</InputLabel>
            <OutlinedInput
              value={re_password}
              name="re_password"
              onChange={(e) => {
                setRe_password(e.target.value);
              }}
              id="outlined-adornment-re_password"
              type={showRePassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowRePassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showRePassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
          <ul type="circle" className="reg_e" style={{
              marginBottom: "15px",
            }} >
            <li ><FiberManualRecordIcon sx={{fontSize:7,marginRight:1}}/>Enter the same password as before, for verification.</li>
          </ul>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "17px",
              backgroundColor: "black",
              color: "white",
              fontSize: "15px",
              borderRadius: "7px",
            }}
          >
            SUBMIT
          </button>
          <p
              style={{
                marginTop: "8px",
                textAlign: "right",
                marginRight: "7px",
              }}
            >
              Already have an account?
              <NavLink to="/login"> Login In</NavLink>
            </p>
    
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
