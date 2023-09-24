import { memo } from "react";
import "./style.scss";
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box, Card, TextInput, PinInput, Text } from '@mantine/core';
import { Link } from "react-router-dom";
const ConfirmPhoneNumber = () => {

    return <>
        <div className="container">
            <div className="confirm_phone_number">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <div className="title-login-user" >
                        <h1 >Xác nhận số điện thoại</h1>
                    </div>
                    <Box maw={340} mx="auto">
                        <form >
                            <PinInput className="pin_input" mt="md" size="md" length={6} error oneTimeCode aria-label="One time code" type={/^[0-9]+/} inputType="tel" inputMode="numeric" />
                            <Link><Text mt="md">Gửi lại mã OTP ?</Text></Link>
                            <Group mt="md" className="link_dangki">
                                <Button type="submit">Xác nhận</Button>
                            </Group>
                        </form>
                    </Box>
                </Card>
            </div>
        </div>
    </>
};

export default memo(ConfirmPhoneNumber);