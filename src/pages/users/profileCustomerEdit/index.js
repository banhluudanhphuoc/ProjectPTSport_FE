import {
    Box, Button, Card, Grid, Group
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import axios from "axios";
import Cookies from 'js-cookie';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Banner from "../../users/theme/banner";
import "./style.scss";
import { format, isValid } from 'date-fns';
const ProfileCustomerEdit = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

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
    const auth = process.env.REACT_APP_API_URL_AUTH;
    //const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const userToken = Cookies.get('userToken');
    const api = process.env.REACT_APP_API_URL;
    useEffect(() => {

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
        //console.log(user);
    }, [navigate, auth, userToken]);


    const handleSave = async (e) => {
        e.preventDefault();

        try {

            // Use the Date constructor directly
            const parsedDate = new Date(newBirthDate);
            const parsedDateCurrent = new Date(currentBirthDate);
            const formattedDateOfBirth = isValid(parsedDate)
                ? format(parsedDate, 'dd/MM/yyyy')
                : '';
            ;
            const formattedDateOfBirthCurrent = isValid(parsedDateCurrent)
                ? format(parsedDateCurrent, 'dd/MM/yyyy')
                : '';
            ;

            const response = await axios.put(
                `${api}/users/${user.userId}`,
                {
                    email: currentEmail,
                    name: newName || currentName,
                    birthdate: formattedDateOfBirth || formattedDateOfBirthCurrent,
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
                        {/* <div className="profile_customer_left_top">
                            <div >
                                <Avatar variant="transparent" radius="xl" size="xl" color="cyan" src="" />
                            </div>
                            <div >
                                <Text mt="sm" ml="sm">Số điện thoại hiện tại: 0123456789</Text>

                            </div>

                        </div> */}
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