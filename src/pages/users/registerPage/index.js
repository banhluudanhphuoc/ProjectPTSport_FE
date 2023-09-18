import { memo, useState } from "react";
import "./style.scss";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { PasswordInput, Group, Button, Box, Card, TextInput, Grid, NativeSelect } from '@mantine/core';
import { DateInput } from '@mantine/dates';
const RegisterPage = () => {

    const form = useForm({
        initialValues: {
            password: '',
            confirmPassword: '',
            name: '',
            address: '',
            email: '',
            phonenumber: '',
            fullname: '',
        },

        validate: {
            confirmPassword: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
            name: hasLength({ min: 2, max: 10 }, 'Nhập tên !!! (Ít nhất 2 kí tự))'),
            address: isNotEmpty('Nhập địa chỉ !!!'),
            email: isEmail('Email không hợp lệ !!!'),
            phonenumber: isNotEmpty('Nhập số điện thoại !!!'),
            fullname: isNotEmpty('Nhập Họ và tên !!!'),
        },
    });
    return <>
        <div className="container">
            <div className="login-user">
                <Card>
                    <div className="title-login-user">
                        <h1 >Đăng kí</h1>
                    </div>
                    <Box maw={800} mx="auto">
                        <form onSubmit={form.onSubmit((values) => console.log(values))}>
                            <Card>
                                <Grid>
                                    <Grid.Col md={6}>
                                        <TextInput
                                            label="Tên đăng nhập"
                                            placeholder="Tên đăng nhập (Username)"
                                            withAsterisk {...form.getInputProps('name')}
                                            className="username"
                                        />
                                        <PasswordInput
                                            label="Mật khẩu"
                                            mt="md"
                                            placeholder="Mật khẩu (Password)"
                                            className="password-user"
                                            {...form.getInputProps('password')}
                                        />
                                        <PasswordInput
                                            mt="md"
                                            label="Confirm password"
                                            placeholder="Confirm password"
                                            {...form.getInputProps('confirmPassword')}
                                        />
                                    </Grid.Col>
                                    <Grid.Col md={6}>
                                        <TextInput
                                            label="Họ và tên"
                                            placeholder="Họ và tên"
                                            withAsterisk
                                            {...form.getInputProps('fullname')}
                                        />
                                        <TextInput
                                            label="Địa chỉ"
                                            placeholder="Địa chỉ"
                                            withAsterisk
                                            mt="md"
                                            {...form.getInputProps('address')}
                                        />
                                        <TextInput
                                            label="Email"
                                            placeholder="Your email"
                                            withAsterisk
                                            mt="md"
                                            {...form.getInputProps('email')}
                                        />
                                        <TextInput
                                            label="Số điện thoại"
                                            placeholder="Số điện thoại"
                                            withAsterisk
                                            mt="md"
                                            {...form.getInputProps('phonenumber')}
                                        />
                                        <DateInput
                                            valueFormat="DD/MM/YYYY"
                                            mt="md"
                                            label="Date input"
                                            placeholder="Date input"
                                        />
                                        <NativeSelect
                                            label="Giới tính"
                                            mt="md"
                                            data={['Nam', 'Nữ', 'Khác']}

                                        />
                                    </Grid.Col>
                                </Grid>
                                <Group mt="md" className="regiter_button">
                                    <Button type="submit">Đăng kí</Button>
                                </Group>
                            </Card>
                        </form>
                    </Box>
                </Card>
            </div>
        </div>
    </>
};

export default memo(RegisterPage);