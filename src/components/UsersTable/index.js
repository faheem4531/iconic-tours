import React from "react";
import "./style.css";

import menuIcon from "../../assets/svgs/menu-icon.svg";
import dotsIcon from "../../assets/svgs/donts-icon.svg";

import { Link } from "react-router-dom";

const tableData = [
  {
    num: "#01",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
  {
    num: "#02",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
  {
    num: "#03",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
  {
    num: "#04",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
  {
    num: "#05",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
  {
    num: "#06",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
  {
    num: "#07",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
  {
    num: "#08",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
  {
    num: "#09",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
  {
    num: "#10",
    name: "Nicholas Patrick",
    email: "nicholas@gmail.com",
    revenue: "$ 2540.58",
    phoneNumber: "0333 447 8935",
    tickets: "559",
  },
];

const UsersTable = () => {
  return (
    <div className="user-table-container ">
      <table id="customers">
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Total Revenue</th>
          <th>Phone Number</th>
          <th>Tickets Sold</th>
          <th>
            <img src={menuIcon} alt="icon" />
          </th>
        </tr>
        <tbody>
          {tableData.map((data, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="users-table-num">{data.num}</td>
                <td className="users-table-name">{data.name}</td>
                <td className="users-table-email">{data.email}</td>
                <td className="users-table-revenue">{data.revenue}</td>
                <td className="users-table-email">{data.phoneNumber}</td>
                <td className="users-table-tickets">{data.tickets}</td>
                <td>
                  <div class="dropdown">
                    <div
                      style={{ padding: 7 }}
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img src={dotsIcon} alt="icon" />
                    </div>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link to="/userprofile" class="dropdown-item">
                          User Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <div className="spacer" />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
