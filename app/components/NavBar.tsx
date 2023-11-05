"use client";

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faHouse, faBook, faNewspaper, faGem, faMap, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const links = [
    { href: "/", label: "Home", icon: faHouse, external: false},
    { href: "/news", label: "News", icon: faNewspaper, external: false},
    { href: "/about", label: "Infos", icon: faCircleInfo, external: false},
    { href: "/rules", label: "Regeln", icon: faBook, external: false},
    { href: "/vote", label: "Voten", icon: faGem, external: false},
    { href: "https://map.craft-together-mc.de", label: "Livemap", icon: faMap, external: true},
    // { href: "https://discord.craft-together-mc.de", label: "Discord", icon: faDiscord, external: true}
];

export const NavBar = () => {

    return (
        <nav className={"w-100 relative z-50 flex flex-col items-center"}>
            <div className={"fixed top-10 block"}>
                <ul className={"flex flex-row"}>
                    {links.map((link) => (
                        <li key={link.href} className={"m-1"}>
                            <Link
                                href={link.href}
                                target={link.external ? '_blank' : '_self'}
                                className={"relative text-3xl text-neutral-200 hover:text-[#576490] bg-neutral-600/[.3] mx-2 mt-4 px-4 py-3 rounded-lg border border-white/[0.1]"}
                            >
                                <FontAwesomeIcon icon={link.icon} className={"text-3xl"}/>
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