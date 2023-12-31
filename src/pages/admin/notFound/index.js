import React from 'react';
import "./style.scss";
import { memo, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Img404 from "../../../assets/users/404/page-misc-error-light.png";
const NotFoundAdmin = () => {
    return <>
        <div class="container-xxl container-p-y not-found">
            <div class="misc-wrapper">
                <h2 class="mb-2 mx-2">Page Not Found :(</h2>
                <p class="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
                <div class="mt-3">
                    <img
                        src={Img404}
                        alt="page-misc-error-light"
                        width="500"
                        class="img-fluid"
                        data-app-dark-img="illustrations/page-misc-error-dark.png"
                        data-app-light-img="illustrations/page-misc-error-light.png"
                    />
                </div>
            </div>
        </div>
    </>
}
export default memo(NotFoundAdmin);

