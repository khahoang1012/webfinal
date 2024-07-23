import CustomInput from "@/custom/CustomInput";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alertdialog"
  
function SignUpForm() {
  return (
    <>

      <AlertDialog >
  <AlertDialogTrigger> <button className="px-3 py-2 text-white">Sign Up</button></AlertDialogTrigger>
  <AlertDialogContent className="bg-white">
    <AlertDialogHeader>
      <AlertDialogTitle> <div className=" flex justify-end">
              <span className="text-xl font-bold font-serif ">Sign Up</span>
            </div></AlertDialogTitle>
      <AlertDialogDescription>
      <div className="flex flex-col">
            <div className="p-4 ">
              <div>
                <CustomInput type="text" name="Name" />
                <CustomInput type="password" name="Password" />
                <CustomInput type="password" name="Confirm Password" />
                <CustomInput type="email" name="Email" />
              </div>
            </div>
          </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Register</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </>
  );
}

export default SignUpForm;
