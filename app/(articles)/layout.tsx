import React from "react";
import {NavBar} from "@/app/components/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`max-w-3xl mx-auto py-20 px-4`}>
            <body>
                <NavBar/>
                {children}
            </body>
        </html>
    )
}