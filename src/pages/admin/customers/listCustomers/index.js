import { memo, useState, useEffect } from "react";
import './style.scss';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { Modal, Button, Image } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const CustomersListAdmin = () => {
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const [users, setUser] = useState([]);
    const api = process.env.REACT_APP_API_URL_ADMIN;

    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchUsers = async () => {
            try {
                const response = await axios.get(api + '/users', {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                // Xử lý phản hồi từ server (response.data)
                setUser(response.data);

            } catch (error) {
                // Xử lý lỗi
                //console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [api]);


    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const handleDeleteUser = (userId) => {
        setUserToDelete(userId);
        setShowConfirmationModal(true);
    };

    const confirmDeleteUser = async () => {
        const adminToken = Cookies.get('adminToken');

        try {
            const response = await axios.delete(
                `${api}/users/${userToDelete}`,
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            if (response.status === 200) {
                if (Array.isArray(users.contents)) {
                    const updatedUsers = {
                        ...users,
                        contents: users.contents.filter(user => user.userId !== userToDelete),
                    };
                    setUser(updatedUsers);
                    NotificationManager.success(response.data.message);
                }
            }
        } catch (error) {
            //console.error('Error deleting user:', error);
        }

        // Reset state after deletion
        setShowConfirmationModal(false);
        setUserToDelete(null);
    };

    const closeConfirmationModal = () => {
        setShowConfirmationModal(false);
        setUserToDelete(null);
    };
    return (
        <>
            <NotificationContainer />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Danh sách khách hàng</h4>

                    <div className="card">
                        <h5 className="card-header">Danh sách khách hàng</h5>
                        <div className=" text-nowrap">
                            {Array.isArray(users.contents) && users.contents.length > 0 ? (
                                <table className="table">
                                    {/* Render table headers */}
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Tên</th>
                                            {/* <th>Status</th> */}
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    {/* Render table body */}
                                    <tbody className="table-border-bottom-0">
                                        {users.contents.map(user => (
                                            <tr key={user.userId}>
                                                {/* Render user data */}
                                                <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{user.email}</strong></td>
                                                <td>{user.name}</td>
                                                {/* <td><span className="badge bg-label-primary me-1">Active</span></td> */}
                                                <td>
                                                    <div className="dropdown">
                                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                            <Icon icon="bx:dots-vertical-rounded" />
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <Link className="dropdown-item" to={`${admin_url}/account-settings/${user.userId}`}>
                                                                <i className="bx bx-edit-alt me-1"></i> Sửa
                                                            </Link>
                                                            <Link className="dropdown-item" onClick={() => handleDeleteUser(user.userId)}>
                                                                <i className="bx bx-trash me-1"></i> Xóa
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No users found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showConfirmationModal} onHide={closeConfirmationModal}>
                <Modal.Header>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc là xóa User này không?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeConfirmationModal}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteUser}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default memo(CustomersListAdmin);