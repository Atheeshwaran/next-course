"use client";

import Dashboard from "./(protected)/dashboard/page";
import CssBaseline from "@mui/material/CssBaseline";
import "react-toastify/dist/ReactToastify.css";

const AppClient = () => {
  return (
    <>
      <CssBaseline />
      <Dashboard />
    </>
  );
};

export default AppClient;
