
import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';



const BrandsListAdmin = () => {


    return <>
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Danh sách thương hiệu</h4>

                <div className="card">

                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Thương hiệu</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                <tr>

                                    <td>Albert Cook</td>
                                    <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <Icon icon="bx:dots-vertical-rounded" />
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" href="javascript:void(0);"
                                                ><Icon icon="bx:edit-alt" /> Sửa</Link
                                                >
                                                <Link className="dropdown-item" href="javascript:void(0);"
                                                ><Icon icon="bx:trash" /> Xóa</Link
                                                >
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                                    <td>Barry Hunter</td>
                                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <Icon icon="bx:dots-vertical-rounded" />
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" href="javascript:void(0);"
                                                ><Icon icon="bx:edit-alt" /> Sửa</Link
                                                >
                                                <Link className="dropdown-item" href="javascript:void(0);"
                                                ><Icon icon="bx:trash" /> Xóa</Link
                                                >
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                                    <td>Trevor Baker</td>
                                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <Icon icon="bx:dots-vertical-rounded" />
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" href="javascript:void(0);"
                                                ><Icon icon="bx:edit-alt" /> Sửa</Link
                                                >
                                                <Link className="dropdown-item" href="javascript:void(0);"
                                                ><Icon icon="bx:trash" /> Xóa</Link
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
                                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <Icon icon="bx:dots-vertical-rounded" />
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" href="javascript:void(0);"
                                                ><Icon icon="bx:edit-alt" /> Sửa</Link
                                                >
                                                <Link className="dropdown-item" href="javascript:void(0);"
                                                ><Icon icon="bx:trash" /> Xóa</Link
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
};

export default memo(BrandsListAdmin);