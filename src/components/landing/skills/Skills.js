

import { useState } from "react";
import Modal from "../../modal/Modal";
import Title from "../../titles/Title";

export default function Skills() {
    const [pop, setPop] = useState(false);
    const [type, setType] = useState("");

    const openType = (t) => {
        setType(t);
        setPop(true);
    };

    const closeModal = () => setPop(false);

    return (
        <div id="Skills" className="lg:py-14">
            <Title title="Skills" />
            <Modal pop={pop} Close={closeModal} type={type} />

            <div className="grid md:grid-cols-2 p-12 gap-14 ">

                <div className="border border-black rounded-xl p-8 px-2 relative ">
                    <p className="text-3xl text-center mb-6">Front End</p>

                    <div className="flex justify-items-center ">
                        <div className="grid grid-cols-2 mx-auto">
                            <div className="flex gap-2 py-2 px-8">
                                <i class="fa-solid fa-circle-check text-xl mt-0.5"></i>   
                                <div>
                                    <span className="text-2xl">HTML</span>
                                    <p className="text-gray-500">Experienced</p>
                                </div>
                            </div>                 
                            <div className="flex gap-2 py-2 px-8">
                                <i class="fa-solid fa-circle-check text-xl mt-0.5"></i>   
                                <div>
                                    <span className="text-2xl">CSS</span>
                                    <p className="text-gray-500">Experienced</p>
                                </div>
                            </div>                 
                            <div className="flex gap-2 py-2 px-8">
                                <i class="fa-solid fa-circle-check text-xl mt-0.5"></i>   
                                <div>
                                    <span className="text-2xl">JavaScript</span>
                                    <p className="text-gray-500">intermediate</p>
                                </div>
                            </div>                 
                            <div className="flex gap-2 py-2 px-8">
                                <i class="fa-solid fa-circle-check text-xl mt-0.5"></i>   
                                <div>
                                    <span className="text-2xl">React Js</span>
                                    <p className="text-gray-500">intermediate</p>
                                </div>
                            </div>                 
                            <div className="flex gap-2 py-2 px-8">
                                <i class="fa-solid fa-circle-check text-xl mt-0.5"></i>   
                                <div>
                                    <span className="text-2xl">BOOTSTRAP</span>
                                    <p className="text-gray-500">Experienced</p>
                                </div>
                            </div>                 
                            <div className="flex gap-2 py-2 px-8 ">
                                <i class="fa-solid fa-circle-check text-xl mt-0.5"></i>   
                                <div>
                                    <span className="text-2xl">Tailwind</span>
                                    <p className="text-gray-500">intermediate</p>
                                </div>
                            </div>                 
                        </div>
                    </div>
                    <div
                        onClick={() => openType("back")}
                        className="py-3 pt-6  font-semibold flex items-center justify-center gap-2 cursor-pointer group"
                        >
                        <p className="text-lg">What I offer</p>
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition duration-300"></i>
                    </div>
                </div>

                <div className="border border-black rounded-xl p-8 px-2 relative">
                    <p className="text-3xl text-center mb-6">Back End</p>

                    <div className="flex justify-items-center ">
                        <div className="grid grid-cols-2 mx-auto">
                            <div className="flex gap-2 py-2 px-8">
                                <i class="fa-solid fa-circle-check text-xl mt-0.5"></i>   
                                <div>
                                    <span className="text-2xl">PHP</span>
                                    <p className="text-gray-500">intermediate</p>
                                </div>
                            </div>                 
                            <div className="flex gap-2 py-2 px-8">
                                <i class="fa-solid fa-circle-check text-xl mt-0.5"></i>   
                                <div>
                                    <span className="text-2xl">MySql</span>
                                    <p className="text-gray-500">intermediate</p>
                                </div>
                            </div>                 
                            <div className="flex gap-2 py-2 px-8">
                                <i class="fa-solid fa-circle-check text-xl mt-0.5"></i>   
                                <div>
                                    <span className="text-2xl">Laravel</span>
                                    <p className="text-gray-500">intermediate</p>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <div
                        onClick={() => openType("back")}
                        className="pt-[88px] bottom-[-45px] left-[35%] font-semibold flex items-center justify-center gap-2 cursor-pointer group"
                        >
                        <p className="text-lg">What I offer</p>
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition duration-300"></i>
                    </div>
                </div>
            </div>


        </div>
    );
}
