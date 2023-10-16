import { memo } from "react";
import "./style.scss";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";
import { Container, Row, Col, } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap"; // Fix this import

import ReactInputVerificationCode from 'react-input-verification-code';

const ConfirmPhoneNumber = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <Banner pageTitle={t('pageTitle_confirm_phone_number')} />
            <Container className=" mt-5 mb-5">
                <Row>
                    <Col>
                        <h1 className="title">Xác nhận số điện thoại</h1>
                        <div className="confirm_phone_number">
                            <form>
                                <ReactInputVerificationCode />
                                <Link to="#"><p className="title">Gửi lại mã OTP ?</p></Link>
                                <Button type="submit" className="mt-3">Xác nhận</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default memo(ConfirmPhoneNumber);
