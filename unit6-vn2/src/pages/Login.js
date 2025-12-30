import React from "react";
import "../css/login.css";


const Login = () => {

    return (
        <div>
            <div className="materialContainer">
                <div className="box">
                    <div className="title">LOGIN</div>
                    <div className="input">
                        <input type="text" name="name" id="name" placeholder="Username" />
                        <span className="spin"></span>
                    </div>
                    <div className="input">
                        <input type="password" name="pass" id="pass" placeholder="Password" />
                        <span className="spin"></span>
                    </div>
                    <div className="button login">
                        <button>Login</button>
                    </div>
                    <a href="" className="pass-forgot">Forgot your password?</a>

                    <p>Bạn chưa đăng nhập</p>
                </div>
            </div>
        </div>

    )
}

export default Login;