import {MDXRemote} from "next-mdx-remote/rsc";

export default function Article(props: { title: string; content: string; category?: string; author?: string; date?: string; lastUpdated?: string; imageUrl?: string }) {
    return (
        <>
            {props.category && (
                props.imageUrl ? (
                    <div className={`flex flex-col justify-center pt-1`}>
                        <div
                            className={`absolute h-32 top-1 left-0 right-0 bg-gradient-to-b to-transparent from-neutral-900 z-10`}></div>
                        <img src={props.imageUrl} alt="image"
                             className={`aspect-[920/150] object-cover w-full z-0 border-b-2 border-white/[0.1]`}/>
                        {/*<div
                            className={`relative h-32 -mt-32 left-0 right-0 bg-gradient-to-b from-transparent to-neutral-900 z-10`}></div>*/}
                        <div
                            className={`relative place-self-center -mt-5 -mb-24 rounded-md bg-neutral-900 border-2 border-white/[0.1] px-2 py-1 text-lg font-medium z-20`}>
                            {props.category}
                        </div>
                    </div>
                ) : (
                    <div className={`flex flex-col justify-center`}>
                        <div
                            className={`relative place-self-center mt-40 -mb-36 rounded-md bg-neutral-900 border-2 border-white/[0.1] px-2 py-1 text-lg font-medium z-20`}>
                            {props.category}
                        </div>
                    </div>
                )
            )}
                <article className={`prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto my-40 px-8 sm:px-0`}>
                    <div className={"text-center items-center flex flex-col"}>
                        <h1>{props.title}</h1>
                        {/* Date */}
                        {props.author && props.date && (
                            <small className={`-mt-8`}>
                                Geschrieben von {props.author} am {props.date}
                            </small>
                        )}
                        {/* Last Updated */}
                        {props.lastUpdated && (
                            <small className={`-mt-8`}>
                                Zuletzt aktualisiert am {props.lastUpdated}
                            </small>
                        )}
                    </div>

                    <MDXRemote source={props.content}/>
                </article>
        </>
    )
};