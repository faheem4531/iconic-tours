import React from "react";
import "../styles/Categories.css";

import {
  AddNewButton,
  CategoriesCard,
  Header,
  Input,
  SelectInput,
} from "../components";

const categoriesCards = [
  {
    title: "DOWNTOWN TOUR",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "NIGHT TOUR",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "ONE DAY PASS",
    bgColor: "var(--light-green-color)",
  },
  {
    title: "2 DAYS PASS",
    bgColor: "var(--light-green-color)",
  },
];

const Categories = () => {
  return (
    <div>
      <Header title="Categories" />
      <div className="category-modal-btn--wrapper">
        <AddNewButton title="Add New Category">
          <Input
            placeholder="Name"
            label="Name"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            top="0px"
            fontSize="14px"
          />
          <SelectInput label="Assign To">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </SelectInput>
          <SelectInput label="Color">
            <option value="1">Red</option>
            <option value="2">Blue</option>
            <option value="3">Green</option>
          </SelectInput>
        </AddNewButton>
      </div>
      {categoriesCards.map((card, index) => (
        <CategoriesCard key={index} title={card.title} bgColor={card.bgColor} />
      ))}
    </div>
  );
};
export default Categories;
