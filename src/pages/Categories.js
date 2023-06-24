import React, { useState, useEffect } from "react";
import api from "../Services/Apis";
import "../styles/Categories.css";

import {
  AddNewButton,
  CategoriesCard,
  Header,
  Input,
  Loader,
  SelectInput,
} from "../components";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Categories = () => {
  const onEdit = (category) => {
    formik.setFieldValue("name", category.name);
    formik.setFieldValue("subHeading", category.subHeading);
    formik.setFieldValue("color", category.color);
    const btn = document.getElementById("openModalBtn");
    btn.click();
  };

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const getCategories = async () => {
    setLoading(true);
    const res = await api.get("/api/v1/category");
    setLoading(false);
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      subHeading: "",
      color: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Title is required"),
      subHeading: Yup.string().required("Sub Title is required"),
      color: Yup.string().required("Color is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        selectedCategoryId
          ? await api.put(`/api/v1/category/${selectedCategoryId}`, values)
          : await api.post("/api/v1/category", values);
        toast(
          `Category ${selectedCategoryId ? "updated" : "created"} successfully`,
          {
            type: "success",
          }
        );
        getCategories();
        let closeBtn = document.getElementById("closeMmodalBtn");
        closeBtn.click();
        formik.resetForm();
      } catch (error) {
        toast(error.response.data.message || "Failed to create category", {
          type: "error",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  const onClose = () => {
    setSelectedCategoryId(null);
  };

  return (
    <div>
      <Header title="Categories" />
      <div className="category-modal-btn--wrapper">
        <AddNewButton
          title="Add New Category"
          loading={loading}
          onClick={formik.handleSubmit}
          onClose={onClose}
          selectedCategoryId={selectedCategoryId}>
          <Input
            placeholder="Title"
            label="Title"
            name="name"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            top="0px"
            fontSize="14px"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div>{formik.errors.name}</div>
          )}
          <Input
            placeholder="Sub Title"
            label="Sub Title"
            name="subHeading"
            color="var(--blue-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            fontSize="14px"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            value={formik.values.subHeading}
          />
          {formik.touched.subHeading && formik.errors.subHeading && (
            <div>{formik.errors.subHeading}</div>
          )}
          <SelectInput
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            value={formik.values.color}
            label="Color"
            name="color">
            <option value="#17B890">Green</option>
            <option value="#253DF0">Blue</option>
            <option value="#F5D02C">Yellow</option>
            <option value="#FF5D73">Pink</option>
          </SelectInput>
          {formik.touched.color && formik.errors.color && (
            <div>{formik.errors.color}</div>
          )}
        </AddNewButton>
      </div>
      {!loading ? (
        <div>
          {categories.map((card, index) => (
            <CategoriesCard
              key={index}
              title={`${card.name} ${card.subHeading}`}
              bgColor={card.color}
              onEdit={onEdit}
              setSelectedCategoryId={setSelectedCategoryId}
              id={card._id}
              category={card}
              getCategories={getCategories}
            />
          ))}
        </div>
      ) : (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
    </div>
  );
};
export default Categories;
