import React, { useEffect, useState } from "react";
import { AddNewButton, Header, UsersTable, Input, Loader } from "../components";
import api from "../Services/Apis";
import "../styles/Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    setLoading(true);
    const res = await api.get("/api/v1/revenue/allUser");
    setLoading(false);
    setUsers(res.data);
    console.log("user", res.data)
    setLoading();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Header title="Users" />
      <div className="users-add-btn-wrapper">
        <div className="sales-representative">
          Total Sales Representative: {users.length}
        </div>
        <AddNewButton title="Users">
          <Input
            placeholder="Name"
            label="First Name"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="text"
            fontSize="14px"
          />
          <Input
            placeholder="Last Name"
            label="Last Name"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="text"
            fontSize="14px"
          />
          <Input
            placeholder="example01@example.com"
            label="Email Address"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="email"
            fontSize="14px"
          />
          <Input
            placeholder="+92 333 333 3333"
            label="Phone Number"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="text"
            fontSize="14px"
          />
          <Input
            placeholder="Password@123"
            label="Password"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="password"
            fontSize="14px"
          />
          <Input
            placeholder="Password@123"
            label="Confirm Password"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="password"
            fontSize="14px"
          />
        </AddNewButton>
      </div>
      <UsersTable users={users} loading={loading} />
    </div>
  );
};

export default Users;
