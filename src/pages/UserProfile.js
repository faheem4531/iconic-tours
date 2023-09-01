import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import api from "../Services/Apis";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

import "../styles/UserProfile.css";
import { Button, Header, Input, TicketsCard } from "../components";

const UserProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const ticketCard = [
    {
      title: "Kids",
      subTitle: state.data?.revenue?.ticketCount?.adult?.tickets || 0,
    },
    {
      title: "Adult",
      subTitle: state.data?.revenue?.ticketCount?.child?.tickets || 0,
    },
    {
      title: "Military",
      subTitle: state.data?.revenue?.ticketCount?.military?.tickets || 0,
    },
    {
      title: "Seniors",
      subTitle: state.data?.revenue?.ticketCount?.senior?.tickets || 0,
    },
  ];

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: state.data.user.firstName || "",
      lastName: state.data.user.lastName || "",
      email: state.data.user.email || "",
      location: state.data.user.location || "",
      phone: state.data.user.phone || "",
      password: state.data.user.password || "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Sur Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      location: Yup.string()
        .required("Location is required"),
      phone: Yup.string().required("Phone Number is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await api.put(`/api/v1/user/${state.data?.user?._id}`, {
          ...values,
          role: state.data.user.role,
          password: "12345678",
        });
        toast("User Updated successfully", { type: "success" });
        navigate("/users");
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
      <div className="user-profile-content-wrapper">
        <div className="user-profile-header">
          <div className="user-profile-wrapper">
            <img
              src={`https://ui-avatars.com/api/?name=${state?.data?.user?.firstName}`}
              className="admin-profile"
              alt="Avatar"
            />
            <div>
              <div className="user-profile-name">
                {state.data.user.firstName}
              </div>
              <div className="user-profile-mail">{state.data.user.email}</div>
            </div>
          </div>
          <TicketsCard
            title="Total Revenue"
            subTitle={state.data.revenue.totalRevenue}
            textAlign="center"
            bgColor="#F2F8FB"
            color="var(--dark-orange-color)"
            width="170px"
          />
        </div>
        <div className="sold-tickets-card-wrapper">
          <TicketsCard
            title="Tickets Sold"
            subTitle={state.data.revenue.totalTickets}
          />
          {ticketCard.map((card, inedex) => (
            <TicketsCard
              key={inedex}
              title={card.title}
              subTitle={card.subTitle}
            />
          ))}
        </div>
        <div className="row user-profile-inputs-wrapper">
          <div className="col-6">
            <Input
              label="First Name"
              type="text"
              placeholder="Name"
              name="firstName"
              value={formik.values.firstName}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div>{formik.errors.firstName}</div>
            )}
            <Input
              label="Email"
              type="email"
              placeholder="Name"
              name="email"
              value={formik.values.email}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <div>{formik.errors.email}</div>
            )}
            <Input
              label="Location"
              type="text"
              placeholder="Location"
              name="location"
              value={formik?.values?.location}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.location && formik.errors.location && (
              <div>{formik.errors.location}</div>
            )}
            {/* <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <div>{formik.errors.password}</div>
            )} */}
          </div>
          <div className="col-6">
            <Input
              label="SurName"
              type="text"
              placeholder="SurName"
              name="lastName"
              value={formik.values.lastName}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div>{formik.errors.lastName}</div>
            )}
            <Input
              label="Phone Number"
              type="text"
              placeholder="Phone Num"
              name="phone"
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

export default UserProfile;
