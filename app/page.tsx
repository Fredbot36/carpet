import Image from 'next/image'
import {Inter} from 'next/font/google'
import {BackgroundVideo} from "@/app/components/BackgroundVideo";
import VideoPlayer from "@/app/components/VideoPlayer";
import { RiInstagramLine, RiTiktokLine, RiTwitterXLine, RiYoutubeLine } from 'react-icons/ri';
import { LuFacebook } from "react-icons/lu";


const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>

            {/*TODO: add website preloader (the video/image(s) should be loaded, before the website gets displayed)*/}
            {/* HERO SECTION */}
            <section id={"hero"} className={"h-[35rem] flex justify-center items-center box-border relative pt-0 px-12 pb-12 text-center"}>

                {/* background video */}
                <BackgroundVideo/>

                 {/* hero content className={"before:content-[''] before:block before:fixed before:inset-0 before:bg-neutral-950/[.7] before:-z-10 before:pointer-events-none z-0"}*/ }
                <div className={"z-0"}>

                    {/* branding */}
                    <Image
                        src={'/images/logo_lettering.png'}
                        alt={`CraftTogetherMC Logo`}
                        className={"inline-block object-cover cursor-pointer transition transform duration-500 hover:scale-105 drop-shadow-2xl"}
                        quality={100}
                        width={554}
                        height={222}
                    />

                </div>

                <div className={"h-64 absolute left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-neutral-900"}></div>

            </section>

            <section id={"content"}>

                <div className={`flex justify-center items-center w-full relative`}>
                    <div className={`flex flex-col xl:flex-row sm:w-2/3 max-w-[62rem] mx-10 max-xl:space-y-4 xl:space-x-4 items-center p-4 -mt-28 p-y-auto text-md font-normal text-neutral-200/[.9] bg-neutral-900/[.9] rounded-lg border border-white/[0.1]`}>

                        <div className={`w-full h-full max-w-[448px] max-h-[252px] md:min-w-[448px] md:min-h-[252px]`}>
                            {/*  TODO: Add skelleton  */}
                            <VideoPlayer url={"https://youtu.be/nY82tthVJm8"}/>
                        </div>

                        <div className={`items-center sm:px-4 lg:px-8 xl:px-4`}>

                            <p>
                                <b>CraftTogetherMC</b> ist ein gemütlicher, aufstrebender Minecraft-Server
                                und richtet sich an Freunde des <b>originalgetreuen (Vanilla) Minecraft</b>.
                            </p>

                            <p className={`mt-5`}>
                                Unser Konzept besteht darin, ein Spielerlebnis zu bieten, das sich anfühlt als würdest
                                du wie im Singleplayer — nur mit anderen Spielern — Vanilla-Minecraft spielen.
                            </p>

                            <div className={`flex flex-row items-stretch space-x-2 mt-5`}>
                                <button className={`grow rounded-lg border border-2 border-white/[0.1] bg-green-800/[.4] min-h-12 p-1`}>Jetzt Joinen!</button>
                                <button className={`grow rounded-lg border border-2 border-white/[0.1] bg-cyan-800/[.4] min-h-12 p-1`}>Weitere Informationen</button>
                            </div>

                        </div>

                    </div>
                </div>

                <div className={`flex flex-col justify-center items-center w-full relative pt-7 text-gray-300`}>
                    <p>Folge uns auf Social Media:</p>
                    <ul className={`flex flex-row font-extralight focus:[&_a]:text-white focus:[&_a]:outline-none focus:[&_a]:ring-0 [&_li]:mx-1.5 [&_li]:my-1 [&_li]:p-1 [&_li]:drop-shadow-md hover:[&_li]:text-white transition-all duration-200`}>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/crafttogethermc.de/">
                                <RiInstagramLine size={30}/>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="https://www.tiktok.com/@crafttogethermc">
                                <RiTiktokLine size={30}/>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="https://www.youtube.com/c/CraftTogetherDE">
                                <RiYoutubeLine size={30}/>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="https://www.facebook.com/CraftTogetherMC">
                                <LuFacebook size={30}/>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="https://twitter.com/CraftTogetherDE">
                                <RiTwitterXLine size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>

            </section>
            {/*
            TODO: Insert Credits

            CraftTogetherMC "Carpet" by [Ceddix](https://cedrik.me)
            Trailer & Background Video by Ashia
            */}

        </>
    )
}