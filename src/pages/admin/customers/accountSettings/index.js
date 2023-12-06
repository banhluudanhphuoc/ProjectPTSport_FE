import './style.scss';
import { Link } from "react-router-dom";
import { Modal, Button, Image } from 'react-bootstrap';
import { memo, useEffect, useState } from "react";
import Cookies from 'js-cookie'; // Import thư viện js-cookie
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DateInput } from '@mantine/dates';
import { parse, isValid, format } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    PasswordInput,
    TextInput,
    Text,
    rem,
    NativeSelect,
} from '@mantine/core';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
const AccountSettings = () => {
    const navigate = useNavigate();
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const adminToken = Cookies.get('adminToken');
    const { userID } = useParams();
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    const [user, setUser] = useState({
        userId: null,
        name: '',
        email: '',
        birthdate: '',
        avatar: '',
    });
    const [currentEmail, setCurrentEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [currentName, setCurrentName] = useState('');
    const [newBirthDate, setNewBirthDate] = useState('');
    const [currentBirthDate, setCurrentBirthDate] = useState('');
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${api}/users/${userID}`, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });
                setCurrentBirthDate(response.data.birthdate);
                setCurrentName(response.data.name);
                setCurrentEmail(response.data.email);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching admin:', error);
            }
        };

        fetchUser();
    }, [api, adminToken, userID]);




    const handleSave = async (e) => {
        e.preventDefault();  // Prevent the default form submission

        try {
            const parsedDate = new Date(newBirthDate);


            const formattedDateOfBirth = isValid(parsedDate)
                ? format(parsedDate, 'dd/MM/yyyy')
                : '';

            ;
            const response = await axios.put(
                `${api}/users/${userID}`,
                {
                    email: currentEmail,
                    name: newName,
                    birthdate: formattedDateOfBirth,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            navigate(admin_url + '/customers_list');
        } catch (error) {
            console.error('Error updating user:', error);
            // Handle the error condition
        }
    };

    // const form = useForm({
    //     initialValues: {
    //         currentPasswordForm: '',
    //         newPasswordForm: '',
    //         newRePasswordForm: '',
    //     },

    //     validate: {
    //         currentPasswordForm: (value) => (value.length < 1 ? 'Vui lòng nhập mật khẩu cũ .' : null),
    //         newPasswordForm: (value) => (value.length < 8 ? 'Mật khẩu mới phải trên 8 kí tự' : null),
    //         newRePasswordForm: (value, values) => value !== values.newPasswordForm ? 'Nhập lại mật khẩu không giống mật khẩu ở trên' : null,
    //     },
    // });
    // const handlePasswordChange = async (e) => {
    //     e.preventDefault();
    //     form.validate();

    //     try {
    //         // Fetch the user with the current password to confirm it's correct
    //         const passwordCheckResponse = await axios.put(
    //             `${api}/users/${userID}`,
    //             {
    //                 password: form.values.currentPasswordForm,
    //                 newPassword: form.values.newRePasswordForm,
    //             },
    //             {
    //                 headers: {
    //                     'Authorization': `Bearer ${adminToken}`,
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         );
    //         navigate(admin_url + '/customers_list');
    //     } catch (error) {
    //         console.error('Error changing password:', error);
    //     }
    // };

    return (

        <>
            <div className="content-wrapper">

                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Cài đặt tài khoản /</span> {user.name}</h4>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-4">
                                <h5 className="card-header">Thông tin chi tiết</h5>

                                {/* <div className="card-body">
                                    <div className="d-flex align-items-start align-items-sm-center gap-4">
                                        <Image
                                            src={user.avatar}
                                            alt="admin-avatar"
                                            className="d-block rounded"
                                            height="100"
                                            width="100"
                                            id="uploadedAvatar"
                                        />
                                        <div className="button-wrapper">
                                            <label for="upload" className="btn btn-primary me-2 mb-4" tabindex="0">
                                                <span className="d-none d-sm-block">Upload new photo</span>
                                                <i className="bx bx-upload d-block d-sm-none"></i>
                                                <input
                                                    type="file"
                                                    id="upload"
                                                    className="account-file-input"
                                                    hidden
                                                    accept="image/png, image/jpeg"
                                                />
                                            </label>
                                            <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                                                <i className="bx bx-reset d-block d-sm-none"></i>
                                                <span className="d-none d-sm-block">Reset</span>
                                            </button>

                                            <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                                        </div>
                                    </div>
                                </div> */}
                                <hr className="my-0" />
                                <div className="card-body">
                                    <form id="formAccountSettings" onSubmit={handleSave}>
                                        <div className="row">
                                            <div className="mb-3 col-md-6">
                                                <label for="firstName" className="form-label">Email</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    value={user.email}
                                                    autofocus
                                                    readOnly
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label for="lastName" className="form-label">Tên</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder={currentName}
                                                    value={newName}
                                                    onChange={(e) => setNewName(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <DateInput
                                                    valueFormat="DD/MM/YYYY"
                                                    mt="md"
                                                    label="Ngày Tháng Năm sinh"
                                                    placeholder={currentBirthDate}
                                                    value={newBirthDate || ''}
                                                    onChange={(value) => setNewBirthDate(value)}
                                                />
                                            </div>


                                            {/* <div className="mb-3 col-md-6">
                                                <label for="language" className="form-label">Language</label>
                                                <select id="language" className="select2 form-select">
                                                    <option value="">Select Language</option>
                                                    <option value="en">English</option>
                                                    <option value="fr">French</option>
                                                    <option value="de">German</option>
                                                    <option value="pt">Portuguese</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label for="currency" className="form-label">Currency</label>
                                                <select id="currency" className="select2 form-select">
                                                    <option value="">Select Currency</option>
                                                    <option value="usd">USD</option>
                                                    <option value="euro">Euro</option>
                                                    <option value="pound">Pound</option>
                                                    <option value="bitcoin">Bitcoin</option>
                                                </select>
                                            </div> */}
                                        </div>
                                        <div className="mt-2">
                                            {/* <button
                                                className="btn btn-secondary me-2"
                                                onClick={() => setShowPasswordModal(true)}
                                            >
                                                Đổi mật khẩu
                                            </button> */}
                                            <button type="button" className="btn btn-primary me-2" onClick={handleSave}>
                                                Lưu
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary" onClick={() => navigate(admin_url + '/customers_list')}>
                                                Hủy
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Password Modal */}
            {/* <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>

                <Modal.Header>
                    <Modal.Title>Đổi mật khẩu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row login_form" >
                        <PasswordInput
                            mt="md"
                            label="Mật khẩu cũ"
                            placeholder="Mật khẩu cũ"
                            {...form.getInputProps('currentPasswordForm')}
                            id="currentPassword"
                        />
                        <PasswordInput
                            mt="md"
                            label="Mật khẩu mới"
                            placeholder="Mật khẩu mới"
                            {...form.getInputProps('newPasswordForm')}
                            id="newPassword"
                        />
                        <PasswordInput
                            mt="md"
                            label="Nhập lại mật khẩu mới"
                            placeholder="Nhập lại mật khẩu mới"
                            {...form.getInputProps('newRePasswordForm')}
                            id="newRePassword"
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handlePasswordChange}>
                        Lưu mật khẩu
                    </Button>

                </Modal.Footer>
            </Modal> */}
        </>
    );
};

export default memo(AccountSettings);