import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Article from "@/app/components/Article";

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('content/tutorials'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getTutorials({slug}:{slug : string}){
    const markdownFile = fs.readFileSync(path.join('content/tutorials',slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default function Tutorial({ params } : any) {
    const props = getTutorials(params);

    return (
        <Article title={props.frontMatter.title} content={props.content} category={"Tutorials"} lastUpdated={props.frontMatter.lastUpdated} imageUrl={props.frontMatter.imageUrl}></Article>
    )
}