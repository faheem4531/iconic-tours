import React from "react";
import './style.css';
import { Loader } from "..";

const RevenueTable = ({ tours, loading }) => {

  return (
    <div className="user-table-container ">
      {!loading ? (
        <table id="customers">
          <tr>
            <th>No.</th>
            <th>Tour Name</th>
            <th>Total Price</th>
            <th>Tickets Sold</th>
          </tr>
          <tbody>
            {tours.map((data, index) => (
              <React.Fragment >
                <tr>
                  <td className="users-table-num">{index + 1}</td>
                  <td className="users-table-name">{data.packageName}</td>
                  <td className="users-table-revenue">$ {data.revenue.totalTicketsPrice}</td>
                  <td className="users-table-tickets">{data.revenue.totalTickets}</td>
                </tr>
                <div className="spacer" />
              </React.Fragment>
            ))}
            {
              !loading && tours.length === 0 && (
                <tr>
                  <td colSpan="4">
                    No Tour Available
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      ) : (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
    </div >
  )
}

export default RevenueTable;