import React from 'react';
import Counter from '../components/counter/Counter';
import Layout from '../components/layout/Layout';
import VideoFrame from '../components/videoFrame/VideoFrame';

const About = () => {
    return (
        <>
            <Layout>
                <Counter />
                <VideoFrame />
            </Layout>
        </>
    )
}

export default About;