import { useState } from "react";
import axios from 'axios';
import './style.scss';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Cookies from 'js-cookie';
const CreateDiscountAdmin = () => {
    const [newDiscountName, setNewDiscountName] = useState('');
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const navigate = useNavigate();
    const adminToken = Cookies.get('adminToken');
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const handleAddDiscount = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                api + `/discounts`,
                { percentage: newDiscountName },
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );


            navigate(admin_url + '/discounts_list');
        } catch (error) {
            //console.error('Error adding Discount:', error);
        }
    };

    return (

        <>
            <NotificationContainer />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Thêm mức giảm giá</h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div className="col-xl">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <form onSubmit={handleAddDiscount}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="basic-icon-default-product-name">Giảm</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-product-name2" className="input-group-text"><Icon icon="iconamoon:Discount-fill" /></span>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="basic-icon-default-product-name"
                                                    placeholder="Giảm %"
                                                    aria-label="Giảm %"
                                                    aria-describedby="basic-icon-default-product-name2"
                                                    value={newDiscountName}
                                                    onChange={(e) => setNewDiscountName(e.target.value)}
                                                    min="0"
                                                    max="100"
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Thêm</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CreateDiscountAdmin;

