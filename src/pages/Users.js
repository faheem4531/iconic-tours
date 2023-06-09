import React from "react";
import { AddNewButton, Header, UsersTable, Input } from "../components";
import "../styles/Users.css";

const Users = () => {
  return (
    <div>
      <Header title="Users" />
      <div className="users-add-btn-wrapper">
        <div className="sales-representative">
          Total Sales Representative: (30)
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
      <UsersTable />
    </div>
  );
};

export default Users;
