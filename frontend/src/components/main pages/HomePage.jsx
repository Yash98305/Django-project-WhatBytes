import React, { useEffect, useState } from 'react'
import img from "../../assets/robot.gif"
import axios from 'axios'
import useAuth from '../../context/auth'
import {toast} from "react-toastify"
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom"
const HomePage = () => {
  const navigate = useNavigate()
  const {auth,api} = useAuth();
  const [user,setUser] = useState();
    const profile = async()=>{
    try {
      const res = await axios.get(`${api}/auth/me/`,{headers:{
        Authorization: `Bearer ${auth.access}`
      }})
      console.log(res);
      setUser(res.data);
    } catch (error) {
     console.log(error.response.data.detail);
    }
  }
  useEffect(()=>{
   auth && profile()
  },[api,auth])
  return (
    <div style={{ display: "flex",border:"2px solid red",height:"80vh",padding:"15px"}}>
    <div style={{ width: "50%",border:"2px solid red",display: "flex",alignItems:"center",justifyContent:"center"}}>
      <img src={img} alt="error" />
    </div>
    <div style={{ width: "50%",border:"2px solid red",flexDirection:"column",display: "flex",alignItems:"center",justifyContent:"center"}}>
     <h1>Hii! {user?.username}</h1> 
     <p>Welcome to this web application</p>
     <p>Exmple of an authencation web app with cutting edge feature.</p>
     <h3 style={{marginTop:"40px"}}>Wanna try this</h3>
     <div>
     <Button
          style={{
            color:"#2E335B",
            float: "right",
            marginTop: "50px",
            marginRight: "280px",
            margin: "30px 40px",
            display: "flex",
            backgroundColor: "#d9d9d9",
          }}
          onClick={()=>navigate("/change-password")}
          variant="contained"
          color="success"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "15px",
              fontWeight:550
            }}
          >
            Change Password
          </div>
        </Button>

     <Button
          style={{
            color:"#2E335B",
            float: "right",
            marginTop: "50px",
            marginRight: "280px",
            margin: "30px 40px",
            fontWeight:550,
            display: "flex",
            backgroundColor: "#d9d9d9",
          }}
          onClick={()=>navigate("/profile")}
          variant="contained"
          color="success"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "15px",
            }}
          >
            Profile
          </div>
        </Button>
  
        </div>
    </div>
  </div>
  )
}

export default HomePage