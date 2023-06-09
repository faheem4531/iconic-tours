import React from "react";

import {
  Home,
  Login,
  Categories,
  Tours,
  Admin,
  UserProfile,
  Users,
} from "./pages";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Layout childern={<Tours />} />
    </div>
  );
}

export default App;
