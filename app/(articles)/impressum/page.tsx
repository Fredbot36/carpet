import React from "react";

import fs from 'fs'
import path from 'path'
import Article from "@/app/components/Article";

export const metadata = {
    title: 'Impressum',
}

export default function Impressum() {

    const markdownFile = fs.readFileSync(path.join('content/impressum.mdx'), 'utf-8')

    return (
        <Article title={"Impressum"} content={markdownFile}></Article>
    )
}
