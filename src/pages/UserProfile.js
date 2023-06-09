import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/UserProfile.css";

import { Button, Header, Input, TicketsCard } from "../components";

const ticketCard = [
  {
    title: "Kids",
    subTitle: "2.9k",
  },
  {
    title: "Adult",
    subTitle: "1.5k",
  },
  {
    title: "Military",
    subTitle: "4.5k",
  },
  {
    title: "Seniors",
    subTitle: "3.5k",
  },
];

const UserProfile = () => {
  const { state } = useLocation();
  return (
    <div>
      <Header title="Users" />
      <div className="user-profile-content-wrapper">
        <div className="user-profile-header">
          <div className="user-profile-wrapper">
            <div className="user-profile-bg-img">
              {/* <img className="user-profile-img" src={Admin Image} alt="img"/> */}
            </div>
            <div>
              <div className="user-profile-name">
                {state.data.user.firstName}
              </div>
              <div className="user-profile-mail">{state.data.user.email}</div>
            </div>
          </div>
          <TicketsCard
            title="Total Revenue"
            subTitle={`$${state.data.revenue.totalRevenue}`}
            textAlign="center"
            bgColor="#F2F8FB"
            color="var(--dark-orange-color)"
            width="170px"
          />
        </div>
        <div className="sold-tickets-card-wrapper">
          <TicketsCard title="Tickets Sold" subTitle="2.5k" />
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

export default UserProfile;
