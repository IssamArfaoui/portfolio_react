
import Mylinks from "../header/Mylinks";
import gmail from "../images/gmail.png"
import whatsapp from "../images/whatsapp.png"
import linkedin from "../images/linkedin.png"

export default function Footer() {

    return (
        <div className="bg-white py-8 border-t border-gray-200">
            <div className="text-center text-xl">
                <div className="py-3 pt-7" >
                    <a href="#" className="text-3xl font-semibold">ARFAOUI</a>
                </div>
                <div>
                    <ul className="flex justify-center items-center p-5">
                        <Mylinks />
                    </ul>
                    <div className="flex justify-center gap-5 items-center p-5">
                        <a  href="https://wa.me/+212693685483"  target="_blanc">
                            <img title="whatsapp" className="w-11 hover:scale-110 transition-all" src={whatsapp} alt="" ></img>
                        </a>
                        <a href="https://www.linkedin.com/in/issam-arfaoui-68728519a/" target="_blanc">
                            <img title="linkedin" className="w-10 hover:scale-110 transition-all" src={linkedin} alt="" ></img>
                        </a>
                        <a href="mailto:issamarfaouicb4@gmail.com">
                            <img title="email" className="w-11 hover:scale-110 transition-all" src={gmail} alt="" ></img>
                        </a>
                    </div>
                    <div className="p-5">
                        <span className="footer__copy text-lg">&#169; Crypticalcoder. All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    )
}