import {Head} from "$fresh/runtime.ts";
import {Handlers, PageProps} from "$fresh/server.ts";
import {State} from "../../utils/state.ts";
import {listPosts, Post} from "../../utils/posts.ts";
import Footer from "../../components/Footer.tsx";
import NavbarIsland from "../../islands/NavbarIsland.tsx";

interface Data extends State {
    posts: Post[];
}

export const handler: Handlers<Data, State> = {
    async GET(_req, ctx) {
        const posts = await listPosts();
        return ctx.render({...ctx.state, posts});
    },
};


export default function BlogList(props: PageProps<Data>) {
    const {posts} = props.data;
    return (
        <>
            <Head>
                <title>Blog - CSN</title>
                <meta name="title" content={"Sharing my thoughts through words | CSN"}/>
                <meta name="description"
                      content={`“Get programming and tech insights from MrHumble, a computer science expert and teacher from Liberia. Stay up to date with the latest tech news and learn how to write efficient code that solves problems.”`}/>
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website"/>

                <meta property="og:title" content={"Sharing my thoughts through words | CSN"}/>
                <meta property="og:description"
                      content={`“Get programming and tech insights from MrHumble, a computer science expert and teacher from Liberia. Stay up to date with the latest tech news and learn how to write efficient code that solves problems.”`}
                />
                {/*<meta property="og:image" content={site.ogImage} />*/}

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content={"Sharing my thoughts through words | CSN"}/>
                <meta property="twitter:description"
                      content={`“Get programming and tech insights from MrHumble, a computer science expert and teacher from Liberia. Stay up to date with the latest tech news and learn how to write efficient code that solves problems.”`}/>
                {/*<meta property="twitter:image" content={site.ogImage} />*/}
            </Head>

            <NavbarIsland isOpen={false} url={props.url} />

            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="mb-10 border-t border-b divide-y">
                    {
                        posts.map((post) => {
                            return (
                                <div class="grid py-8 sm:grid-cols-4">
                                    <div class="mb-4 sm:mb-0">
                                        <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                            <a href="/"
                                               class="transition-colors duration-200 text-sky-400 hover:text-deep-purple-800"
                                               aria-label="Category">{post.category}</a>
                                            <p class="text-gray-600">{post.publishedAt.toLocaleDateString("en", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric"
                                            })}</p>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-3 lg:col-span-2">
                                        <div class="mb-3">
                                            <a href={"/blog/" + post.slug} aria-label="Article"
                                               class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                                                <p class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                                    {post.title || ""}
                                                </p>
                                            </a>
                                        </div>
                                        <p class="text-gray-700">
                                            {post.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}