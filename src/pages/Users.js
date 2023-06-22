import React, { useEffect, useState } from "react";

import { AddNewButton, Header, UsersTable, Input } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import api from "../Services/Apis";
import "../styles/Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUsers = async () => {
    setLoading(true);
    const res = await api.get("/api/v1/revenue/allUser");
    setLoading(false);
    setUsers(res.data);
    setLoading();
  };

  useEffect(() => {
    getUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone Number is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      const data = { ...values, role: "USER" };
      delete data["confirmPassword"];
      try {
        await api.post("/api/v1/user/signup", data);
        toast("User created successfully", { type: "success" });
        // const btn = document.getElementById("openModalBtn");
        // btn.click();
        getUsers();
        formik.resetForm(); // Reset form values
      } catch (error) {
        toast(error.response.data.message || "Failed to create user", {
          type: "error",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <Header title="Users" />
      <div className="users-add-btn-wrapper">
        <div className="sales-representative">
          Total Sales Representative: {users.length}
        </div>
        <AddNewButton
          title="Users"
          loading={loading}
          onClick={formik.handleSubmit}>
          <Input
            placeholder="Name"
            name="firstName"
            label="First Name"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="text"
            fontSize="14px"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div>{formik.errors.firstName}</div>
          )}
          <Input
            placeholder="Last Name"
            label="Last Name"
            name="lastName"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="text"
            fontSize="14px"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div>{formik.errors.lastName}</div>
          )}
          <Input
            placeholder="example01@example.com"
            label="Email Address"
            name="email"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="email"
            fontSize="14px"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
          <Input
            placeholder="00 000 000"
            label="Phone Number"
            name="phone"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="text"
            fontSize="14px"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div>{formik.errors.phone}</div>
          )}
          <Input
            placeholder="Password@123"
            label="Password"
            name="password"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="password"
            fontSize="14px"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
          <Input
            placeholder="Password@123"
            label="Confirm Password"
            name="confirmPassword"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="password"
            fontSize="14px"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div>{formik.errors.confirmPassword}</div>
          )}
        </AddNewButton>
      </div>
      <UsersTable users={users} loading={loading} />
    </div>
  );
};

export default Users;
