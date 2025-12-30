import React from "react";

import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Admin = React.lazy(() => import("./pages/Admin"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

const RouterModule = () => {
    return (
        <Routes>
            <Route path="/" element={<React.Suspense fallback="loading"><Home /></React.Suspense>} ></Route>
            <Route path="/Admin" element={<React.Suspense fallback="loading"><Admin/></React.Suspense>} ></Route>
            <Route path="/Product/:ProductId" element={<React.Suspense fallback="loading"><ProductDetail/></React.Suspense>} ></Route>
        </Routes>
    )
}

export default RouterModule;