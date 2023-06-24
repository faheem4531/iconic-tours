import React, { useEffect } from "react";
import "./style.css";

import addNewIcon from "../../assets/svgs/add-new-icon.svg";
import { Button } from "../../components";

const AddNewButton = ({
  children,
  title,
  loading,
  onClick,
  onClose,
  selectedCategoryId,
}) => {
  useEffect(() => {
    const myEl = document.getElementById("staticBackdrop");
    myEl.addEventListener("hidden.bs.modal", function (event) {
      onClose && onClose();
    });
  }, []);

  return (
    <>
      <button
        className="add-new-container"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        data-backdrop="true"
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
            <button
              type="button"
              id="closeMmodalBtn"
              class="btn-close d-none"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div class="modal-body">{children}</div>
            <div className="modal-button-wrapper">
              <Button
                onClick={onClick}
                loading={loading}
                title={selectedCategoryId ? "Update" : "Create"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewButton;
