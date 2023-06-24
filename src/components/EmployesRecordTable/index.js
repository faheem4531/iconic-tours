import React from "react";
import "./style.css";

import dotsIcon from "../../assets/svgs/donts-icon.svg";
import userProfile from "../../assets/pngs/user-profile.png";
import Loader from "../Loader";

const EmployesRecordTable = ({ users, loading, deleteUser }) => {
  return (
    <div className="table-container">
      {!loading ? (
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
                  <img
                    src={`https://ui-avatars.com/api/?name=${user.user.firstName}`}
                    className="user-profile"
                    alt="Avatar"
                  />
                </div>
              </td>
              <td className="name-des">{user.user.firstName}</td>
              <td className="revenue-generated-des">
                {user.revenue.totalRevenue}
              </td>
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
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          deleteUser(user.user._id);
                        }}>
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <div className="home-table-loader-wrapper">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default EmployesRecordTable;
