import { memo, useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const DiscountListAdmin = () => {

    const api = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const [discounts, setDiscounts] = useState([]);
    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchDiscount = async () => {
            try {
                const response = await axios.get(api + '/discounts', {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                // Xử lý phản hồi từ server (response.data)
                setDiscounts(response.data);
                //console.log(response);
            } catch (error) {
                // Xử lý lỗi
                //console.error('Error fetching discounts:', error);
            }
        };

        fetchDiscount();
    }, []);

    const handleDeleteDiscount = async (discountID) => {
        const adminToken = Cookies.get('adminToken');

        try {
            const response = await axios.delete(
                `${api}/discounts/${discountID}`,
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            setDiscounts(discounts.filter(discount => discount.id !== discountID));
            NotificationManager.success("Xóa mức giảm giá thành công");
        } catch (error) {
            console.error('Error deleting discounts:', error);
        }
    };


    return (
        <>
            <NotificationContainer />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Danh sách các mức giảm giá</h4>

                    <div className="card">
                        <div className="table-responsive text-nowrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Giảm</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                    {discounts.map(discount => (
                                        <tr key={discount.id}>
                                            <td>{discount.id}</td>
                                            <td>{discount.percentage} %</td>

                                            <td>
                                                <div className="dropdown">
                                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                        <Icon icon="bx:dots-vertical-rounded" />
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" onClick={() => handleDeleteDiscount(discount.id)}
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

export default memo(DiscountListAdmin);
