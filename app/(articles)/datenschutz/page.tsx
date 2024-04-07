import React from "react";

import fs from 'fs'
import path from 'path'
import Article from "@/app/components/Article";

export const metadata = {
    title: 'Datenschutzerklärung',
}

export default function Datenschutz() {

    const markdownFile = fs.readFileSync(path.join('content/datenschutz.mdx'), 'utf-8')

    return (
        <Article title={"Datenschutzerklärung"} content={markdownFile}></Article>
    )
}
