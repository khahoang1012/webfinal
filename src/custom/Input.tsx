
interface input {
    name:string,
    placeholder?:string,
    type:string
}
function Input({name,placeholder,type}:input) {
  return (
    <div className="flex flex-col">
      <input
        className="  text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-blue-200 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-blue-600"
        autoComplete="off"
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </div>
  );
}

export default Input;
