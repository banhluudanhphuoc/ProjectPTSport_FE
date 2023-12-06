import { memo, useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const BrandListAdmin = () => {
    const [brand, setBrand] = useState([]);
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchBrand = async () => {
            try {
                const response = await axios.get(api + '/catalogs', {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                // Xử lý phản hồi từ server (response.data)
                setBrand(response.data);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching Brand:', error);
            }
        };

        fetchBrand();
    }, []);

    const handleDeleteBrand = async (catalogId) => {
        const adminToken = Cookies.get('adminToken');

        try {
            const response = await axios.delete(
                `${api}/catalogs/delete/${catalogId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            setBrand(brand.filter(brand => brand.catalogId !== catalogId));
            NotificationManager.success("Xóa thương hiệu thành công");
        } catch (error) {
            console.error('Error deleting Brand:', error);
        }
    };


    return (
        <>
            <NotificationContainer />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Danh sách Thương hiệu</h4>

                    <div className="card">
                        <div className="text-nowrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Thương hiệu</th>
                                        {/* <th>Trạng thái</th> */}
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                    {brand.map(singleBrand => (
                                        <tr key={singleBrand.catalogId}>
                                            <td>{singleBrand.catalogId}</td>
                                            <td>{singleBrand.catalogName}</td>

                                            <td>
                                                <div className="dropdown">
                                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                        <Icon icon="bx:dots-vertical-rounded" />
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" to={`${admin_url}/brand_edit/${singleBrand.catalogId}`}>
                                                            <Icon icon="bx:edit-alt" /> Sửa
                                                        </Link>
                                                        <Link className="dropdown-item" onClick={() => handleDeleteBrand(singleBrand.catalogId)}>
                                                            <Icon icon="bx:trash" /> Xóa
                                                        </Link>
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

export default memo(BrandListAdmin);
