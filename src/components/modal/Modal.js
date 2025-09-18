import BackModal from "./BackModal";
import FrontModal from "./FrontModal";

export default function Modal({ pop, Close, type }) {
  if (!pop) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="relative bg-white rounded-xl border border-black p-9 px-7 w-[480px] shadow-xl">
 
         <i
          onClick={Close}
          className="fa-solid fa-xmark text-xl absolute right-4 top-4 cursor-pointer hover:bg-slate-100 transition">            
        </i>

        {type === "front" && <FrontModal />}
        {type === "back" && <BackModal />}
      </div>
    </div>
  );
}
