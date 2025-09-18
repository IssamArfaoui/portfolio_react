
import img_profile  from "../../images/cv-image.jpg" 
import Data from "./Data"

export default function Home() {

    return (
        <div>
            <div className="h-screen flex justify-center items-center pt-5">  
                <div className='grid md:grid-cols-2 items-center gap-14 p-2'>
                    <div className="">
                        <img className='w-[340px] h-[340px] rounded-full object-cover' src={img_profile} alt="no thing" />
                    </div>
                    <div className="">
                        <Data />
                    </div>
                </div>
            </div>
        </div>
    )
}