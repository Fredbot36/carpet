"use client";

import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId, width, height }) => {
    // Set up event handlers
    const onReady = (event) => {
        // Access the player instance
        const player = event.target;

        // For example, you can automatically play the video
        // player.playVideo();
    };

    const onError = (error) => {
        console.error('YouTube Player Error:', error);
    };

    const opts = {
        height: height,
        width: width,
    };

    return (
        <YouTube
            videoId={videoId}
            onReady={onReady}
            onError={onError}
            opts={opts}
        />
    );
};

export default YouTubePlayer;