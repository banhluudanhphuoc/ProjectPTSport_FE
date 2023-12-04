import { useState } from "react";
import axios from 'axios';
import './style.scss';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Cookies from 'js-cookie';
const CreateCategoryAdmin = () => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const navigate = useNavigate();
    const adminToken = Cookies.get('adminToken');
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const handleAddCategory = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                api + `/categories`,
                { categoryName: newCategoryName },
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );


            navigate(admin_url + '/categories_list');
        } catch (error) {
            //console.error('Error adding category:', error);
        }
    };

    return (

        <>
            <NotificationContainer />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Thêm danh mục</h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div className="col-xl">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <form onSubmit={handleAddCategory}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="basic-icon-default-product-name">Tên danh mục</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-product-name2" className="input-group-text"><Icon icon="iconamoon:category-fill" /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="basic-icon-default-product-name"
                                                    placeholder="Tên danh mục"
                                                    aria-label="Tên danh mục"
                                                    aria-describedby="basic-icon-default-product-name2"
                                                    value={newCategoryName}
                                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Thêm danh mục</button>
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

export default CreateCategoryAdmin;

