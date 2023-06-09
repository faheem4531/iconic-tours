import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./style.css";

const Button = ({ title, onClick, loading }) => {
  return (
    <div>
      <button className="button" onClick={onClick}>
        {loading ? (
          <ThreeDots
            height="28"
            width="40"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            visible
          />
        ) : (
          title
        )}
      </button>
    </div>
  );
};

export default Button;
