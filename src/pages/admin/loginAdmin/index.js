import { memo } from "react";
import { useForm } from '@mantine/form';
import { Link } from "react-router-dom";
import "./style.scss";
import LogoImg from './logo192.png';
import { Modal, Button, Image } from 'react-bootstrap';
const AdminLogin = ({ theme }) => {
    const form = useForm({
        initialValues: {
            password: '',
        }
    });
    return <>
        <div className="container col-md-4">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">

                    <div className="card">
                        <div className="card-body">

                            <div className="app-brand justify-content-center">
                                <a href="javascript:void(0);" className="app-brand-link gap-2">
                                    <Image src={LogoImg} alt='' width={"100px"} />
                                    <span className="app-brand-text demo text-body fw-bolder">administrator</span>
                                </a>
                            </div>



                            <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email or Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email-username"
                                        placeholder="Enter your email or username"
                                        autofocus
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label" for="password">Password</label>
                                        <a href="auth-forgot-password-basic.html">
                                            <small>Forgot Password?</small>
                                        </a>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            aria-describedby="password"
                                        />
                                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="remember-me" />
                                        <label className="form-check-label" for="remember-me"> Remember Me </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
};

export default memo(AdminLogin);