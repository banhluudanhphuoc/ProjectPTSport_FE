import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const MyChatComponent = () => {
    const FACEBOOK_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;
    const FACEBOOK_PAGE_ID = process.env.REACT_APP_FACEBOOK_PAGE_ID;

    return (

        <FacebookProvider appId={FACEBOOK_APP_ID} chatSupport>
            <CustomChat pageId={FACEBOOK_PAGE_ID} minimized={true} />
        </FacebookProvider>
    );
};

export default MyChatComponent;
