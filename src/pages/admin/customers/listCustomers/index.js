
import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { Modal, Button, Image } from 'react-bootstrap';



const CustomersListAdmin = () => {


    return (
        <>
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Products List</h4>

                    <div className="card">
                        <h5 className="card-header">Table Basic</h5>
                        <div className="table-responsive text-nowrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Project</th>
                                        <th>Client</th>
                                        <th>Users</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                    <tr>
                                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                                        <td>Albert Cook</td>
                                        <td>
                                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Lilian Fuller"
                                                >
                                                    <Image src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Sophia Wilkerson"
                                                >
                                                    <Image src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Christina Parker"
                                                >
                                                    <Image src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"
                                                    ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                                    >
                                                    <a className="dropdown-item" href="javascript:void(0);"
                                                    ><i className="bx bx-trash me-1"></i> Delete</a
                                                    >
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                                        <td>Barry Hunter</td>
                                        <td>
                                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Lilian Fuller"
                                                >
                                                    <Image src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Sophia Wilkerson"
                                                >
                                                    <Image src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Christina Parker"
                                                >
                                                    <Image src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"
                                                    ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                                    >
                                                    <a className="dropdown-item" href="javascript:void(0);"
                                                    ><i className="bx bx-trash me-2"></i> Delete</a
                                                    >
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                                        <td>Trevor Baker</td>
                                        <td>
                                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Lilian Fuller"
                                                >
                                                    <Image src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Sophia Wilkerson"
                                                >
                                                    <Image src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Christina Parker"
                                                >
                                                    <Image src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"
                                                    ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                                    >
                                                    <a className="dropdown-item" href="javascript:void(0);"
                                                    ><i className="bx bx-trash me-2"></i> Delete</a
                                                    >
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                                        </td>
                                        <td>Jerry Milton</td>
                                        <td>
                                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Lilian Fuller"
                                                >
                                                    <Image src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Sophia Wilkerson"
                                                >
                                                    <Image src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    className="avatar avatar-xs pull-up"
                                                    title="Christina Parker"
                                                >
                                                    <Image src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                                </li>
                                            </ul>
                                        </td>
                                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <Icon icon="bx:dots-vertical-rounded" />
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"
                                                    ><Icon icon="bx:edit-alt" /> Edit</a
                                                    >
                                                    <a className="dropdown-item" href="javascript:void(0);"
                                                    ><Icon icon="bx:trash" /> Delete</a
                                                    >
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(CustomersListAdmin);