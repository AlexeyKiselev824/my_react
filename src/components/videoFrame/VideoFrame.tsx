import React from 'react';
import classes from './VideoFrame.module.css';

const VideoFrame = () => {
    return (
        <>
            <div className={classes['video']}>
                <div className="_container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1AMjsScachU"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </>
    );
}

export default VideoFrame;