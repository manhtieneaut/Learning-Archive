import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const isLogin = false;
    const navigate = useNavigate();
    const handleRedirectLogin = () => {
      setTimeout(() => {
        navigate('/Login')
      }, 3000)
    }
    if (isLogin === false)  {
      handleRedirectLogin();
    }
    return (
        <div>
            <h1 > Đây là trang chủ</h1>
        </div>
    )
}

export default Home;