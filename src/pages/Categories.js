import React, { useState, useEffect } from "react";
import api from "../Services/Apis";
import "../styles/Categories.css";

import {
  AddNewButton,
  CategoriesCard,
  Header,
  Input,
  SelectInput,
} from "../components";

const Categories = () => {
  const onEdit = () => {
    const btn = document.getElementById("openModalBtn");
    btn.click();
  };

  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const res = await api.get("/api/v1/category");
    setCategories(res.data);
  };

  const creatCategory = async (nam) => {
    const res = await api.get("/api/v1/category");
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Header title="Categories" />
      <div className="category-modal-btn--wrapper">
        <AddNewButton title="Add New Category">
          <Input
            placeholder="Title"
            label="Title"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            top="0px"
            fontSize="14px"
          />
          <Input
            placeholder="Sub Title"
            label="Sub Title"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            fontSize="14px"
          />

          <SelectInput label="Color">
            <option value="1">Red</option>
            <option value="2">Blue</option>
            <option value="3">Green</option>
          </SelectInput>
        </AddNewButton>
      </div>
      {categories.map((card, index) => (
        <CategoriesCard
          key={index}
          title={`${card.name} ${card.subHeading}`}
          bgColor={card.color}
          onEdit={onEdit}
          id={card._id}
          getCategories={getCategories}
        />
      ))}
    </div>
  );
};
export default Categories;
