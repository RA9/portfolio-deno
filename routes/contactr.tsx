import {Head} from "$fresh/runtime.ts";
import {Navbar} from "../components/Navbar.tsx";
import {PageProps} from "$fresh/src/server/types.ts";
import Footer from "../components/Footer.tsx";

export default function Contactr(props: PageProps) {
    return (
        <>
            <Head>
                <title>Contact - CSN</title>
            </Head>
            <Navbar url={props.url}/>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="first_name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                name</label>
                            <input type="text" id="first_name"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="John" required/>
                        </div>
                        <div>
                            <label htmlFor="last_name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                name</label>
                            <input type="text" id="last_name"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Doe" required/>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                            address</label>
                        <input type="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="john.doe@company.com" required/>
                    </div>
                    <div className={"mb-6"}>

                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            message</label>
                        <textarea id="message" rows={4}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Write your thoughts here..."></textarea>

                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                   required/>
                        </div>
                        <label htmlFor="remember"
                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with
                            the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and
                                conditions</a>.</label>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                </form>
            </div>


            <Footer/>
        </>
    );
}
