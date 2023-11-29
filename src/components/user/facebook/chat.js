import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const MyChatComponent = () => {
    const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
    const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID;

    return (
        <FacebookProvider appId={FACEBOOK_APP_ID}>
            <CustomChat pageId={FACEBOOK_PAGE_ID} minimized={true} />
        </FacebookProvider>
    );
};

export default MyChatComponent;
