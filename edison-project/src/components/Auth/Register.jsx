import { useState } from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

import '../../assets/sass/base/base.scss';
import '../../assets/sass/auth.scss';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            criteriaMode: "all"
        }
    );
    const [values, setValues] = useState({
        name: '',
        email: '',
        userName: '',
        password: '',
        rePassword: '',
        isRead: false
    });

    const onChangeValues = (event) => {
        if (event.target.name === 'registerTerm') {
            setValues({
                ...values,
                [event.target.name]: !values.isRead,
            });
        } else {
            event.preventDefault();
            setValues({
                ...values,
                [event.target.name]: event.target.value
            });
        }
    }

    const onSubmit = (event) => {
        alert(values.name + " " + values.email + " " + values.userName + " " + values.password + " " + values.rePassword);
    }

    return (
        <div className="main-wrapper" >
            <div className="section-gap-120">
                <div className="user-page-block">
                    <div className="user-page-inner-block">
                        <h2 className="user-page-title">Sign Up</h2>
                        <div>Please fill form to register</div>
                        <div className="user-form-block">
                            <form id="register-form" name="email-form" data="register-form" method="get" className="user-inner-block"
                                aria-label="register-form" onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="register-name" className="defaut-input-label">
                                    <strong>Your Name</strong>
                                </label>
                                <input type="text" className="defaut-input-block" maxLength="256" name="register-name" data-name="register-name"
                                    placeholder="Type Your Name" id="register-name"
                                    defaultValue={values.name}
                                    {...register("name", {
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
                                            value: /^[a-zA-Z0-9 ]*$/,
                                            message: "This input must contains no special characters!"
                                        },
                                    })}
                                    onChange={onChangeValues} />
                                <ErrorMessage
                                    errors={errors}
                                    name="name"
                                    render={({ messages }) => {
                                        return messages ? Object.entries(messages).map(([type, message]) => (
                                            <span className='error-message' key={type}>{message}</span>
                                        ))
                                            : null;
                                    }
                                    }></ErrorMessage>
                                <label htmlFor="register-email" className="defaut-input-label">
                                    <strong>Email Address</strong>
                                </label>
                                <input type="register-email" className="defaut-input-block " maxLength="256" name="register-email"
                                    data-name="register-email" placeholder="Type Your Email" id="register-email"
                                    defaultValue={values.email}
                                    {...register("email", {
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
                                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                            message: "Incorrect email format!"
                                        }
                                    })}
                                    onChange={onChangeValues} />
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
                                    render={({ messages }) => {
                                        return messages ? Object.entries(messages).map(([type, message]) => (
                                            <span className='error-message' key={type}>{message}</span>
                                        ))
                                            : null;
                                    }
                                    }></ErrorMessage>
                                <label htmlFor="register-username" className="defaut-input-label">
                                    <strong>User Name</strong>
                                </label>
                                <input type="text" className="defaut-input-block " maxLength="256" name="register-username"
                                    data-name="register-username" placeholder="Type Your User Name" id="register-username"
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
                                        },
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
                                <label htmlFor="register-password" className="defaut-input-label">
                                    <strong>Password</strong>
                                </label>
                                <input type="password" className="defaut-input-block" maxLength="256" name="register-password"
                                    data-name="register-password" placeholder="Type Your Password" id="register-password"
                                    defaultValue={values.password}
                                    {...register("password", {
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
                                <label htmlFor="register-password-retype" className="defaut-input-label">
                                    <strong>Retype Password</strong>
                                </label>
                                <input type="password" className="defaut-input-block" maxLength="256" name="register-password-retype"
                                    data-name="register-password-retype" placeholder="Retype Your Password" id="register-password-retype"
                                    defaultValue={values.rePassword}
                                    {...register("rePassword", {
                                        required: "This input is required!",
                                        minLength: {
                                            value: 6,
                                            message: "This input must exceed 6 characters!"
                                        },
                                        maxLength: {
                                            value: 256,
                                            message: "This input must not exceed 256 characters!"
                                        },
                                        validate: {
                                            samePassword: value => value === values.password ||
                                                "Password & RetypePassword must be the same!"
                                        }
                                    })}
                                    onChange={onChangeValues} />
                                <ErrorMessage
                                    errors={errors}
                                    name="rePassword"
                                    render={({ messages }) => {
                                        return messages ? Object.entries(messages).map(([type, message]) => (
                                            <span className='error-message' key={type}>{message}</span>
                                        ))
                                            : null;
                                    }
                                    }></ErrorMessage>
                                <input type="submit" value="Register" data-wait="Please wait..."
                                    className="button-black-medium" />
                            </form>
                        </div>
                    </div>
                    <div className="user-bottom-block">
                        <input
                            type="checkbox"
                            name="register-term"
                            id="register-term"
                            className="register-term"
                            defaultValue={values.isRead}
                            {...register("registerTerm", {
                                validate: {
                                    isRead: value => value === true ||
                                        "You must agree with our term!"
                                },
                            })}
                            onChange={onChangeValues} />
                        <label htmlFor="register-term" className="defaut-input-label">
                            <strong>I have read and agree to our term?</strong>
                        </label>
                        <a href="/Terms" className='user-bottom-link'>Terms & Conditions</a>
                        <ErrorMessage
                            errors={errors}
                            name="registerTerm"
                            render={({ messages }) => {
                                return messages ? Object.entries(messages).map(([type, message]) => (
                                    <span className='error-message' key={type}>{message}</span>
                                ))
                                    : null;
                            }
                            }></ErrorMessage>
                    </div>
                    <div className="user-bottom-block">
                        <div>Have an account?</div>
                        <a href="/Login" className='user-bottom-link'>Login</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register;