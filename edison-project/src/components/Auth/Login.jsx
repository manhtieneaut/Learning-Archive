import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

import '../../assets/sass/base/base.scss';
import '../../assets/sass/auth.scss';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            criteriaMode: "all"
        }
    );
    const [values, setValues] = useState({
        userName: '',
        password: '',
    });

    const onChangeValues = (event) => {
        event.preventDefault();
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }
    const onSubmit = (event) => {
        // colRef.
        const colRef = collection(db, "users");
        getDocs(colRef).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                if (doc.data().userName === values.userName
                    && doc.data().password === values.password) {
                    alert("Login Success!");
                } else {
                    alert("Login Failure!");
                }
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="main-wrapper" >
            <div className="section-gap-120">
                <div className="user-page-block">
                    <div className="user-page-inner-block">
                        <h2 className="user-page-title">Login</h2>
                        <div>Please fill your username and password to login</div>
                        <div className="user-form-block">
                            <form id="login-form" name="login-form" data="login-form" method="get" className="user-inner-block"
                                aria-label="login-form" onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="userName" className="defaut-input-label">
                                    <strong>UserName</strong>
                                </label>
                                <input type="text" className="defaut-input-block" maxLength="256" name="userName"
                                    data-name="userName" placeholder="Type Your User Name" id="userName"
                                    defaultValue={values.userName}
                                    {...register("userName", {
                                        required: "This input is required!",
                                        minLength: {
                                            value: 6,
                                            message: "This input must exceed 6 characters!"
                                        },
                                        maxLength: {
                                            value: 256,
                                            message: "This input must not exceed 256 characters!"
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9]*$/,
                                            message: "This input must contains no special characters!"
                                        }
                                    })}
                                    onChange={onChangeValues} />
                                <ErrorMessage
                                    errors={errors}
                                    name="userName"
                                    render={({ messages }) => {
                                        return messages ? Object.entries(messages).map(([type, message]) => (
                                            <span className='error-message' key={type}>{message}</span>
                                        ))
                                            : null;
                                    }
                                    }></ErrorMessage>
                                <label htmlFor="password" className="defaut-input-label">
                                    <strong>Password</strong>
                                </label>
                                <input type="password" className="defaut-input-block" maxLength="256" name="password"
                                    data-name="password" placeholder="Type Your Password" id="password"
                                    defaultValue={values.password} {...register("password", {
                                        required: "This input is required!",
                                        minLength: {
                                            value: 6,
                                            message: "This input must exceed 6 characters!"
                                        },
                                        maxLength: {
                                            value: 256,
                                            message: "This input must not exceed 256 characters!"
                                        }
                                    })}
                                    onChange={onChangeValues} />
                                <ErrorMessage
                                    errors={errors}
                                    name="password"
                                    render={({ messages }) => {
                                        return messages ? Object.entries(messages).map(([type, message]) => (
                                            <span className='error-message' key={type}>{message}</span>
                                        ))
                                            : null;
                                    }
                                    }></ErrorMessage>
                                <input type="submit" value="Log In" data-wait="Please wait..." className="button-black-medium" />
                            </form>
                        </div>
                    </div>
                    <div className="user-bottom-block">
                        <div>Don't have account?</div>
                        <a href="/Register" className='user-bottom-link'>Register</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Login;