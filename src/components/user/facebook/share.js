// Import các phần cần thiết
import React from 'react';
import { FacebookProvider, ShareButton } from 'react-facebook';

// Component React của bạn
function MyShareComponent({ idProduct }) {
    const FACEBOOK_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;
    const FACEBOOK_PAGE_ID = process.env.REACT_APP_FACEBOOK_PAGE_ID;
    const REACT_APP_URL = process.env.REACT_APP_URL;
    const shareURL = `${REACT_APP_URL}/product-detail/${idProduct}`;
    console.log(FACEBOOK_APP_ID);
    return (
        <div>
            {/* Wrap component trong FacebookProvider và cung cấp App ID */}
            <FacebookProvider appId={FACEBOOK_APP_ID}>
                {/* Sử dụng ShareButton với href mong muốn */}
                <ShareButton href={shareURL} className="share-facebook-button">
                    Share
                </ShareButton>
            </FacebookProvider>
        </div>
    );
}

export default MyShareComponent;
