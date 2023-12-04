import './style.scss';
import { memo, useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill'; // Import the ReactQuill component
import 'react-quill/dist/quill.snow.css'; // Import the styles for the snow theme
import { useParams } from 'react-router-dom';
const EditNewsAdmin = () => {
    const navigate = useNavigate();
    const [newsTitle, setNewsTitle] = useState('');
    const [newsContent, setNewsContent] = useState('');
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentContent, setCurrentContent] = useState('');
    const { blogId } = useParams();
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchNewsDetails = async () => {
            try {
                const response = await axios.get(api + `/blogs/${blogId}`, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`
                    }
                });

                setCurrentTitle(response.data.title);
                setCurrentContent(response.data.content);
            } catch (error) {
                //console.error('Error fetching news details:', error);
            }
        };

        fetchNewsDetails();
    }, [api, blogId]);

    const handleEditNews = async (e) => {
        e.preventDefault();

        const adminToken = Cookies.get('adminToken');

        try {
            const response = await axios.put(
                api + `/blogs/update/${blogId}`,
                { title: newsTitle, content: newsContent },
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );

            navigate(admin_url + '/news_list');
        } catch (error) {
            //console.error('Error editing news:', error);
        }
    };

    return (
        <>
            {/* Your JSX for the content */}
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4">
                        <span className="text-muted fw-light">PT Sports /</span> Sửa tin tức
                    </h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div className="col-xl">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <form>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="news-title">
                                                Tiêu đề
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="news-title"
                                                placeholder={currentTitle}
                                                aria-label="Tiêu đề"
                                                value={newsTitle}
                                                onChange={(e) => setNewsTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="news-content">
                                                Nội dung
                                            </label>
                                            <div className="input-group input-group-merge">
                                                <ReactQuill
                                                    className='content-news'
                                                    placeholder={currentContent}
                                                    value={currentContent}
                                                    onChange={(content) => setNewsContent(content)}
                                                    modules={{
                                                        toolbar: [
                                                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                                            ['link', 'image'],
                                                            ['clean'],
                                                        ],
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary mt-5" onClick={handleEditNews}>
                                            Lưu thay đổi
                                        </button>
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

export default memo(EditNewsAdmin);
