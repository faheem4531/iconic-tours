import React, { useState, useEffect } from "react";
import api from "../Services/Apis";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Button, Header, Input, TicketsCard } from "../components";
import "../styles/Admin.css";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const getUsers = async () => {
    setLoading(true);
    const userId = localStorage.getItem("userId");
    const allUserRevenu = await api.get("/api/v1/revenue/allUser");
    const currentUserRevenu = allUserRevenu?.data?.filter(
      (user) => user.user?._id === userId
    );
    console.log("currentUserRevenu", currentUserRevenu);
    const res = await api.get(`/api/v1/user/${userId}`);
    let userDataDetail = {
      user: currentUserRevenu[0]?.user,
      revenue: currentUserRevenu[0]?.revenue,
    };
    setUserData(userDataDetail);
    setLoading(false);
    formik.setFieldValue("firstName", userDataDetail.user.firstName);
    formik.setFieldValue("lastName", userDataDetail.user.lastName);
    formik.setFieldValue("email", userDataDetail.user.email);
    formik.setFieldValue("phone", userDataDetail.user.phone);
    formik.setFieldValue("password", userDataDetail.user.password);
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
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Sur Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone Number is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      const userId = localStorage.getItem("userId");
      try {
        await api.put(`/api/v1/user/${userId}`, {
          ...values,
          role: "ADMIN",
          password: "12345678",
        });
        toast("User updated successfully", { type: "success" });
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
      <Header title="Admin" />
      <div className="admin-content-wrapper">
        <div className="admin-header">
          <div className="admin-wrapper">
            <img
              src={`https://ui-avatars.com/api/?name=${userData?.user?.firstName}`}
              className="admin-profile"
              alt="Avatar"
            />
            <div>
              <div className="admin-name">
                {userData && userData?.user?.firstName}
              </div>
              <div className="admin-mail">
                {userData && userData?.user?.email}
              </div>
            </div>
          </div>
          <TicketsCard
            title="Total Revenue"
            subTitle={userData?.revenue?.totalRevenue}
            textAlign="center"
            bgColor="#F2F8FB"
            color="var(--blue-color)"
            width="170px"
          />
        </div>
        <div className="row admin-inputs-wrapper">
          <div className="col-6">
            <Input
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Name"
              value={formik.values.firstName}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div>{formik.errors.firstName}</div>
            )}
            <Input
              label="Email"
              type="eamil"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <div>{formik.errors.email}</div>
            )}
            {/* <Input
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              placeholder="Password"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <div>{formik.errors.password}</div>
            )} */}
          </div>
          <div className="col-6">
            <Input
              label="Surname Name"
              name="lastName"
              type="text"
              placeholder="Sur Name"
              value={formik.values.lastName}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div>{formik.errors.lastName}</div>
            )}
            <Input
              label="Phone Number"
              name="phone"
              type="text"
              placeholder="Phone Num"
              value={formik.values.phone}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div>{formik.errors.phone}</div>
            )}
            <div className="admin-save-button">
              <Button
                title="Save"
                loading={loading}
                onClick={formik.handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
