import { memo, useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const NewsListAdmin = () => {
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const [news, setNews] = useState([]);
    const api = process.env.REACT_APP_API_URL_ADMIN;

    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchNews = async () => {
            try {
                const response = await axios.get(api + '/blogs', {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                setNews(response.data);
            } catch (error) {
                console.error('Error fetching News:', error);
            }
        };

        fetchNews();
    }, []);

    const handleDeleteNews = async (blogId) => {
        const adminToken = Cookies.get('adminToken');

        try {
            await axios.delete(
                `${api}/blogs/delete/${blogId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            setNews(news.filter(item => item.blogId !== blogId));
            NotificationManager.success("Xóa tin tức thành công");
        } catch (error) {
            console.error('Error deleting News:', error);
        }
    };

    return <>

        <NotificationContainer />
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Danh sách tin tức</h4>

                <div className="card">
                    <div className=" text-nowrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tiêu đề</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {news.map(item => (
                                    <tr key={item.blogId}>
                                        <td>{item.blogId}</td>
                                        <td>{item.title}</td>
                                        <td>
                                            <span className={`badge ${item.isActive ? 'bg-label-primary' : 'bg-label-danger'} me-1`}>
                                                {item.isActive ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <Icon icon="bx:dots-vertical-rounded" />
                                                </button>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item"
                                                        to={`${admin_url}/news_edit/${item.blogId}`}
                                                    >
                                                        <Icon icon="bx:edit-alt" /> Sửa
                                                    </Link>
                                                    <button
                                                        className="dropdown-item"
                                                        onClick={() => handleDeleteNews(item.blogId)}
                                                    >
                                                        <Icon icon="bx:trash" /> Xóa
                                                    </button>
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
};

export default memo(NewsListAdmin);
