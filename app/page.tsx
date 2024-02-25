import Image from 'next/image'
import {Inter} from 'next/font/google'
import {NavBar} from "@/app/components/NavBar";
import {BackgroundVideo} from "@/app/components/BackgroundVideo";
import YouTubePlayer from '@/app/components/YouTubePlayer';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>

            {/*TODO: add website preloader (the video/image(s) should be loaded, before the website gets displayed)*/}

            <NavBar/>

            {/* HERO SECTION */}
            <section id={"hero"} className={"h-[35rem] flex justify-center items-center box-border relative pt-0 px-12 pb-12 text-center"}>

                {/* background video */}
                <BackgroundVideo/>

                 {/* hero content className={"before:content-[''] before:block before:fixed before:inset-0 before:bg-neutral-950/[.7] before:-z-10 before:pointer-events-none z-0"}*/ }
                <div className={"z-0"}>

                    {/* branding */}
                    <Image
                        // needs to be fixed in production!!!
                        unoptimized
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
                    <div className={`flex flex-row items-center p-4 -mt-28 m-x-auto p-y-auto w-2/3 space-x-4 text-md font-normal text-neutral-200/[.9] bg-neutral-900/[.9] rounded-lg border border-white/[0.1]`}>
                        <div>
                            <YouTubePlayer videoId="nY82tthVJm8" width="448" height="252"/>
                        </div>
                        <div className={`items-center px-4`}>
                            <p>
                                <b>CraftTogetherMC</b> ist ein gemütlicher, aufstrebender Minecraft-Server
                                und richtet sich an Freunde des <b>originalgetreuen (Vanilla) Minecraft</b>.
                            </p>

                            <p className={`mt-5`}>
                                Unser Konzept besteht darin, ein Spielerlebnis zu bieten, das sich anfühlt als würdest
                                du wie im Singleplayer — nur mit anderen Spielern — Vanilla-Minecraft spielen.
                            </p>

                            <div className={`flex flex-row items-stretch space-x-2 mt-5`}>
                                <button className={`grow rounded-lg border border-2 border-white/[0.1] bg-green-800/[.4] h-12`}>Jetzt Joinen!</button>
                                <button className={`grow rounded-lg border border-2 border-white/[0.1] bg-cyan-800/[.4] h-12`}>Weitere Informationen</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                {/*  TODO: Insert Social Media Links  */}
                </div>

            </section>

        </>
    )
}