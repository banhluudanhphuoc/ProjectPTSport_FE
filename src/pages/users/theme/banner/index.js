import { memo } from "react";


const Banner = ({ pageTitle }) => {

    return (
        <section class="banner-area organic-breadcrumb">
            <div class="container">
                <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div class="col-first">
                        <h1 className="mr-5">PT SPORTS</h1>
                        <nav class="d-flex align-items-center">
                            <h5>{pageTitle}</h5>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Banner);

