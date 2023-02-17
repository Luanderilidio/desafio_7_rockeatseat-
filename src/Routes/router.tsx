import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/home";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path="*" element={<>No Match</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
