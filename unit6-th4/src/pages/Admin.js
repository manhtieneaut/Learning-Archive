import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const isMember = false;
  const navigate = useNavigate();
  const handleRedirectUser = () => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }
  if (isMember === false)  {
    handleRedirectUser();
    return (
      <div>Bạn không phải thành viên nhóm này. Bạn sẽ được chuyển hướng về trang chủ sau 3 giây</div>
    )
  }



  return (
    <div>
      <h1>Đây là admin</h1>
    </div>
  )
}

export default Admin;
