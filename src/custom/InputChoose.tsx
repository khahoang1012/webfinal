

function InputChoose() {
  return (
    <div>
      <div className="relative group rounded-lg  overflow-hidden ">
        <select className="appearance-none w-full relative bg-[#222630] px-4 py-3 outline-none text-[#ddd] rounded-[8px] border-2 transition-colors duration-100 border-solid focus:border-[#845bc5] border-[#2B3040]">
          <option className="bg-neutral-700">Chose Service</option>
          <option className="bg-neutral-700">React</option>
          <option className="bg-neutral-700">Typescript</option>
          <option className="bg-neutral-700">Tailwind</option>
        </select>
      </div>
    </div>
  );
}

export default InputChoose;
