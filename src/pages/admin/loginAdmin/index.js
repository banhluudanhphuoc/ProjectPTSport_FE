import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import thư viện js-cookie
import axios from 'axios';
import "./style.scss";
import logo from "./logo192.png";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        if (adminToken) {
            navigate(admin_url + '/dashboard');
        } else {
            navigate(admin_url + '/admin-login');
        }
    }, []);

    const emailvippro = process.env.REACT_APP_ADMIN;
    const api = process.env.REACT_APP_API_URL_AUTH;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (email === emailvippro) {
                // Make a POST request to the login endpoint
                const response = await axios.post(api + '/login', {
                    email,
                    password,
                });

                if (response.status === 200) {
                    Cookies.set('adminToken', response.data.token)

                    // Navigate to the dashboard after successful login
                    navigate(admin_url + '/dashboard');
                }
            } else {
                NotificationManager.error("Không phận sự miễn vào.");
            }
        } catch (error) {
            // Show an error notification if there's an exception (e.g., network error)
            NotificationManager.error(error.response.data);
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
                            <label htmlFor="email" className="form-label">email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
