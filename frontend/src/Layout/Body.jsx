import React, { useEffect } from "react";
import "../css/home.css";
import { toast } from "react-toastify";
import useAuth  from "../context/auth";
import Avatar from "@mui/material/Avatar";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import Search from "./Search";
import { motion } from "framer-motion";
import VerticalNav from "./VerticalNav";
import AnimateBody from "../AnimateBody";
import { useNavigate } from "react-router-dom";
const Body = ({ obj }) => {
  const navigate = useNavigate();
  const { auth, setAuth, mot, setmot, so } = useAuth();
  const objectreturn = (obj) => {
    return obj;
  };
  const handleLogout = () => {
    setAuth({
      ...auth,
      access: "",
    refresh: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    so(true);
    navigate("/login")
  };
useEffect(()=>{

},[auth])
  return (
    <>
      <div className="home_con">
        <div>
          <div className="horizontal_nav">
            <div style={{ fontWeight: "bolder", fontSize: "30px" }}>
            Stripy
            </div>
            <div>
              <Search />
            </div>
            <div className="horizontal_nav_1">
              <div style={{ paddingRight: "20px" }}>
                <NotificationsActiveRoundedIcon color="#2E335B" />
              </div>
              <Avatar
                style={{ border: "2px solid black", zIndex: "11 !important" }}
                sx={{ width: 50, height: 50 }}
                src={`/broken-image.jpg`}
                alt="U"
              />
            </div>
          </div>
          <div className="home_content">
            {mot ? (

            <motion.div
              className="vertical_nav"
              initial={{ x: -40, opacity: 0.01, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              onClick={() => setmot(false)}
              transition={{ ease: "backInOut", duration: 1.8 }}
            >
            <VerticalNav setmot={setmot} handleLogout={handleLogout} />
            </motion.div>
            ) : (
              <motion.div
                className="vertical_nav"
                initial={{ x: 0, opacity: 1 }}
              >
                <VerticalNav handleLogout={handleLogout} />
              </motion.div>
            )}

            <div className="page" style={{marginTop:"0px"}}>
              <div>
                <AnimateBody app={objectreturn(obj)} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Body;
