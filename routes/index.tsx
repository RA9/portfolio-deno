import {Head} from "$fresh/runtime.ts";
// import Counter from "../islands/Counter.tsx";
import Footer from "../components/Footer.tsx";
import {PageProps} from "$fresh/src/server/types.ts";


export default function Home(props: PageProps) {
    return (
        <>
            <Head>
                <title>Carlos S. Nah</title>
            </Head>
            <main className={`mt-4`}>
                <div className="mx-auto max-w-3xl py-4 md:py-8 px-2">
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
                                Hey guys! My name is above, but you can call me <b>MrHumble</b>, and I am from a small
                                town called <b>Picnicess</b>, located in <i>Grand Kru County</i>, Liberia. Funnily
                                enough, I haven't been there; I look forward to visiting it someday.
                                <br/><br/>
                                Daily, I have engaged in teaching programming or computer science concepts, assisting my
                                team members in writing efficient codes that solve problems or getting abreast with the
                                latest technologies or news, and most of all; achieving my daily routines without
                                hiccups.
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
                                <li className="p-2 bg-gray-100 border-2 border-gray-100 rounded-lg">
                                    <a href="/about">About Me</a>
                                </li>
                                <li className="p-2 bg-gray-100 border-2 border-gray-100 rounded-lg">
                                    <a href="/blog">Blog</a>
                                </li>
                                <li className="p-2 bg-gray-100 border-2 border-gray-100 rounded-lg">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
