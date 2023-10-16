// RegistrationModal.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactInputVerificationCode from 'react-input-verification-code';
import { Link } from "react-router-dom";

const RegistrationModal = ({ showModal, setShowModal, otp, handleOtpCompleted, handleModalSubmit }) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
            <Modal.Header>
                <Modal.Title>Xác thực số điện thoại</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="confirm_phone_number">
                    <ReactInputVerificationCode
                        length={4}
                        onCompleted={handleOtpCompleted}
                        value={otp}
                    />
                    <div className="resend-otp-link">
                        <Link to="#">Gửi lại mã OTP ?</Link>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={handleModalSubmit}>
                    Xác thực
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RegistrationModal;
