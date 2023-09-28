
import { memo, useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";


const CreateProductAdmin = () => {


    return (
        <>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
                    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">PT Sports /</span> Create new Product</h4>

                    <div class="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div class="col-xl">
                            <div class="card mb-4">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h5 class="mb-0">Basic with Icons</h5>
                                    <small class="text-muted float-end">Merged input group</small>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label" for="basic-icon-default-fullname">Full Name</label>
                                            <div class="input-group input-group-merge">
                                                <span id="basic-icon-default-fullname2" class="input-group-text"
                                                ><i class="bx bx-user"></i
                                                ></span>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="basic-icon-default-fullname"
                                                    placeholder="John Doe"
                                                    aria-label="John Doe"
                                                    aria-describedby="basic-icon-default-fullname2"
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="basic-icon-default-company">Company</label>
                                            <div class="input-group input-group-merge">
                                                <span id="basic-icon-default-company2" class="input-group-text"
                                                ><i class="bx bx-buildings"></i
                                                ></span>
                                                <input
                                                    type="text"
                                                    id="basic-icon-default-company"
                                                    class="form-control"
                                                    placeholder="ACME Inc."
                                                    aria-label="ACME Inc."
                                                    aria-describedby="basic-icon-default-company2"
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="basic-icon-default-email">Email</label>
                                            <div class="input-group input-group-merge">
                                                <span class="input-group-text"><i class="bx bx-envelope"></i></span>
                                                <input
                                                    type="text"
                                                    id="basic-icon-default-email"
                                                    class="form-control"
                                                    placeholder="john.doe"
                                                    aria-label="john.doe"
                                                    aria-describedby="basic-icon-default-email2"
                                                />
                                                <span id="basic-icon-default-email2" class="input-group-text">@example.com</span>
                                            </div>
                                            <div class="form-text">You can use letters, numbers & periods</div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="basic-icon-default-phone">Phone No</label>
                                            <div class="input-group input-group-merge">
                                                <span id="basic-icon-default-phone2" class="input-group-text"
                                                ><i class="bx bx-phone"></i
                                                ></span>
                                                <input
                                                    type="text"
                                                    id="basic-icon-default-phone"
                                                    class="form-control phone-mask"
                                                    placeholder="658 799 8941"
                                                    aria-label="658 799 8941"
                                                    aria-describedby="basic-icon-default-phone2"
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="basic-icon-default-message">Message</label>
                                            <div class="input-group input-group-merge">
                                                <span id="basic-icon-default-message2" class="input-group-text"
                                                ><i class="bx bx-comment"></i
                                                ></span>
                                                <textarea
                                                    id="basic-icon-default-message"
                                                    class="form-control"
                                                    placeholder="Hi, Do you have a moment to talk Joe?"
                                                    aria-label="Hi, Do you have a moment to talk Joe?"
                                                    aria-describedby="basic-icon-default-message2"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                                            <input class="form-control" type="file" id="formFileMultiple" multiple />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Send</button>
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

export default memo(CreateProductAdmin);