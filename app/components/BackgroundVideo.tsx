"use client";

import React, {useRef, useState} from 'react';
import { RiPlayFill, RiPauseFill } from "react-icons/ri";
import { AnimatePresence, motion, useInView } from 'framer-motion';

export const BackgroundVideo = () => {

    const backgroundVideo = useRef<HTMLVideoElement>(null!);
    const [isPlaying, setIsPlaying] = useState(true);
    const handlePlayVideo = () => {

        if (backgroundVideo.current.paused) {
            backgroundVideo.current.play();
            setIsPlaying(true);
        } else {
            backgroundVideo.current.pause();
            setIsPlaying(false);
        }

    }

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    function useIsVisible(ref: React.RefObject<any>) {
        return useInView(ref)
    }

    return (
        <>

            <video
                ref={backgroundVideo}
                autoPlay muted loop playsInline
                className={"w-full h-full absolute object-cover z-0 top-0 brightness-50"}
            >
                <source src={"videos/background1.webm"} type={"video/webm; codecs=vp9"}/>
                {/*TODO: multiple video formats*/}
                {/*TODO: multiple smaller videos, that get randomly chosen when website loads (rerecord videos)*/}
                {/*TODO: image on mobile devices*/}
            </video>

            <AnimatePresence>
                {useIsVisible(backgroundVideo!) ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={"fixed top-6 right-[1.8rem] block z-50"}
                    >
                        <div className={"flex flex-row max-md:hidden"}>
                            <button className={"relative h-9 text-lg font-medium text-neutral-200 bg-neutral-600/[.3] mx-0.5 p-2 rounded-lg border border-white/[0.1] transition ease-in-out duration-500 focus:outline-0 hover:border-white/[0.2] hover:shadow-md hover:shadow-[#34B4F4]/[0.1] hover:bg-white/[0.12] focus:outline-1"}
                                onClick={handlePlayVideo}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {isPlaying
                                    ? (<RiPauseFill className={"relative text-lg drop-shadow-lg"}/>)
                                    : (<RiPlayFill className={"relative text-lg drop-shadow-lg"}/>)
                                }

                            </button>
                        </div>
                    </motion.div>
                ) : ""}
            </AnimatePresence>


        </>
    )
}