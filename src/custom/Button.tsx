import { LuDownload } from "react-icons/lu";
function Button({ name }: any) {
  return (
    <button className=" text-base font-normal bg-[#0F0715] border-2 border-[#8750f7cf] rounded-full  text-left hover:text-white
     hover:bg-[#8750f7cf] flex items-center gap-1  px-10 py-3 text-[#8750f7cf] hover:border-[#8750f7cf] cursor-pointer transition">
      {name} <div className="text-xl"><LuDownload/></div>
    </button>
  );
}

export default Button;
