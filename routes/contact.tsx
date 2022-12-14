import { Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar.tsx";
import {PageProps} from "$fresh/src/server/types.ts";

export default function Contact(props: PageProps) {
  return (
    <>
      <Head>
        <title>Contact - CSN</title>
      </Head>
      <Navbar url={props.url}/>
    
      <footer class="p-2 flex justify-center">
        <p className="font-medium text-xl text-gray-800">
          Made with <span className="text-[#dc2626] font-medium">&hearts;</span> in Monsterrado
        </p>
      </footer>
    </>
  );
}
