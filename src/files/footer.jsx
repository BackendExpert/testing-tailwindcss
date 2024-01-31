import React from "react";


const Footer = () => {
  return (

    <footer class=" bg-purple-900  relative text-gray-200 ">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <div class="py-[60px] px-0">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div class="lg:col-span-4 md:col-span-12">
                                <a href="#" class="text-[22px] focus:outline-none">
                                    <img class="h-12"
                                        src="https://avatars.githubusercontent.com/u/139304882?s=200&v=4"
                                        alt="" />
                                </a>
                                <p class="mt-6 text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <ul class="list-none mt-6">
                                    <li class="inline">
                                        <a href=""
                                            class="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600  hover:bg-yellow-600 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-gray-300"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="inline">
                                        <a href=""
                                            class="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600  hover:bg-yellow-600 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-gray-300"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="inline">
                                        <a href=""
                                            class="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600  hover:bg-yellow-600 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-gray-300"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="inline">
                                        <a href=""
                                            class="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-0 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600  hover:bg-yellow-600 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-gray-300"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>

                            </div>


                            <div class="lg:col-span-2 md:col-span-4">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold">
                                    Company
                                </h5>
                                <ul class="list-none  mt-6">
                                    <li>
                                        <a href="#"
                                            class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                            About us</a>
                                    </li>
                                    <li class="mt-[10px]">
                                        <a href="#"
                                            class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                            Services</a>
                                    </li>
                                    <li class="mt-[10px]">
                                        <a href="#"
                                            class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                            Pricing</a>
                                    </li>
                                    <li class="mt-[10px]">
                                        <a href="#"
                                            class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                            Blog</a>
                                    </li>
                                </ul>
                            </div>


                            <div class="lg:col-span-3 md:col-span-4">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold">
                                    Important Links
                                </h5>
                                <ul class="list-none  mt-6">
                                    <li>
                                        <a href="#"
                                            class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                            Terms of Services</a>
                                    </li>
                                    <li class="mt-[10px]">
                                        <a href="#"
                                            class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                            Privacy Policy</a>
                                    </li>
                                    <li class="mt-[10px]">
                                        <a href="#"
                                            class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                            Documentation</a>
                                    </li>
                                </ul>
                            </div>


                            <div class="lg:col-span-3 md:col-span-4">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold">
                                    Newsletter
                                </h5>
                                <p class="mt-6">
                                    Sign up and receive the latest tips via email.
                                </p>
                                <form>
                                    <div class="grid grid-cols-1">
                                        <div class=" my-3">
                                            <label class="form-label">Write your email
                                                <span class="text-red-600">*</span></label>
                                            <div class="relative mt-2">

                                                <input type="email"
                                                    class="w-full py-2 px-3   rounded h-10 outline-none bg-transparent rounded-t-sm rounded-r-none rounded-b-none rounded-l-sm outline-0 border border-gray-800/90 text-gray-100  focus:shadow-none focus:border-gray-800/90"
                                                    placeholder="Email" name="email" required="" />
                                            </div>
                                        </div>

                                        <button type="submit" id="submitsubscribe" name="send"
                                            class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#FFCDA3] border-[#FFCDA3] text-black rounded-md">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>


        <div class="py-7 px-0 border-t border-gray-800">
            <div class="container mx-auto px-6 text-center">
                <div class="grid md:grid-cols-2 items-center">
                    <div class="md:text-left text-center">
                        <p class="mb-0">
                            &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                            TailwindSnippets Team
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </footer>

  );
};

export default Footer;