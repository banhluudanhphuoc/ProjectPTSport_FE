import './style.scss';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { memo, useState } from "react";
const CreateBrandAdmin = () => {
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const [newBrandName, setNewBrandName] = useState('');
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const navigate = useNavigate();
    const adminToken = Cookies.get('adminToken');
    const handleAddBrand = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                api + `/catalogs`,
                { catalogName: newBrandName },
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );

            navigate(admin_url + '/brands_list');
        } catch (error) {
            //console.error('Error adding Brand:', error);
        }
    };

    return <>
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Thêm thương hiệu</h4>

                <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                    <div className="col-xl">
                        <div className="card mb-4">

                            <div className="card-body">
                                <form onSubmit={handleAddBrand}>
                                    <div className="mb-3">
                                        <label className="form-label" for="basic-icon-default-product-name">Tên thương hiệu</label>
                                        <div className="input-group input-group-merge">
                                            <span id="basic-icon-default-product-name2" className="input-group-text"><Icon icon="tabler:brand-itch" /></span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="basic-icon-default-product-name"
                                                placeholder="Tên thương hiệu"
                                                aria-label="Tên thương hiệu"
                                                aria-describedby="basic-icon-default-product-name2"
                                                value={newBrandName}
                                                onChange={(e) => setNewBrandName(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Thêm thương hiệu</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
};

export default memo(CreateBrandAdmin);