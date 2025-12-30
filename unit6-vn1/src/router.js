import React from "react";

import { Route, Routes } from "react-router-dom";

import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import Home from "./pages/Home";


const RouterModule = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/Admin" element={<Admin />} ></Route>
            <Route path="/Product/:ProductId" element={<ProductDetail />} ></Route>
        </Routes>
    )
}

export default RouterModule;