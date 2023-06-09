import React from "react";
import {
  ActiveToursCard,
  AddNewButton,
  Header,
  Input,
  SelectInput,
} from "../components";
import "../styles/Tours.css";

const activeToursCard = [
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
];

const upcomingToursCard = [
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "DOWNTOWN TOUR",
    subTitle: "Night Tour with Audio Guide",
    time: "9:00 PM",
    date: "9 March 2023",
    totalTickets: "500",
    remainingTickets: "70",
    bgColor: "var(--light-green-color)",
  },
];

const Tours = () => {
  return (
    <div>
      <Header title="Tours" />
      <div className="active-tours-wrapper">
        <div className="num-of-active-tours">Active Tours (3)</div>
        <AddNewButton title="Add Tour">
          <Input
            placeholder="Downtown"
            label="Tour Name"
            color="var(--dark-orange-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            top="0px"
            type="text"
          />
          <SelectInput label="Add To category" color="var(--dark-orange-color)">
            <option value="1">One Day Pass</option>
            <option value="2">Two Day Pass</option>
            <option value="3">Three Day Pass</option>
          </SelectInput>
          <Input
            label="Select Date Range"
            color="var(--dark-orange-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="date"
          />
          <div className="row">
            <div className="col-6">
              <Input
                placeholder="17:00"
                label="Start Time"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
              />
            </div>
            <div className="col-6">
              <Input
                placeholder="19:00"
                label="End Time"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
              />
            </div>
          </div>
          <SelectInput label="Assign To" color="var(--dark-orange-color)">
            <option value="1">Joseph Cole</option>
            <option value="2">Mike</option>
            <option value="3">Joni</option>
          </SelectInput>
          <div className="row">
            <div className="col-6">
              <Input
                placeholder="500"
                label="Total No. of Tickets"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
                fontSize="14px"
              />
              <Input
                placeholder="Original Price*"
                label="Child"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
                fontSize="14px"
              />
              <Input
                placeholder="Original Price*"
                label="Adult"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
                fontSize="14px"
              />
              <Input
                placeholder="Original Price*"
                label="Senior"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
                fontSize="14px"
              />
              <Input
                placeholder="Original Price*"
                label="Military"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
                fontSize="14px"
              />
            </div>
            <div className="col-6">
              <SelectInput
                label="Tickets Available For"
                color="var(--dark-orange-color)">
                <option value="1">Child</option>
                <option value="2">Adult</option>
                <option value="3">Senior</option>
                <option value="3">Military</option>
              </SelectInput>
              <Input
                placeholder="Discounted Price"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
                top="38px"
                fontSize="14px"
                straric
              />
              <Input
                placeholder="Discounted Price"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
                top="38px"
                fontSize="14px"
                straric
              />
              <Input
                placeholder="Discounted Price"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
                top="36px"
                fontSize="14px"
                straric
              />
              <Input
                placeholder="Discounted Price"
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="text"
                top="35px"
                fontSize="14px"
                straric
              />
            </div>
          </div>
        </AddNewButton>
      </div>
      <div className="active-tours-wrap-container">
        {activeToursCard.map((card, index) => (
          <ActiveToursCard
            key={index}
            title={card.title}
            subTitle={card.subTitle}
            time={card.time}
            date={card.date}
            totalTickets={card.totalTickets}
            remainingTickets={card.remainingTickets}
            bgColor={card.bgColor}
          />
        ))}
      </div>
      <div className="tours-horizontal-border" />
      <div className="num-of-active-tours upcoming-tours">Upcoming Tours</div>
      <div className="active-tours-wrap-container">
        {upcomingToursCard.map((card, index) => (
          <ActiveToursCard
            key={index}
            title={card.title}
            subTitle={card.subTitle}
            time={card.time}
            date={card.date}
            totalTickets={card.totalTickets}
            remainingTickets={card.remainingTickets}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;
