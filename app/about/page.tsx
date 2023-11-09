import React from "react";
import Link from "next/link";
import {NavBar} from "@/app/components/NavBar";

export const metadata = {
    title: 'About',
}

export default function About() {
    return (

        <>
            <NavBar/>

            <h1>About Page!</h1>

        </>
    )
}
