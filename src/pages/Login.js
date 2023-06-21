import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "../styles/Login.css";

import { Input, Button } from "../components";
import iconicLogo from "../assets/svgs/iconic-logo.svg";
import api from "../Services/Apis";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      setLoading(true);
      try {
        const res = await api.post("/api/v1/user/login", data);
        setLoading(false);
        toast("Signed in successfully", { type: "success" });
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userId", res.data.data._id);
        api.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`;
        navigate("/");
      } catch (error) {
        setLoading(false);
        toast(error.response.data.message || "Failed to login", {
          type: "error",
        });
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-wrapper">
          <img src={iconicLogo} alt="logo" />
        </div>
        <div className="login-title">Log In</div>
        <Input
          label="Email"
          placeholder="Emai"
          type="email"
          name="email"
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
        <div className="login-button-wrapper">
          <Button
            title="Login"
            onClick={formik.handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
