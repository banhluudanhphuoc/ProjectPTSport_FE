import { memo, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const EditCategoryAdmin = () => {
    const navigate = useNavigate();
    const [newCategoryName, setNewCategoryName] = useState('');
    const [currentCategoryName, setCurrentCategoryName] = useState('');
    const { categoryID } = useParams();
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchCategoryDetails = async () => {
            try {
                const response = await axios.get(api + `/categories/${categoryID}`, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`
                    }
                });


                setCurrentCategoryName(response.data.categoryName);
            } catch (error) {

                ////console.error('Error fetching category details:', error);
            }
        };

        fetchCategoryDetails();
    }, [api, categoryID]);

    const handleEditCategory = async (e) => {
        e.preventDefault();

        const adminToken = Cookies.get('adminToken');

        try {
            const response = await axios.put(
                api + `/categories/update/${categoryID}`,
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
            ////console.error('Error editing category:', error);
        }
    };

    return (
        <>
            <NotificationContainer />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Sửa danh mục </h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div className="col-xl">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <form onSubmit={handleEditCategory}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="basic-icon-default-product-name">Tên danh mục mới</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-product-name2" className="input-group-text"><Icon icon="iconamoon:category-fill" /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="basic-icon-default-product-name"
                                                    placeholder={currentCategoryName}
                                                    aria-label="Tên danh mục mới"
                                                    aria-describedby="basic-icon-default-product-name2"
                                                    value={newCategoryName}
                                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Sửa danh mục</button>
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

export default memo(EditCategoryAdmin);
