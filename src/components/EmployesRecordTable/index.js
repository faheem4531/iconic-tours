import React from "react";
import "./style.css";

import dotsIcon from "../../assets/svgs/donts-icon.svg";
import userProfile from "../../assets/pngs/user-profile.png";

// const users = [
//   { name: "Nicholas Patrick", revenue: "$ 2540.58", ticketsSold: 559 },
// ];

const EmployesRecordTable = ({users}) => {
  console.timeLog("user", users);
  return (
    <div className="table-container">
      <table className="table">
        <tr>
          <th>Profile</th>
          <th>Name</th>
          <th>Revenue Generated</th>
          <th>Tickets Sold</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>
              <div className="img-wrapper">
                <img className="user-profile" src={userProfile} alt="img" />
              </div>
            </td>
            <td className="name-des">{user.user.firstName}</td>
            <td className="revenue-generated-des">{user.revenue.totalRevenue}</td>
            <td className="ticket-sold-des">{user.revenue.totalTickets}</td>
            <td>
              <div className="dropdown">
                <div
                  style={{ padding: 7 }}
                  id={`dropdownMenuButton${index}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img className="dots-icons" src={dotsIcon} alt="icon" />
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby={`dropdownMenuButton${index}`}>
                  <li>
                    <button className="dropdown-item">Delete</button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default EmployesRecordTable;
