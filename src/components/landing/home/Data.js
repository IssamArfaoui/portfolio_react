
import cv_arfaoui from "../../images/cv_arfaoui.txt"

export default function Data() {


    return (
        <div className="text-center p-3">
            <p className="text-2xl p-1">Hi , I'am</p>
            <p className="text-4xl font-bold p-1">ARFAOUI ISSAM</p>
            <p className="text-3xl p-1">FullStack Developer</p>
            <button className="m-4 py-4 px-12 transition-all bg-transparent hover:bg-black text-black font-semibold hover:text-white  border border-black hover:border-transparent rounded">
                <a 
                
                href={cv_arfaoui}
                download="cv_arfaoui"
                >
                    Download CV
                </a>
            </button>
        </div>
    )
}