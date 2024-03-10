import React from "react";

import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const metadata = {
    title: 'Impressum',
}

export default function Impressum() {

    const markdownFile = fs.readFileSync(path.join('content/impressum.mdx'), 'utf-8')

    return (
        <>
            <div className={`prose prose-invert`}>
                <MDXRemote source={markdownFile}/>
            </div>
        </>
    )
}
