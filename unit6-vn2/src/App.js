import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Admin = React.lazy(() => import("./pages/Admin"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Login = React.lazy(() => import("./pages/Login"));



function App() {
    return (
      <div>
        <nav>
          <ul className="menu">
            <li><Link to={"/"}>Trang chủ</Link></li>
            <li><Link to={"/Admin"}>Admin</Link></li>
            <li><Link to={"/Product/0"}>Chi tiết sản phẩm</Link></li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<React.Suspense fallback="loading"><Home /></React.Suspense>} ></Route>
            <Route path="/Admin" element={<React.Suspense fallback="loading"><Admin/></React.Suspense>} ></Route>
            <Route path="/Product/:ProductId" element={<React.Suspense fallback="loading"><ProductDetail/></React.Suspense>} ></Route>
            <Route path="/Login" element={<React.Suspense fallback="loading"><Login/></React.Suspense>} ></Route>
        </Routes>
      </div>
    )
  }

export default App;