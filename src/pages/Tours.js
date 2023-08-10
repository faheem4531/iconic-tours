import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import moment from "moment";
import api from "../Services/Apis";
import {
  ActiveToursCard,
  AddNewButton,
  Header,
  Input,
  SelectInput,
  Loader,
  ServiceAndTaxation,
  MultiSelect,
} from "../components";
import "../styles/Tours.css";
import dropdownArrow from "../assets/svgs/dropdown-arrow.svg";

const Tours = () => {
  const [ticketFor, setTicketFor] = useState([]);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTours, setActiveTours] = useState([]);
  const [upComingTours, setUpCommingTours] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const defaultServices = [
    {
      title: "Ticketing & Handling:",
      name: "tickingHandling",
      type: "ratio",
      value: 0,
    },
    {
      title: "Services:",
      name: "services",
      type: "ratio",
      value: 0,
    },
    {
      title: "Fuel:",
      name: "fuel",
      type: "ratio",
      value: 0,
    },
    {
      title: "Tax:",
      name: "tax",
      type: "ratio",
      value: 0,
    },
  ];

  const [services, setServices] = useState(defaultServices);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      user: [],
      startDate: moment(new Date()).format("YYYY MM DD"),
      // startDate: new Date().toISOString().split("T")[0],
      endDate: moment(new Date()).format("YYYY MM DD"),
      // endDate: new Date().toISOString().split("T")[0],
      startTime: "12:00",
      endTime: "12:00",
      upComing: false,
      totalTickets: 0,
    },
    onSubmit: async (data) => {
      setLoading(true);
      const upComingValue = data.upComing === "true" ? true : false;
      const payload = {
        ...data,
        upComing: upComingValue,
        taxation: services.map((service) => ({
          [service.name]: Number(service.value),
        })),
        availableTicket: ticketFor,
      };
      try {
        if (payload.availableTicket.length === 0)
          throw new Error("Failed to create package");
        console.log("payload", payload);
        selectedPackageId
          ? await api.put(`/api/v1/package/${selectedPackageId}`, payload)
          : await api.post("/api/v1/package", payload);
        toast(
          `Package ${selectedPackageId ? "updated" : "created"} successfully`,
          { type: "success" }
        );
        setLoading(false);
        getTours();
        setSelectedPackageId(null);
        let closeBtn = document.getElementById("closeMmodalBtn");
        closeBtn.click();
        formik.resetForm();
        setTicketFor([]);
        setServices(defaultServices);
      } catch (error) {
        setLoading(false);
        toast(error?.response?.data?.message || "Failed to create package", {
          type: "error",
        });
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      category: Yup.string().required("Category is required"),
      user: Yup.array()
        .min(1, "At least one user is required")
        .required("At least one user is required"),
      startDate: Yup.string().required("Start date is required"),
      endDate: Yup.string().required("End date is required"),
      startTime: Yup.string().required("Start time is required"),
      endTime: Yup.string().required("End time is required"),
      totalTickets: Yup.string().required("Total tickets are required"),
      upComing: Yup.boolean().required("Dropdown value is required"),
    }),
  });
  console.log("fffffffff", formik.values);
  const getTours = async () => {
    setLoading(true);
    const res = await api.get("/api/v1/package");
    setLoading(false);
    setTours(res.data);
    const activeTours = res?.data?.filter((tour) => {
      return tour.upComing === false;
    });
    const upComingTours = res?.data?.filter((tour) => {
      return tour.upComing === true;
    });

    setActiveTours(activeTours);
    setUpCommingTours(upComingTours);
  };

  const getAllCategories = async () => {
    const res = await api.get("/api/v1/category");
    console.log("dddd");
    setAllCategories(res.data);
  };

  const getUsers = async () => {
    const res = await api.get("/api/v1/user");
    setUsers(res.data);
  };

  useEffect(() => {
    getTours();
    getAllCategories();
    getUsers();
  }, []);
  const onEdit = (data) => {
    console.log("availtickssss", data);
    setTicketFor(data.availableTicket);
    formik.setFieldValue("name", data.name);
    formik.setFieldValue("category", data.category._id);
    formik.setFieldValue("user", data.user);
    formik.setFieldValue("startDate", data.startDate);
    formik.setFieldValue("endDate", data.endDate);
    formik.setFieldValue("startTime", data.startTime);
    formik.setFieldValue("endTime", data.endTime);
    formik.setFieldValue("totalTickets", data.totalTickets);
    formik.setFieldValue("upComing", data.upComing);
    const btn = document.getElementById("openModalBtn");
    console.log("openModalBtn", btn);
    btn.click();
  };

  const handleRemoveTicket = (index) => {
    setTicketFor((prev) => prev.filter((_, i) => i !== index));
  };

  const Availableticket = ({ type, onClose }) => {
    return (
      <div className="row">
        <div className="col-6">
          <Input
            placeholder="Original Price"
            value={type.originalPrice}
            label={type.name}
            color="var(--dark-orange-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            type="number"
            border="1px solid var(--bs-border-color)"
            handleChange={(event) => {
              const index = ticketFor.findIndex((el) => el.name === type.name);
              const deepCopy = [...ticketFor];
              deepCopy[index].originalPrice = parseInt(event.target.value);
              setTicketFor(deepCopy);
            }}
          />
        </div>
        <div className="col-6 available-ticket-com">
          <div onClick={onClose} className="close-icon-tours">
            X
          </div>
          <Input
            placeholder="Discounted Price"
            color="var(--dark-orange-color)"
            value={type.discount}
            handleChange={(event) => {
              const index = ticketFor.findIndex((el) => el.name === type.name);
              const deepCopy = [...ticketFor];
              deepCopy[index].discount = parseInt(event.target.value);
              setTicketFor(deepCopy);
            }}
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            type="number"
            top="38px"
            fontSize="14px"
            straric
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header title="Tours" />
      <div className="active-tours-wrapper">
        <div className="num-of-active-tours">
          Active Tours{`(${activeTours.length})`}
        </div>
        <AddNewButton
          loading={loading}
          title={selectedPackageId ? "Update Tour" : "Add Tour"}
          onClose={() => {
            setSelectedPackageId(null);
            formik.resetForm();
            console.log("pppppppppppss");
          }}
          onClick={formik.handleSubmit}
          selectedCategoryId={selectedPackageId}>
          <Input
            placeholder="Downtown"
            label="Tour Name"
            name="name"
            value={formik?.values?.name}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            color="var(--dark-orange-color)"
            size="14px"
            labelSize="13px"
            height="38px"
            radius="6px"
            border="1px solid var(--bs-border-color)"
            top="0px"
            type="text"
          />
          {formik.touched.name && formik.errors?.name && (
            <div className="error-message">{formik.errors.name}</div>
          )}
          <SelectInput
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            value={formik.values.tours}
            label="Tours"
            name="upComing"
            color="var(--dark-orange-color)">
            <option value={false}>Active Tour</option>
            <option value={true}>Upcoming Tours</option>
          </SelectInput>
          {formik.touched.upComing && formik.errors.upComing && (
            <div className="error-message">{formik.errors.upComing}</div>
          )}
          <SelectInput
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.category}
            label="Add To category"
            name="category"
            color="var(--dark-orange-color)">
            <option disabled key={"select"} value={""}>
              Select Category
            </option>
            {allCategories?.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </SelectInput>
          {formik.touched.category && formik.errors.category && (
            <div className="error-message">{formik.errors.category}</div>
          )}
          <div className="row">
            <div className="col-6">
              <Input
                label="Start Date"
                name="startDate"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.startDate}
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="date"
              />
            </div>
            <div className="col-6">
              <Input
                label="End Date"
                name="endDate"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.endDate}
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="date"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Input
                placeholder="17:00"
                label="Start Time"
                name="startTime"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.startTime}
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="time"
              />
            </div>
            <div className="col-6">
              <Input
                placeholder="17:00"
                label="End Time"
                name="endTime"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.endTime}
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="time"
              />
            </div>
          </div>
          <MultiSelect
            options={users}
            handleChange={(value) => formik.setFieldValue("user", value)}
            handleBlur={() =>
              formik.setTouched({ ...formik.touched, user: true })
            }
            value={formik.values.user}
            name="user"
          />
          {formik.touched.user && formik.errors.user && (
            <div className="error-message">{formik.errors.user}</div>
          )}
          <div className="row">
            <div className="col-6">
              <Input
                placeholder="500"
                label="Total No. of Tickets"
                name="totalTickets"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.totalTickets}
                color="var(--dark-orange-color)"
                size="14px"
                labelSize="13px"
                height="38px"
                radius="6px"
                border="1px solid var(--bs-border-color)"
                type="number"
                fontSize="14px"
              />
              {formik.touched.totalTickets && formik.errors.totalTickets && (
                <div className="error-message">
                  {formik.errors.totalTickets}
                </div>
              )}
            </div>
            <div className="col-6">
              <SelectInput
                handleChange={(e) =>
                  setTicketFor((prev) => {
                    if (
                      prev.findIndex((el) => el.name === e.target.value) > -1
                    ) {
                      return prev;
                    }

                    return [
                      ...prev,
                      { name: e.target.value, originalPrice: "", discount: "" },
                    ];
                  })
                }
                label="Tickets Available For"
                color="var(--dark-orange-color)">
                <option value="0" disabled selected>
                  Adult, Child, Sinor ....{" "}
                </option>
                <option value="child">Child</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
                <option value="military">Military</option>
              </SelectInput>
            </div>
            <div className="col-12">
              {ticketFor.map(
                (type, index) =>
                  Availableticket({
                    key: index,
                    type,
                    setTicketFor,
                    onClose: () => handleRemoveTicket(index),
                  })
                // <Availableticket
                //   key={index}
                //   type={type}
                //   setTicketFor={setTicketFor}
                //   onClose={() => handleRemoveTicket(index)}
                // />
              )}
            </div>
            <div className="col-12">
              <div
                className="tours-collapse"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample">
                <div className="services-and-taxation">
                  Services & Taxation{" "}
                  <span style={{ color: "#EC3237" }}>*</span>
                </div>
                <img
                  className="dropdown-arrow"
                  src={dropdownArrow}
                  alt="icon"
                />
              </div>

              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <ServiceAndTaxation
                    title={services[0].title}
                    type={services[0].type}
                    value={services[0].value}
                    setSelectType={(type) => {
                      const deepCopy = [...services];
                      deepCopy[0].type = type;
                      setServices(deepCopy);
                    }}
                    setValue={(value) => {
                      const deepCopy = [...services];
                      deepCopy[0].value = value;
                      setServices(deepCopy);
                    }}
                  />
                  <ServiceAndTaxation
                    title={services[1].title}
                    type={services[1].type}
                    value={services[1].value}
                    setSelectType={(type) => {
                      const deepCopy = [...services];
                      deepCopy[1].type = type;
                      setServices(deepCopy);
                    }}
                    setValue={(value) => {
                      const deepCopy = [...services];
                      deepCopy[1].value = value;
                      setServices(deepCopy);
                    }}
                  />
                  <ServiceAndTaxation
                    title={services[2].title}
                    type={services[2].type}
                    value={services[2].value}
                    setSelectType={(type) => {
                      const deepCopy = [...services];
                      deepCopy[2].type = type;
                      setServices(deepCopy);
                    }}
                    setValue={(value) => {
                      const deepCopy = [...services];
                      deepCopy[2].value = value;
                      setServices(deepCopy);
                    }}
                  />
                  <ServiceAndTaxation
                    title={services[3].title}
                    type={services[3].type}
                    value={services[3].value}
                    setSelectType={(type) => {
                      const deepCopy = [...services];
                      deepCopy[3].type = type;
                      setServices(deepCopy);
                    }}
                    setValue={(value) => {
                      const deepCopy = [...services];
                      deepCopy[3].value = value;
                      setServices(deepCopy);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </AddNewButton>
      </div>
      {!loading ? (
        <div className="active-tours-wrap-container">
          {activeTours?.length !== 0 ? (
            activeTours?.map((card, index) => (
              <ActiveToursCard
                onEdit={onEdit}
                key={index}
                title={card?.category?.name}
                subTitle={card?.name}
                time={card?.startTime}
                date={card?.startDate}
                totalTickets={card?.totalTickets}
                remainingTickets={card.remainingTickets}
                setSelectedPackageId={setSelectedPackageId}
                bgColor={card?.category?.color}
                card={card}
                id={card._id}
                getTours={getTours}
              />
            ))
          ) : (
            <div className="all-tours-error-message">
              No active tours available
            </div>
          )}
        </div>
      ) : (
        <div className="all-tousr-loader-wrapper">
          <Loader />
        </div>
      )}
      <div className="tours-horizontal-border" />
      <div className="num-of-active-tours upcoming-tours">
        Upcoming Tours{`(${upComingTours.length})`}
      </div>
      {!loading ? (
        <div className="active-tours-wrap-container">
          {upComingTours.length !== 0 ? (
            upComingTours?.map((card, index) => (
              <ActiveToursCard
                onEdit={onEdit}
                key={index}
                title={card.category.name}
                subTitle={card.name}
                time={card.startTime}
                date={card.startDate}
                totalTickets={card.totalTickets}
                remainingTickets={card.remainingTickets}
                bgColor={card.category.color}
                card={card}
                id={card._id}
                getTours={getTours}
                setSelectedPackageId={setSelectedPackageId}
              />
            ))
          ) : (
            <div className="all-tours-error-message">
              No upcoming tours available
            </div>
          )}
        </div>
      ) : (
        <div className="all-tousr-loader-wrapper">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Tours;
