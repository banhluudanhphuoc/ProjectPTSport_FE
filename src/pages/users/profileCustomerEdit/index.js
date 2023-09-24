import React, { useState, memo } from "react";
import "./style.scss";
import { DateInput } from '@mantine/dates';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { modals } from '@mantine/modals';
import axios from "axios";
import {
    PasswordInput,
    Group,
    Button,
    Box,
    Card,
    TextInput,
    PinInput,
    Grid,
    Image,
    Text,
    ThemeIcon,
    List,
    Tabs,
    rem,
    NativeSelect,
    Avatar,
    Select,
} from '@mantine/core';
import {
    AiOutlineEdit,
    AiOutlineDelete,
    AiOutlineProfile,
    AiOutlineNotification,
    AiTwotoneEye,
    AiTwotoneStar,
    AiFillCheckCircle,
    AiOutlineUser,
} from "react-icons/ai";
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Link } from "react-router-dom";
const ProfileCustomerEdit = () => {

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


    const openConfirmationModal = () => {
        try {
            form.validate();
            console.log("Form values:", form.validate());
            console.log("Form values:", form.values);
            console.log("Validation results:", form.errors);
            console.log("form.formValid :", form.formValid);
            if (form.formValid) {
                console.log("Form is valid.Opening modal."); // Add this line for debugging
                modals.openConfirmModal({
                    title: 'Vui lòng xác nhận lại',
                    children: (
                        <Text size="sm">
                            Bạn có muốn cập nhật lại thông tin không?
                        </Text>
                    ),
                    labels: { confirm: 'Có', cancel: 'Không' },
                    onCancel: () => console.log('Cancel'),
                    onConfirm: () => console.log('onConfirm'),
                    // onConfirm: () => handleSubmit(), // Handle form submission on confirmation
                });
            } else {
                console.log("Form is not valid."); // Add this line for debugging
            }
        } catch (error) {
            console.log(error);
        }

    };
    const handleSubmit = async () => {
        try {
            // Send form data as JSON to the server
            const response = await axios.post("http://localhost:8080/api/v1/signup", form.values);

            // Handle the server response (e.g., show success message)
            console.log("Server response:", response.data);

            // Show a success notification
            notifications.show({
                color: "teal",
                title: "Lưu thành công",
                message: "Thông tin của bạn đã được cập nhật.",
                icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
            });

            // You can also redirect the user to a different page on success
            // Example: history.push("/success");
        } catch (error) {
            // Handle any errors that occur during the request (e.g., show an error message)
            console.error("Error:", error);

            // Show an error notification
            notifications.show({
                color: "red",
                title: "Lỗi",
                message: "Có lỗi xảy ra khi cập nhật thông tin.",
            });
        }
    };


    return <>
        <div className="container">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <div className="title-profile-customer">
                    <h3 >Xin chào Anh/Chị : Tam</h3>
                </div>
                <Grid>
                    <Grid.Col md="3.5" className="profile_customer_left" mt="sm">
                        <div className="profile_customer_left_top">
                            <div >
                                <Avatar variant="transparent" radius="xl" size="xl" color="cyan" src="" />
                            </div>
                            <div >
                                <Text mt="sm" ml="sm">Số điện thoại hiện tại: 0123456789</Text>

                            </div>

                        </div>
                        <div className="profile_customer_left_down">

                        </div>
                    </Grid.Col>
                    <Grid.Col md="8.5">
                        <Card>
                            <div className="title-login-user">
                                <h1 >Cập nhật thông tin</h1>
                            </div>
                            <Box maw={800} mx="auto">
                                <form onSubmit={openConfirmationModal}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                                        <Grid>
                                            <Grid.Col md={6}>
                                                <TextInput
                                                    label="Tên đăng nhập"
                                                    placeholder="Tên đăng nhập"
                                                    withAsterisk {...form.getInputProps('name')}
                                                    id="name"
                                                />
                                                <PasswordInput
                                                    label="Mật khẩu"
                                                    mt="md"
                                                    placeholder="Mật khẩu "
                                                    withAsterisk
                                                    {...form.getInputProps('password')}
                                                    id="password"
                                                />
                                                <PasswordInput
                                                    mt="md"
                                                    label="Nhập lại mật khẩu"
                                                    placeholder="Nhập lại mật khẩu"
                                                    {...form.getInputProps('confirmPassword')}
                                                    withAsterisk
                                                />
                                            </Grid.Col>
                                            <Grid.Col md={6}>
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
                                                    id="date_of_birth"
                                                    {...form.getInputProps('date_of_birth')}
                                                    withAsterisk
                                                />
                                                <Select
                                                    placeholder="Chọn giới tính"
                                                    label="Giới tính"
                                                    mt="md"
                                                    data={['Nam', 'Nữ', 'Khác']}
                                                    {...form.getInputProps('gender')}
                                                    id="gender"
                                                    withAsterisk
                                                />

                                            </Grid.Col>
                                        </Grid>
                                        <Group mt="md" className="save_button">
                                            <Button type="submit" >
                                                Lưu thông tin
                                            </Button>
                                        </Group>
                                    </Card>
                                </form>
                            </Box>
                        </Card>
                    </Grid.Col>
                </Grid>{/* Confirmation Dialog */}

            </Card>

        </div>
    </>
};

export default memo(ProfileCustomerEdit);