
import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
const EditBrandAdmin = () => {
    const navigate = useNavigate();
    const [newBrandName, setNewBrandName] = useState('');
    const [currentBrandName, setCurrentBrandName] = useState('');
    const { brandID } = useParams();
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchBrandDetails = async () => {
            try {
                const response = await axios.get(api + `/catalogs/${brandID}`, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`
                    }
                });


                setCurrentBrandName(response.data.catalogName);
            } catch (error) {

                //console.error('Error fetching brand details:', error);
            }
        };

        fetchBrandDetails();
    }, [api, brandID]);

    const handleEditBrand = async (e) => {
        e.preventDefault();

        const adminToken = Cookies.get('adminToken');

        try {
            const response = await axios.put(
                api + `/catalogs/update/${brandID}`,
                { catalogName: newBrandName },
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );

            navigate(admin_url + '/brands_list');
        } catch (error) {
            //console.error('Error editing brand:', error);
        }
    };

    return (

        <>
            <NotificationContainer />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Sửa thương hiệu </h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div className="col-xl">
                            <div className="card mb-4">

                                <div className="card-body">
                                    <form onSubmit={handleEditBrand}>
                                        <div className="mb-3">
                                            <label className="form-label" for="basic-icon-default-product-name">Tên thương hiệu mới</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-product-name2" className="input-group-text"><Icon icon="tabler:brand-itch" /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="basic-icon-default-product-name"
                                                    placeholder={currentBrandName}
                                                    aria-label="Tên thương hiệu mới"
                                                    aria-describedby="basic-icon-default-product-name2"
                                                    value={newBrandName}
                                                    onChange={(e) => setNewBrandName(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <button type="" className="btn btn-primary">Sửa thương hiệu</button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div></>
    );
};

export default memo(EditBrandAdmin);