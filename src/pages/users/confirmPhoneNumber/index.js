import { memo } from "react";
import "./style.scss";
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box, Card, TextInput, PinInput, Text } from '@mantine/core';
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";
import { Container, Row, Col, } from "react-bootstrap";
const ConfirmPhoneNumber = () => {

    return <>
        <Banner />
        <Container className=" mt-5 mb-5">
            <Row>
                <Col>
                    <h1 className="title">Xác nhận số điện thoại</h1>

                    <Box maw={340} mx="auto" className="confirm_phone_number">
                        <form >
                            <PinInput
                                className="pin_input"
                                mt="md"
                                size="md"
                                length={6}
                                error
                                oneTimeCode
                                aria-label="One time code"
                                type={/^[0-9]+/}
                                inputType="tel"
                                inputMode="numeric"

                            />
                            <Link><Text mt="md" className="title">Gửi lại mã OTP ?</Text></Link>
                            <Button type="submit" className="mt-3">Xác nhận</Button>

                        </form>
                    </Box>
                </Col>
            </Row>

        </Container>


    </>
};

export default memo(ConfirmPhoneNumber);