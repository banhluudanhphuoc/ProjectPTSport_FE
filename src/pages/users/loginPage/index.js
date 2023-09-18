import { memo } from "react";
import "./style.scss";
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box, Card, TextInput } from '@mantine/core';
import { Link } from "react-router-dom";
const LoginUserPage = () => {
    const form = useForm({
        initialValues: {
            password: '',
        }
    });
    return <>
        <div className="container">
            <div className="login-user">
                <Card>
                    <div className="title-login-user">
                        <h1 >Đăng nhập</h1>
                    </div>
                    <Box maw={340} mx="auto">
                        <form onSubmit={form.onSubmit((values) => console.log(values))}>
                            <TextInput
                                label="Tên đăng nhập"
                                placeholder="Tên đăng nhập (Username)"
                                withAsterisk {...form.getInputProps('name')}
                                className="username"
                            />
                            <PasswordInput
                                label="Mật khẩu"
                                placeholder="Mật khẩu (Password)"
                                className="password-user"
                                {...form.getInputProps('password')}
                            />

                            <Group mt="md" className="link_dangki">
                                <Button type="submit">Đăng nhập</Button>
                            </Group>
                        </form>

                        <span className="link_dangki">
                            Chưa có tài khoản ?
                            <Link to={"/register"}>
                                Đăng kí ngay
                            </Link>
                        </span>
                    </Box>
                </Card>
            </div>
        </div>
    </>
};

export default memo(LoginUserPage);