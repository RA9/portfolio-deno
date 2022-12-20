import {Handlers, PageProps} from "$fresh/server.ts";
import * as gfm from "$gfm";
import {loadPost} from "../../utils/posts.ts";
import {Head} from "$fresh/src/runtime/head.ts";
import Footer from "../../components/Footer.tsx";



interface Data {
    post: Post | null;
}

export const handler: Handlers<Data> = {
    async GET(_req, ctx) {
        const newPost = await loadPost(ctx.params.slug);
        return ctx.render({...ctx.state, post: newPost});
    },
};

export default function Post(props: PageProps<Data>) {
    const {post} = props.data;
    return (
        <>
            <Head>
                <title>{post.title} - CSN</title>
                <meta name="title" content={`${post.title} by Carlos S. Nah | CSN`}/>
                <meta name="description"
                      content={`${post.description}`}/>
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website"/>

                <meta property="og:title" content={`${post.title} by Carlos S. Nah | CSN`}/>
                <meta property="og:description"
                      content={`${post.description}`}
                />
                {/*<meta property="og:image" content={site.ogImage} />*/}

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content={`${post.title} by Carlos S. Nah | CSN`}/>
                <meta property="twitter:description"
                      content={`${post.description}`}/>
                {/*<meta property="twitter:image" content={site.ogImage} />*/}
                <style dangerouslySetInnerHTML={{__html: gfm.CSS}}/>
            </Head>

            <div className="w-full px-1  md:px-4 mx-auto max-w-screen-md">

                <section className="w-full  flex flex-col items-center px-3">
                    <article className="w-full flex flex-col shadow my-4">
                        {/*// <!-- Article Image -->*/}
                        {/*<a href="#" className="hover:opacity-75">*/}
                        {/*    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />*/}
                        {/*</a>*/}

                        <div className={`p-4 bg-gray-50`}>
                            <a href="/blog" className={`flex`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                </svg> Back
                            </a>
                        </div>

                        <div className="bg-gray-50 flex flex-col justify-start p-6">
                            <a href="#"
                               className="text-blue-700 text-sm font-bold uppercase pb-4">{post.category || ""}</a>
                            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{post.title || ""}</a>
                            <p href="#" className="text-sm pb-8">
                                By <a href="#" className="font-semibold hover:text-gray-800">Carlos S. Nah</a>,
                                Published
                                on {post.publishedAt.toLocaleDateString("en", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            })}
                            </p>
                            <div className={"markdown-body"}
                                 dangerouslySetInnerHTML={{__html: gfm.render(post.content)}}></div>
                        </div>
                    </article>
                </section>
            </div>

            <Footer />
        </>
    )
}