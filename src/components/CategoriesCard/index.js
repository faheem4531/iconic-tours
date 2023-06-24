import React from "react";
import { toast } from "react-toastify";
import "./style.css";

import dotsIcon from "../../assets/svgs/dots-white-icon.svg";
import api from "../../Services/Apis";

const CategoriesCard = ({
  bgColor,
  title,
  onEdit,
  setSelectedCategoryId,
  id,
  getCategories,
  category,
}) => {
  const deleteCategory = async () => {
    try {
      await api.delete(`/api/v1/category/${id}`);
      toast("Category deleted successfully", { type: "success" });
      getCategories();
    } catch (error) {
      toast(error.response.data.message || "Failed to login", {
        type: "error",
      });
    }
  };
  return (
    <>
      <div
        className="category-card-container"
        style={{ backgroundColor: bgColor }}>
        <div className="category-card-title">{title}</div>
        <div class="dropdown">
          <div
            style={{ padding: 7 }}
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <img src={dotsIcon} alt="icon" />
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                class="dropdown-item"
                onClick={() => {
                  onEdit(category);
                  setSelectedCategoryId(id);
                }}>
                Edit
              </button>
            </li>
            <li>
              <button class="dropdown-item" onClick={deleteCategory}>
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
