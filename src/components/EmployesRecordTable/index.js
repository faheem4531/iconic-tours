import React from "react";
import "./style.css";

import dotsIcon from "../../assets/svgs/donts-icon.svg";
import userProfile from "../../assets/pngs/user-profile.png";

const EmployesRecordTable = () => {
  return (
    <div className="table-container">
      <table className="table">
        <tr>
          <th>Profile</th>
          <th>Name</th>
          <th>Revenue Generated</th>
          <th>Tickets Sold</th>
        </tr>
        <tr>
          <div className="img-wrapper">
            <img className="user-profile" src={userProfile} alt="img" />
          </div>
          <td className="name-des">Nicholas Patrick</td>
          <td className="revenue-generated-des">$ 2540.58</td>
          <td className="ticket-sold-des">559</td>
          <td>
            <img className="dots-icons" src={dotsIcon} alt="icon" />
          </td>
        </tr>
        <tr>
          <div className="img-wrapper">
            <img className="user-profile" src={userProfile} alt="img" />
          </div>
          <td className="name-des">Nicholas Patrick</td>
          <td className="revenue-generated-des">$ 2540.58</td>
          <td className="ticket-sold-des">559</td>
          <td>
            <img className="dots-icons" src={dotsIcon} alt="icon" />
          </td>
        </tr>
        <tr>
          <div className="img-wrapper">
            <img className="user-profile" src={userProfile} alt="img" />
          </div>
          <td className="name-des">Nicholas Patrick</td>
          <td className="revenue-generated-des">$ 2540.58</td>
          <td className="ticket-sold-des">559</td>
          <td>
            <img className="dots-icons" src={dotsIcon} alt="icon" />
          </td>
        </tr>
        <tr>
          <div className="img-wrapper">
            <img className="user-profile" src={userProfile} alt="img" />
          </div>
          <td className="name-des">Nicholas Patrick</td>
          <td className="revenue-generated-des">$ 2540.58</td>
          <td className="ticket-sold-des">559</td>
          <td>
            <img className="dots-icons" src={dotsIcon} alt="icon" />
          </td>
        </tr>
        <tr>
          <div className="img-wrapper">
            <img className="user-profile" src={userProfile} alt="img" />
          </div>
          <td className="name-des">Nicholas Patrick</td>
          <td className="revenue-generated-des">$ 2540.58</td>
          <td className="ticket-sold-des">559</td>
          <td>
            <img className="dots-icons" src={dotsIcon} alt="icon" />
          </td>
        </tr>
        <tr>
          <div className="img-wrapper">
            <img className="user-profile" src={userProfile} alt="img" />
          </div>
          <td className="name-des">Nicholas Patrick</td>
          <td className="revenue-generated-des">$ 2540.58</td>
          <td className="ticket-sold-des">559</td>
          <td>
            <img className="dots-icons" src={dotsIcon} alt="icon" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default EmployesRecordTable;
