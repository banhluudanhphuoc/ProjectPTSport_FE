import { memo, useState } from "react";
import "./style.scss";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import {
    PasswordInput,
    TextInput,
    Text,
    rem,
    NativeSelect,
} from '@mantine/core';
import LoginImg from '../../../style/img/login.jpg';
import { DateInput } from '@mantine/dates';
import { IconCheck } from '@tabler/icons-react';
import axios from "axios";
import Banner from "../../users/theme/banner";
import { Container, Col, Row } from "react-bootstrap";

const RegisterPage = () => {

    const form = useForm({
        initialValues: {
            password: '',
            confirmPassword: '',
            name: '',
            email: '',
            phone_number: '',
            full_name: '',
            date_of_birth: '',
            gender: '',
        },

        validate: {
            password: (value) => (value.length < 8 ? 'Mật khẩu phải trên 8 kí tự' : null),
            confirmPassword: (value, values) => value !== values.password ? 'Nhập lại mật khẩu không giống mật khẩu ở trên' : null,
            name: (value) => {
                // Sử dụng regex để kiểm tra tên
                const regex = /^[a-zA-Z0-9]+$/; // Chấp nhận chữ cái và số
                if (!regex.test(value)) {
                    return "Tên không được chứa khoảng trắng hoặc ký tự đặc biệt";
                }
                return null; // Hợp lệ
            },
            email: isEmail('Email không hợp lệ !'),
            phone_number: (value) => (value.length < 10 || value.length > 10 ? 'Số điện thoại gồm 10 số !' : null),
            full_name: isNotEmpty('Vui lòng nhập Họ và Tên '),
            gender: isNotEmpty('Vui lòng chọn giới tính'),
            date_of_birth: isNotEmpty('Vui lòng nhập Ngày sinh'),
        },
    });

    const handleSubmit = async () => {
        try {
            // Send form data as JSON to the server
            const response = await axios.post("http://localhost:8080/api/v1/signup", form.values);

            // Handle the server response (e.g., show success message)
            console.log("Server response:", response.data);

            // Show a success notification


            // You can also redirect the user to a different page on success
            // Example: history.push("/success");
        } catch (error) {
            // Handle any errors that occur during the request (e.g., show an error message)
            console.error("Error:", error);

        }
    };

    return <>
        <Banner />
        <section class="login_box_area section_gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_box_img">
                            <img class="img-fluid" src={LoginImg} alt="" />
                            <div class="hover">
                                <h4>Do you already have an account ?</h4>
                                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                <a class="primary-btn" href="registration.html">Login</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 container">
                        <div class="row ml-5">
                            <h3>Register</h3>
                            <form class="row login_form" id="contactForm" novalidate="novalidate" >

                                <Col md='6'>
                                    <TextInput
                                        label="Tên đăng nhập"
                                        placeholder="Tên đăng nhập"
                                        withAsterisk {...form.getInputProps('name')}

                                        id="username"
                                    />
                                    <PasswordInput
                                        label="Mật khẩu"
                                        mt="md"
                                        placeholder="Mật khẩu "
                                        className="password-user"
                                        {...form.getInputProps('password')}
                                        id="password"
                                    />
                                    <PasswordInput
                                        mt="md"
                                        label="Nhập lại mật khẩu"
                                        placeholder="Nhập lại mật khẩu"
                                        {...form.getInputProps('confirmPassword')}
                                    />

                                </Col>
                                <Col md='6'>
                                    <TextInput
                                        label="Họ và tên"
                                        placeholder="Họ và tên"
                                        withAsterisk
                                        {...form.getInputProps('full_name')}
                                        id="full_name"
                                    />

                                    <TextInput
                                        label="Email"
                                        placeholder="Your email"
                                        withAsterisk
                                        mt="md"
                                        {...form.getInputProps('email')}
                                        id="email"
                                    />
                                    <TextInput
                                        label="Số điện thoại"
                                        placeholder="Số điện thoại"
                                        withAsterisk
                                        mt="md"
                                        {...form.getInputProps('phone_number')}
                                        id="phone_number"
                                    />
                                    <DateInput
                                        valueFormat="DD/MM/YYYY"
                                        mt="md"
                                        label="Ngày sinh"
                                        placeholder="Ngày sinh"
                                        {...form.getInputProps('date_of_birth')}
                                        id="date_of_birth"
                                    />
                                    <NativeSelect
                                        rightSection
                                        label="Giới tính"
                                        mt="md"
                                        data={['Nam', 'Nữ', 'Khác']}
                                        {...form.getInputProps('gender')}
                                        id="gender"
                                    />
                                </Col>
                                <div class="col-md-12 form-group mt-5">
                                    <button type="submit" value="submit" class="primary-btn">Register</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default memo(RegisterPage);