import { Head } from "$fresh/runtime.ts";
// import Counter from "../islands/Counter.tsx";
import Footer from "../components/Footer.tsx";


export default function Home() {
  return (
    <>
      <Head>
        <title>Carlos S. Nah</title>
      </Head>
      <main>
        <div className="mx-auto max-w-3xl py-24 md:py-20 px-2">
          <div className="rounded-lg bg-gray-200 flex flex-col justify-center items-center">
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
              <p className="p-4">
                .
                Pariatur enim cumque veniam animi quasi. Error vitae, eum
                laboriosam maxime vel eos earum aspernatur consequuntur iusto
                quod ducimus, repellendus illo expedita!
              </p>

              <div className="social-icons flex gap-3">
                <a href="">
                  <img src="" alt="" />
                </a>
                <a href="">
                  <img src="" alt="" />
                </a>
                <a href="">
                  <img src="" alt="" />
                </a>
                <a href="">
                  <img src="" alt="" />
                </a>
              </div>
            </div>

            <div className="mt-2">
              <ul className="flex  justify-center gap-4 p-4">
                <li className="p-2 bg-gray-200 border-2 border-gray-100 rounded-lg">
                  <a href="/about">About Me</a>
                </li>
                <li className="p-2 bg-gray-200 border-2 border-gray-100 rounded-lg">
                  <a href="/blog">Blog</a>
                </li>
                <li className="p-2 bg-gray-200 border-2 border-gray-100 rounded-lg">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
     <Footer />
    </>
  );
}
