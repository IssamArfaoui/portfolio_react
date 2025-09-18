
import Title from "../../titles/Title";

export default function Contact() {


    return (
        <div className="py-10">
            <div>
                <Title title="Get In Touch" />
                <p className="text-center text-lg">Contact Me</p>

                <div id="contact" className="py-12 md:flex justify-center ">

                    <div className=" md:w-2/6 flex justify-center">
                        <div className="py-5 px-4">
                            <h1 className="text-center text-xl mt-5">Contact Me</h1>
                            <div className="grid gap-4 justify-center text-center py-5">
                                <div className="bg-[#FFFFFF] p-5 px-10 border border-[#cecece] rounded-xl">
                                    <i class="fa-solid fa-envelope text-2xl"></i>
                                    <p>Email</p>
                                    <p>issamarfaouicb4@gmail.com</p>
                                    <div className="pt-3 group">
                                        <a href="mailto:issamarfaouicb4@gmail.com">
                                            <span className="text-sm">Contact Me </span>
                                            <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-2 transition duration-300"></i>
                                        </a>
                                    </div>
                                    
                                </div>
                                <div className="bg-[#FFFFFF] p-5 border border-[#cecece] rounded-xl">
                                    <i class="fa-brands fa-whatsapp text-2xl"></i>
                                    <p>Whatsapp</p>
                                    <p>06 93 68 54 83</p>
                                    <div className="pt-3 group">
                                        <a href="https://wa.me/+212693685483"  target="_blanc">
                                            <span className="text-sm">Contact Me </span> 
                                            <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-2 transition duration-300"></i>
                                        </a>
                                    </div>
                                    
                                </div>
                                <div className="bg-[#FFFFFF] p-5 border border-[#cecece] rounded-xl">
                                    <i class="fa-brands fa-linkedin text-2xl"></i>
                                    <p>linkedin</p>
                                    <p>ISSAM ARFAOUI</p>

                                    <div className="pt-3 group">
                                        <a href="https://www.linkedin.com/in/issam-arfaoui-68728519a/" target="_blanc">
                                            <span className="text-sm">Contact Me </span>
                                            <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-2 transition duration-300"></i>
                                        </a>
                                    </div>                              
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* lg:py-16 */}
                    <section class="dark:bg-gray-900 md:w-2/6 flex">
                        <div class="py-5 px-4 mx-auto max-w-screen-md">
                            <h1 className="text-center my-5 text-xl">Write me Your Project</h1>
                            <form 
                                action="https://formspree.io/f/xwpndeer" 
                                method="POST" class="space-y-8 my-10">
                                <div class="w-96 py-3">
                                    <div class="relative w-full max-w-sm min-w-[200px] ">
                                        <input
                                        name="name"
                                        required
                                        class="peer w-full resize-none rounded-[7px] border border-slate-300  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 "
                                        placeholder=""
                                        />
                                        <label
                                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Name
                                        </label>
                                    </div>
                                </div>
                                <div class="w-96 py-3">
                                    <div class="relative w-full max-w-sm min-w-[200px] ">
                                        <input
                                        name="email"
                                        required
                                        class="peer w-full resize-none rounded-[7px] border border-slate-300  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 "
                                        placeholder=""
                                        />
                                        <label
                                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Email
                                        </label>
                                    </div>
                                </div>

                                <div class="w-96 py-3">
                                    <div class="relative w-full min-w-[200px] ">
                                        <textarea
                                        name="message"
                                        required
                                        class="peer h-full min-h-[160px] w-full resize-none rounded-[7px] border border-slate-300  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 "
                                        placeholder=""></textarea>
                                        <label
                                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Message
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="rounded-md bg-black py-4 px-8 border border-transparent text-center text-sm text-white shadow-md hover:shadow-lg focus:bg-gray-800 focus:shadow-none active:bg-gray-800 hover:bg-gray-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105 transition-all">
                                        <span className="text-lg">Contact Me </span>
                                        <i class="fa-solid fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>  
            </div>
        </div>
    )
}