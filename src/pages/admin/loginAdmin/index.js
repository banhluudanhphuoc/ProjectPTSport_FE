import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import thư viện js-cookie
import axios from 'axios';
import "./style.scss";
import logo from "./logo192.png";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';
import { useAuthAdmin } from "context/AuthContextAdmin";
const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggedInAdmin, setIsLoggedInAdmin } = useAuthAdmin();
    const navigate = useNavigate();

    useEffect(() => {
        const adminToken = Cookies.get('adminToken');
        if (adminToken) {
            navigate('/administrator-management/dashboard');
        }
    }, []);
    const handleLogin = async (e) => {
        e.preventDefault();
        const api = process.env.REACT_APP_API_URL;
        try {
            const response = await axios.post(api + '/admin/login', {
                username,
                password,
            });
            if (response.data.status === 200) {
                // Lấy thời gian hiện tại theo múi giờ UTC
                var currentTimeUTC = new Date();
                // Chuyển đổi sang múi giờ Ha Noi (UTC+7)
                var currentTimeHaNoi = new Date(currentTimeUTC.getTime() + (7 * 60 * 60 * 1000));
                // Thêm 1 giờ vào thời gian hiện tại để có thời gian hết hạn
                var expirationTimeHaNoi = new Date(currentTimeHaNoi.getTime() + 60 * 60 * 1000);
                // Set cookie với thời gian hết hạn ở múi giờ Ha Noi
                Cookies.set('adminToken', response.data.token, { expires: expirationTimeHaNoi });
                setIsLoggedInAdmin(true);
                NotificationManager.success(response.data.message);
                navigate('/administrator-management/dashboard');
            } else {
                NotificationManager.error(response.data.message);
            }
        } catch (error) {
            // Xử lý lỗi nếu có lỗi kết nối tới server hoặc lỗi khác
            console.error('Lỗi kết nối tới server:', error);
        }
    };


    return <>
        <NotificationContainer />
        <div className="container">
            <div className='row custom-login-admin mt-5'>
                <div className='col-md-4 login-admin card'>
                    <div>
                        <img src={logo} alt="" width={100} />
                    </div>

                    <h2>Admin Login</h2>
                    <form onSubmit={handleLogin} id="form-login">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                placeholder="Enter username"
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 form-password-toggle">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="input-group input-group-merge">
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="••••••••"
                                    aria-describedby="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 mt-5">
                            <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>

};

export default AdminLogin;
