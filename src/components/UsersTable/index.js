import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import menuIcon from "../../assets/svgs/menu-icon.svg";
import dotsIcon from "../../assets/svgs/donts-icon.svg";

import { Loader } from "..";

const UsersTable = ({ users, loading }) => {
  const navigate = useNavigate();
  return (
    <div className="user-table-container ">
      {!loading ? (
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
            {users.map((data, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="users-table-num">{index + 1}</td>
                  <td className="users-table-name">{data.user.firstName}</td>
                  <td className="users-table-email">{data.user.email}</td>
                  <td className="users-table-revenue">
                    {`$${data.revenue.totalRevenue}`}
                  </td>
                  <td className="users-table-email">{data.user.phone}</td>
                  <td className="users-table-tickets">
                    {data.revenue.totalTickets}
                  </td>
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
                        <button
                          class="dropdown-item"
                          onClick={() => {
                            navigate("/userprofile", {
                              state: {
                                data: data,
                              },
                            });
                          }}>
                          User Profile
                        </button>
                      </ul>
                    </div>
                  </td>
                </tr>
                <div className="spacer" />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default UsersTable;
