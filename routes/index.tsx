import {Head} from "$fresh/runtime.ts";
// import Counter from "../islands/Counter.tsx";
import Footer from "../components/Footer.tsx";
import {PageProps} from "$fresh/src/server/types.ts";


export default function Home(props: PageProps) {
    return (
        <>
            <Head>
                <title>Carlos S. Nah</title>
                <meta name="title" content={"Carlos S. Nah | CSN"}/>
                <meta name="description"
                      content={`“Get programming and tech insights from MrHumble, a computer science expert and teacher from Liberia. Stay up to date with the latest tech news and learn how to write efficient code that solves problems.”`}/>
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website"/>

                <meta property="og:title" content={"Carlos S. Nah | CSN"}/>
                <meta property="og:description"
                      content={`“Get programming and tech insights from MrHumble, a computer science expert and teacher from Liberia. Stay up to date with the latest tech news and learn how to write efficient code that solves problems.”`}
                />
                {/*<meta property="og:image" content={site.ogImage} />*/}

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content={"Carlos S. Nah | CSN"}/>
                <meta property="twitter:description"
                      content={`“Get programming and tech insights from MrHumble, a computer science expert and teacher from Liberia. Stay up to date with the latest tech news and learn how to write efficient code that solves problems.”`}/>
                {/*<meta property="twitter:image" content={site.ogImage} />*/}
            </Head>
            <main className={`mt-4`}>
                <div className="mx-auto max-w-6xl py-4 md:py-4 px-2">
                    <div className="min-h-fit rounded-lg bg-gray-200 flex flex-col justify-center items-center">
                        <div className="avatar py-4">
                            <img
                                className="w-24 h-24"
                                src="https://api.multiavatar.com/CSN.svg"
                                alt="Carlos S. Nah"
                            />
                        </div>
                        <div className="content">
                            <h2 className="text-center text-2xl text-gray-800 font-medium">
                                Carlos S. Nah
                            </h2>
                            <small className="block text-center text-sm p-2">
                                Teacher, Gamer, & Software Engineer
                            </small>

                            {/* Intro */}
                            <p className="px-8 text-justify whitespace-normal antialiased">
                                My name is above alias MrHumble, and I’m originally from a small town called <b>Picnicess</b>,
                                located in <em>Grand Kru County</em>, Liberia. Unfortunately, I haven’t had the chance to visit
                                there yet, but it’s definitely on my list of places to go someday.
                                <br/><br/>
                                Daily, I’m passionate about teaching others about programming and computer science. I
                                love helping my team members write efficient code that solves problems, and I’m always
                                looking for ways to stay up to date with the latest technologies and news in the field.
                                <br/><br/>
                                But it’s not just about work - I’m also focusing on achieving my daily routines and
                                goals efficiently and effectively. Anything is possible with the right mindset and a
                                little hard work. Thank you for stopping by my site. I hope you find something here that
                                interests you and helps you on your journey.
                            </p>

                            <div className="social-icons flex gap-3">
                                <a href="">
                                    <img src="" alt=""/>
                                </a>
                                <a href="">
                                    <img src="" alt=""/>
                                </a>
                                <a href="">
                                    <img src="" alt=""/>
                                </a>
                                <a href="">
                                    <img src="" alt=""/>
                                </a>
                            </div>
                        </div>

                        <div className="mt-2">
                            <ul className="flex  justify-center gap-4 p-4">
                                {/*<li className="p-2 bg-gray-100 border-2 border-gray-100 rounded-lg">*/}
                                {/*    <a href="/about">About Me</a>*/}
                                {/*</li>*/}
                                <li className="p-2 bg-gray-100 border-2 border-gray-100 rounded-lg">
                                    <a href="/blog">Visit my blog!</a>
                                </li>
                                {/*<li className="p-2 bg-gray-100 border-2 border-gray-100 rounded-lg">*/}
                                {/*    <a href="/contact">Contact</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
