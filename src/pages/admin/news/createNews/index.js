import './style.scss';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import ReactQuill from 'react-quill'; // Import the ReactQuill component
import 'react-quill/dist/quill.snow.css'; // Import the styles for the snow theme

const CreateNewsAdmin = () => {
    const [newsTitle, setNewsTitle] = useState('');
    const [newsContent, setNewsContent] = useState('');
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const navigate = useNavigate();
    const adminToken = Cookies.get('adminToken');

    const handleAddNews = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                api + '/blogs', // Assuming the endpoint for adding news is /news
                { title: newsTitle, content: newsContent }, // Adjust the payload based on your API requirements
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            navigate(admin_url + '/news_list');
        } catch (error) {
            console.error('Error adding News:', error);
            // Handle error, display a notification, or perform any necessary actions
        }
    };


    return (
        <>
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4">
                        <span className="text-muted fw-light">PT Sports /</span> Thêm tin tức
                    </h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div className="col-xl">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="basic-icon-default-product-name">
                                                Tiêu đề
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="basic-icon-default-product-name"
                                                placeholder="Tiêu đề"
                                                aria-label="Tiêu đề"
                                                aria-describedby="basic-icon-default-product-name2"
                                                value={newsTitle}
                                                onChange={(e) => setNewsTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="basic-icon-default-product-name">
                                                Nội dung
                                            </label>
                                            <div className="input-group input-group-merge">
                                                <ReactQuill
                                                    className='content-news'
                                                    value={newsContent}
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

                                        <button type="submit" className="btn btn-primary mt-5" onClick={handleAddNews}>
                                            Thêm tin tức
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

export default memo(CreateNewsAdmin);
