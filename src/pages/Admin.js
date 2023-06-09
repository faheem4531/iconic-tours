import React from "react";
import "../styles/Admin.css";

import { Button, Header, Input, TicketsCard } from "../components";

const Admin = () => {
  return (
    <div>
      <Header title="Admin" />
      <div className="admin-content-wrapper">
        <div className="admin-header">
          <div className="admin-wrapper">
            <div className="admin-bg-img">
              {/* <img className="admin-img" src={Admin Image} alt="img"/> */}
            </div>
            <div>
              <div className="admin-name">Joseph Admin</div>
              <div className="admin-mail">admin@gmail.com</div>
            </div>
          </div>
          <TicketsCard
            title="Total Revenue"
            subTitle="$25k"
            textAlign="center"
            bgColor="#F2F8FB"
            color="var(--blue-color)"
            width="170px"
          />
        </div>
        <div className="row admin-inputs-wrapper">
          <div className="col-6">
            <Input label="First Name" type="text" placeholder="Name" />
            <Input label="Email" type="eamil" placeholder="Name" />
            <Input label="Password" type="password" placeholder="Password" />
          </div>
          <div className="col-6">
            <Input label="Surname Name" type="text" placeholder="Sur Name" />
            <Input label="Phone Number" type="text" placeholder="Phone Num" />
            <div className="admin-save-button">
              <Button title="Save" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
