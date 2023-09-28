import { memo } from "react";
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box, Card, TextInput } from '@mantine/core';
import { Link } from "react-router-dom";
import "./style.scss";
import LogoImg from './logo192.png';
const AdminLogin = ({ theme }) => {
    const form = useForm({
        initialValues: {
            password: '',
        }
    });
    return <>
        <div class="container col-md-4">
            <div class="authentication-wrapper authentication-basic container-p-y">
                <div class="authentication-inner">

                    <div class="card">
                        <div class="card-body">

                            <div class="app-brand justify-content-center">
                                <a href="javascript:void(0);" class="app-brand-link gap-2">
                                    <img src={LogoImg} alt='' width={"100px"} />
                                    <span class="app-brand-text demo text-body fw-bolder">administrator</span>
                                </a>
                            </div>



                            <form id="formAuthentication" class="mb-3" action="index.html" method="POST">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email or Username</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="email"
                                        name="email-username"
                                        placeholder="Enter your email or username"
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 form-password-toggle">
                                    <div class="d-flex justify-content-between">
                                        <label class="form-label" for="password">Password</label>
                                        <a href="auth-forgot-password-basic.html">
                                            <small>Forgot Password?</small>
                                        </a>
                                    </div>
                                    <div class="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            class="form-control"
                                            name="password"
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            aria-describedby="password"
                                        />
                                        <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="remember-me" />
                                        <label class="form-check-label" for="remember-me"> Remember Me </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
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