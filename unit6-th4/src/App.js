import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

import RouterModule from "./router";



function App() {



  return (
    <div>
      <nav>
        <ul className="menu">
          <li><Link to={"/"}>Trang chủ</Link></li>
          <li><Link to={"/Admin"}>Admin</Link></li>
          <li><Link to={"/Product"}>Chi tiết sản phẩm</Link></li>
        </ul>
      </nav>

     <RouterModule/>
    </div>
  );
}

export default App;