import { useState, useEffect, useContext, createContext, useRef } from "react";
import axios from "axios";

const AuthContext = createContext(null);
const api = "http://127.0.0.1:8000/api/v1";
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    access: "",
    refresh: "",
  });
  const [mot, setmot] = useState(true);
  const [o, so] = useState(true);
  axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.access}`;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        refresh: parseData.refresh,
        access: parseData.access,
      });
    }

    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{
        api,
        auth,
        setAuth,
        mot,
        setmot,
        o,
        so,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export default useAuth;
export { AuthProvider};