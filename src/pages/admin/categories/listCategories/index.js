import { memo, useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const CategoriesListAdmin = () => {
    const [categories, setCategories] = useState([]);
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchCategories = async () => {
            try {
                const response = await axios.get(api + '/categories', {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                // Xử lý phản hồi từ server (response.data)
                setCategories(response.data);
            } catch (error) {
                // Xử lý lỗi
                //console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleDeleteCategory = async (categoryID) => {
        const adminToken = Cookies.get('adminToken');

        try {
            const response = await axios.delete(
                `${api}/categories/delete/${categoryID}`,
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            setCategories(categories.filter(category => category.categoryID !== categoryID));
            NotificationManager.success("Xóa danh mục thành công");
        } catch (error) {
            //console.error('Error deleting category:', error);
        }
    };


    return (
        <>
            <NotificationContainer />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Danh sách danh mục</h4>

                    <div className="card">
                        <div className="table-responsive text-nowrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Danh mục</th>
                                        {/* <th>Trạng thái</th> */}
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                    {categories.map(category => (
                                        <tr key={category.categoryID}>
                                            <td>{category.categoryID}</td>
                                            <td>{category.categoryName}</td>

                                            <td>
                                                <div className="dropdown">
                                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                        <Icon icon="bx:dots-vertical-rounded" />
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" to={`${admin_url}/category_edit/${category.categoryID}`}
                                                        ><Icon icon="bx:edit-alt" /> Sửa</Link>
                                                        <Link className="dropdown-item" onClick={() => handleDeleteCategory(category.categoryID)}
                                                        ><Icon icon="bx:trash" /> Xóa</Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(CategoriesListAdmin);
