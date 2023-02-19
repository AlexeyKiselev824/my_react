import React from 'react';
import Layout from '../components/layout/Layout';
import PostById from '../components/postById/PostById';

const PostPage = () => {
    return (
        <>
            <Layout>
                <PostById />
            </Layout>
        </>
    )
}

export default PostPage;