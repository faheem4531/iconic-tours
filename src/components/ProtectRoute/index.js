import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setloading] = useState(true);
  const publicRoutes = ["/login"];

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    // const decodedJwt = parseJwt(token);
    // const isTokenValid = decodedJwt && decodedJwt?.exp * 1000 > Date.now();
    const isAuthRoute = publicRoutes.includes(location.pathname);

    if (isAuthRoute && token) {
      navigate("/");
    } else if (!token) {
      navigate("/login");
    }
    setTimeout(() => setloading(false), 500);
  }, []);
  return loading ? <></> : <>{children}</>;
};

export default ProtectRoute;
