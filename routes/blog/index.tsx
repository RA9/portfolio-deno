import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Navbar } from "../../components/Navbar.tsx";
import { State } from "../../utils/state.ts";
import { listPosts, Post } from "../../utils/posts.ts";

interface Data extends State {
  posts: Post[];
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};


export default function BlogList(props: PageProps<Data>) {
  const { posts } = props.data;
  return (
    <>
      <Head>
        <title>Blog - CSN</title>
      </Head>
      <Navbar />
      
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="mb-10 border-t border-b divide-y">
    {
      posts.map((post) => {
        return (
          <div class="grid py-8 sm:grid-cols-4">
      <div class="mb-4 sm:mb-0">
        <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
          <a href="/" class="transition-colors duration-200 text-sky-400 hover:text-deep-purple-800" aria-label="Category">Books</a>
          <p class="text-gray-600">5 Jan 2020</p>
        </div>
      </div>
      <div class="sm:col-span-3 lg:col-span-2">
        <div class="mb-3">
          <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
            <p class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
              Tell them I hate them
            </p>
          </a>
        </div>
        <p class="text-gray-700">
          Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows.
        </p>
      </div>
    </div>
        )
      })
    }
   </div>
</div>
      
       <footer class="p-2 flex justify-center">
        <p className="font-medium text-xl text-gray-800">
          Made with <span className="text-[#dc2626] font-medium">&hearts;</span> in Monsterrado
        </p>
      </footer>
    </>
    )
    }