import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, memo } from 'react';
import { useTranslation } from "react-i18next";
import "./style.scss";
import { DateInput } from '@mantine/dates';
import axios from "axios";
import {
    PasswordInput,
    Group,
    Button,
    Box,
    Card,
    TextInput,
    Grid,
    Text,
    ThemeIcon,
    List,
    Tabs,
    rem,
    NativeSelect,
    Avatar,
    Select,
} from '@mantine/core';
import Cookies from 'js-cookie';
import Banner from "../../users/theme/banner";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Link } from "react-router-dom";
// import { useAuth } from "context/AuthContext";
import { format } from 'date-fns';
const ProfileCustomerEdit = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

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
    const [currentEmail, setCurrentEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [currentName, setCurrentName] = useState('');
    const [newBirthDate, setNewBirthDate] = useState('');
    const [currentBirthDate, setCurrentBirthDate] = useState('');
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const userToken = Cookies.get('userToken');
    useEffect(() => {
        const userToken = Cookies.get('userToken');
        if (!userToken) {
            navigate('/login-user');
        }
        const fetchMe = async () => {
            try {
                const response = await axios.get(auth + '/me', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });
                setCurrentBirthDate(response.data.birthdate);
                setCurrentName(response.data.name);
                setCurrentEmail(response.data.email);
                setUser(response.data);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching Brand:', error);
            }
        };

        fetchMe();
    }, [navigate]);


    const handleSave = async (e) => {
        e.preventDefault();  // Prevent the default form submission

        try {
            const formattedDateOfBirth = format(newBirthDate, 'dd/MM/yyyy');
            const response = await axios.put(
                `${auth}/users/${user.userId}`,
                {
                    email: currentEmail,
                    name: newName,
                    birthdate: formattedDateOfBirth,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            navigate('/profile-customer');
        } catch (error) {
            console.error('Error updating user:', error);
            // Handle the error condition
        }
    };
    return <>
        <Banner pageTitle={t('pageTitle_customer_profile_edit')} />
        <div className="container">
            <Card shadow="sm" padding="lg" withBorder>
                <div className="title-profile-customer">
                    <h3 >{t('profile_title')} : {user.name}</h3>
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
                            <Box mx="auto">


                                <div className='container'>
                                    <div className='row'>
                                        <form >
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
                                                    label="Ngày Tháng Năm Sinh"
                                                    placeholder={currentBirthDate}
                                                    value={newBirthDate || ''}
                                                    onChange={(value) => setNewBirthDate(value)}
                                                />
                                            </div>
                                        </form>

                                    </div>
                                </div>


                                <Group mt="md" className="save_button">
                                    <Button type="submit" onClick={handleSave}>
                                        Lưu thông tin
                                    </Button>
                                </Group>


                            </Box>
                        </Card>
                    </Grid.Col>
                </Grid>{/* Confirmation Dialog */}

            </Card>

        </div>
    </>
};

export default memo(ProfileCustomerEdit);