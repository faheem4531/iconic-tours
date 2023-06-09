import React from "react";
import "./style.css";

import addNewIcon from "../../assets/svgs/add-new-icon.svg";
import { Button } from "../../components";

const AddNewButton = ({ children, title }) => {
  return (
    <>
      <button
        className="add-new-container"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        id="openModalBtn">
        <div className="add-new-title">Add New</div>
        <img src={addNewIcon} alt="icon" />
      </button>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-keyboard="false"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div className="modal-heading">{title}</div>
            <div class="modal-body">{children}</div>
            <div className="modal-button-wrapper">
              <Button title="Create" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewButton;
