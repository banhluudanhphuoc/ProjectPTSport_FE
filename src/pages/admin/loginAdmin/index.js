import { memo } from "react";
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box, Card, TextInput } from '@mantine/core';
import { Link } from "react-router-dom";
import "./style.scss";
const AdminLogin = ({ theme }) => {
    const form = useForm({
        initialValues: {
            password: '',
        }
    });
    return <>
        <Card >
            <div className="container">
                <div className="login-admin">
                    <Card shadow="sm" padding="lg" radius="md">
                        <div className="title-login-admin">
                            <h1 >Đăng nhập</h1>
                        </div>
                        <Box maw={340} mx="auto">
                            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                                <TextInput
                                    label="Tên đăng nhập"
                                    withAsterisk {...form.getInputProps('name')}
                                    className="admin"
                                />
                                <PasswordInput
                                    label="Mật khẩu"
                                    className="password-admin"
                                    {...form.getInputProps('password')}
                                />

                                <Group mt="md" className="title-login-admin">
                                    <Link to={"/admin/dashboard"}>
                                        <Button type="submit">Đăng nhập</Button>
                                    </Link>
                                </Group>
                            </form>
                        </Box>
                    </Card>
                </div>
            </div>
        </Card>

    </>
};

export default memo(AdminLogin);