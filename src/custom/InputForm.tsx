
interface inputForm {
    name:string,
    placeholder:string,
    type:string
}
function InputForm({name,placeholder,type}:inputForm) {
  return (
    <div>
      <input
        className="w-full  bg-[#222630] px-4 py-3 outline-none text-white rounded-[8px] border-2 transition-colors duration-100 border-solid focus:border-[#845bc5] border-[#2B3040]"
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
export default InputForm;
