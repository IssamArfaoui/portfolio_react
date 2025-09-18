
import { useEffect, useState } from "react";
import Mylinks from "./Mylinks";
import { Menu , X } from "lucide-react";
import { motion , AnimatePresence, px } from "motion/react";


export default function Header() {

    const [open , setOpen] = useState(false)
    const [hasShadow , SetHasShadow] = useState(false)

    useEffect ( () => {

        const handleScroll = () => {
            if(window.scrollY > 0) {
                SetHasShadow(true)
            }else {
                SetHasShadow(false)
            }
        }

        window.addEventListener("scroll" , handleScroll);
        return () => window.removeEventListener("scroll" , handleScroll);

    } , [])

    

    return (
        <div 
        className={`fixed bg-[#FAFAFA] left-0 right-0 flex justify-between items-center text-2xl md:px-24 px-8 py-4 z-40 transition-shadow duration-300 ${
            hasShadow ? "shadow-md" : ""
        }`}
        >
            <div>
                <a href="#" className="text-3xl font-semibold">ARFAOUI</a>
            </div>
            <ul className="hidden md:flex justify-center items-center ">
                <Mylinks />
            </ul>

            <AnimatePresence>
                {open && (

                <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute bg-[black] text-white left-0 right-0 top-0 py-28 p-5 text-center "
                >
                <ul className="">
                    <Mylinks />
                </ul>

                </motion.div>

                )}
            </AnimatePresence>

            <button className="md:hidden"
                onClick={() => {setOpen(!open)}}
                >
                {open ? <X size={28} className="text-white  duration-500 rotate-180 transition-all" />  : <Menu size={28} className="transition-all duration-500" />}
            </button>

        </div>
        
    )
}