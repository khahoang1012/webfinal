import { Input } from "@/components/ui/input";
interface type {
  name: string;
  type: string;
}
function CustomInput({ name, type }: type) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium mt-2 " htmlFor={name}>
        {name}
      </label>
      <Input name={name} type={type} />
    </div>
  );
}

export default CustomInput;
