import { Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar.tsx";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - CSN</title>
      </Head>
      <Navbar />
    
      <footer class="p-2 flex justify-center">
        <p className="font-medium text-xl text-gray-800">
          Made with <span className="text-[#dc2626] font-medium">&hearts;</span> in Monsterrado
        </p>
      </footer>
    </>
  );
}
