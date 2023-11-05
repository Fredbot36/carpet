import Image from 'next/image'
import {Inter} from 'next/font/google'
import {NavBar} from "@/app/components/NavBar";
import React from "react";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>

            {/*TODO: add website preloader (the video/image(s) should be loaded, before the website gets displayed)*/}

            <NavBar/>

            {/* HERO SECTION */}
            <section id={"hero"} className={"h-[56rem] flex justify-center items-center box-border relative pt-16 px-12 pb-12 text-center"}>

                {/* background video */}
                <video
                    autoPlay muted loop playsInline
                    className={"w-full h-full absolute object-cover z-0 top-0 brightness-50"}
                >
                    <source src={"videos/background1.webm"} type={"video/webm; codecs=vp9"}/>
                    {/*TODO: multiple video formats*/}
                    {/*TODO: multiple smaller videos, that get randomly chosen when website loads (rerecord videos)*/}
                    {/*TODO: image on mobile devices*/}
                </video>

                 {/* hero content className={"before:content-[''] before:block before:fixed before:inset-0 before:bg-neutral-950/[.7] before:-z-10 before:pointer-events-none z-0"}*/ }
                <div className={"z-0"}>

                    {/* branding */}
                    <Image
                        src={`/images/logo_lettering.png`}
                        alt={`CraftTogetherMC Logo`}
                        className={"inline-block object-cover cursor-pointer transition transform duration-500 hover:scale-105 drop-shadow-2xl"}
                        quality={100}
                        width={554}
                        height={222}
                    />

                </div>

                <div className={"h-72 absolute left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-neutral-900"}>

                </div>

            </section>

            <section id={"content"}>

            </section>

        </>
    )
}