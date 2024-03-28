import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sport from "./Sport";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
