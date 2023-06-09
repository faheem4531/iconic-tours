import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Login,
  Categories,
  Tours,
  Admin,
  UserProfile,
  Users,
} from "./pages";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/users" index element={<Users />} />
          <Route path="/categories" index element={<Categories />} />
          <Route path="/tours" index element={<Tours />} />
          <Route path="/admin" index element={<Admin />} />
          <Route path="/userProfile" index element={<UserProfile />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
