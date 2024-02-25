"use client";

import React from 'react';
import Link from 'next/link';
import { RiHome4Fill, RiNewspaperFill, RiBookMarkFill, RiVipDiamondFill, RiMap2Fill } from "react-icons/ri";
import {usePathname} from "next/navigation";

const links = [
    { href: "/", label: "Home", icon: RiHome4Fill, external: false},
    { href: "/news", label: "News", icon: RiNewspaperFill, external: false},
    // { href: "/about", label: "Infos", icon: faCircleInfo, external: false},
    { href: "/tutorials/regelwerk", label: "Regeln", icon: RiBookMarkFill, external: false},
    { href: "/tutorials/voten", label: "Votes", icon: RiVipDiamondFill, external: false},
    { href: "https://map.craft-together-mc.de", label: "Livemap", icon: RiMap2Fill, external: true},
    // { href: "https://discord.craft-together-mc.de", label: "Discord", icon: FaDiscord, external: true}
];

export const NavBar = () => {

    const path = usePathname();

    return (
        <nav className={"w-100 relative z-50 flex flex-col items-center"}>
            <div className={"fixed top-5 block"}>
                <ul className={"flex flex-row"}>
                    {links.map((link) => (
                        <li key={link.href} className={"m-1"}>
                            <Link
                                href={link.href}
                                target={link.external ? '_blank' : '_self'}
                                className={"flex items-center h-9 text-lg font-normal text-neutral-200 bg-neutral-600/[.3] mx-0.5 p-2 rounded-lg border border-white/[0.1] transition ease-in-out duration-500 focus:outline-0"
                                    + (link.href === path
                                    ? "shadow-md shadow-[#34B4F4]/[0.2] border-[#34B4F4]/[0.4] bg-white/[0.12] font-bold"
                                    : "hover:border-white/[0.2] hover:shadow-md hover:shadow-[#34B4F4]/[0.1] hover:bg-white/[0.12] focus:border-white/[0.2] focus:shadow-md focus:shadow-[#34B4F4]/[0.1] focus:bg-white/[0.12]"
                                )}
                            >
                                <link.icon className={"inline top-10 drop-shadow-lg"}/>
                                &thinsp;&thinsp;
                                {link.label}
                                {/*{link.external &&*/}
                                {/*    <>*/}
                                {/*        &thinsp;<sup><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></sup>*/}
                                {/*    </>*/}
                                {/*}*/}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}