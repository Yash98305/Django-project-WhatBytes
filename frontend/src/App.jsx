import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage.jsx";
import Forgot from "./pages/Forgot.jsx";
import PasswordConfirm from "./pages/PasswordConfirm.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<PasswordConfirm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
