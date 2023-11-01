import { memo, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import "./style.scss";
import {
    PasswordInput,
    TextInput,
} from '@mantine/core';
import Banner from "../../users/theme/banner";
import { Link } from "react-router-dom";
import LoginImg from '../../../style/img/login.jpg';
import { useTranslation } from "react-i18next";
import axios from "axios";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useAuth } from "context/AuthContext";
const ChangePassword = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const { setIsLoggedIn } = useAuth();
    useEffect(() => {
        if (isLoggedIn === false) {
            console.log(isLoggedIn);
            navigate('/login-user');
        }
    }, [navigate]);

    const form = useForm({
        initialValues: {
            oldPassword: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            oldPassword: (value) => (value.length < 1 ? 'Vui lòng nhập mật khẩu cũ .' : null),
            password: (value) => (value.length < 8 ? 'Mật khẩu mới phải trên 8 kí tự' : null),
            confirmPassword: (value, values) => value !== values.password ? 'Nhập lại mật khẩu không giống mật khẩu ở trên' : null,
        },
    });





    const api = process.env.REACT_APP_API_URL;
    const handleChangePassword = async (e) => {

        e.preventDefault();
        form.validate();
        const oldPassword = document.getElementById("oldPassword").value;
        const newPassword = document.getElementById("password").value;
        const token_login = localStorage.getItem('token_login');
        try {
            // Sử dụng Axios
            const response = await axios.post(api + "/change-password", { oldPassword, newPassword }, {
                headers: {
                    'Authorization': `Bearer ${token_login}`
                }

            });
            if (response.data.status === 200) {
                NotificationManager.success(response.data.message);
                if (token_login) {
                    localStorage.removeItem('token_login');
                }
                setIsLoggedIn(false);
                setTimeout(() => {
                    navigate('/login-user');
                }, 3000); // 5000 miligiây (5 giây)
            } else {
                NotificationManager.error(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                // Nếu có phản hồi từ máy chủ, bạn có thể trích xuất thông điệp lỗi từ đó
                const errorMessage = error.response.data.message;
                console.log('Lỗi từ máy chủ:', errorMessage);
                NotificationManager.error(errorMessage);
            } else {
                // Xử lý lỗi nếu không có phản hồi từ máy chủ
                console.error("Lỗi khi gửi yêu cầu đăng nhập:", error);
            }
        }
    };


    return <>
        <NotificationContainer />
        <Banner pageTitle={t('pageTitle_change_password')} />
        <section className="login_box_area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="login_box_img">
                            <img className="img-fluid" src={LoginImg} alt="" />
                            <div className="hover">

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="login_form_inner">
                            <h3>{t('change_password')}</h3>
                            <form className="row login_form" action="" method="" id="contactForm" onSubmit={handleChangePassword}>
                                <div className="col-md-12">
                                    <PasswordInput
                                        mt="md"
                                        label={t('change_password_ole')}
                                        placeholder={t('change_password_ole')}
                                        className="password-user"
                                        {...form.getInputProps('oldPassword')}
                                        id="oldPassword"
                                    />
                                    <PasswordInput
                                        mt="md"
                                        label={t('change_password_new')}
                                        placeholder={t('change_password_new')}
                                        className="password-user"
                                        {...form.getInputProps('password')}
                                        id="password"
                                    />
                                    <PasswordInput
                                        mt="md"
                                        label={t('change_password_new_confirm')}
                                        placeholder={t('change_password_new_confirm')}
                                        {...form.getInputProps('confirmPassword')}
                                    />
                                </div>


                                <div className="col-md-12 form-group mt-5">
                                    <button type="submit" value="submit" className="primary-btn">{t('change_password')}</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default memo(ChangePassword);