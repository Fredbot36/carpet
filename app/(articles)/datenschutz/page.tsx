import React from "react";

import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const metadata = {
    title: 'Datenschutzerklärung',
}

export default function Datenschutz() {

    const markdownFile = fs.readFileSync(path.join('content/datenschutz.mdx'), 'utf-8')

    return (
        <>
            <div className={`prose prose-invert`}>
                <MDXRemote source={markdownFile}/>
            </div>
        </>
    )
}
