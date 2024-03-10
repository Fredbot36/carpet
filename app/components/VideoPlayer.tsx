"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer(props: { url: any; controls?: boolean; playing?: boolean; loop?: boolean; muted?: boolean }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        isClient ?
            <div className={'relative pt-[56.25%]'}>
                <ReactPlayer
                    url={props.url}
                    controls={props.controls}
                    playing={props.playing}
                    loop={props.loop}
                    muted={props.muted}
                    className={'absolute top-0 left-0'}
                    width={'100%'}
                    height={'100%'}
                    // picture in picture
                    pip={false}
                />
            </div> : <p>Video player loading...</p>
    )
};