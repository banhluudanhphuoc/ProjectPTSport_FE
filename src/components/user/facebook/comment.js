import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

const CommentSection = ({ url }) => {
    const FACEBOOK_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;

    return (

        <Comments href={url} />

    );
};

export default CommentSection;
