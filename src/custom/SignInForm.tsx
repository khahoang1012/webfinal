
import {
  FaUser,
  FaUnlockAlt,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";

import { FaGoogle } from "react-icons/fa6";

import { FaSquareInstagram } from "react-icons/fa6";
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
} from "@/components/ui/alertdialog";
import Button from "./Button";
import Input from "./Input";

function SignInForm() {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          {" "}
          <button className="px-3 py-2 text-white">Sign In</button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-slate-900 bg-opacity-70 text-white ring-offset-2 ring-2 ">

    
      <AlertDialogHeader>
            <AlertDialogTitle>
              {" "}
              <div className=" relative flex justify-center items-center">
                <span className="text-xl font-bold font-serif ">Sign In</span>
                <AlertDialogCancel className="absolute text-xl hover:opacity-50 right-0 border-none">
                  <RiCloseLargeLine />
                </AlertDialogCancel>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-col">
                <div className="p-4 ">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <Input
                        type="text"
                        name="UserName"
                        placeholder="UserName"
                      />
                      <div className="absolute text-black top-3 right-4 ">
                        <FaUser />
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        type="password"
                        name="PassWord"
                        placeholder="PassWord"
                      />
                      <div className="absolute  text-black top-3 right-4 ">
                        <FaUnlockAlt />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <span>
                      Forgot Password ?{" "}
                      <a className="italic text-yellow-400" href="">
                        Click here
                      </a>
                    </span>

                    <span>
                      New User?{" "}
                      <a
                        className="italic text-yellow-500"
                        href="./SignUpForm.tsx"
                      >
                        Register here
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction>
              <Button />
            </AlertDialogAction>
          </AlertDialogFooter>
          <div className="flex justify-center items-center gap-4">
            <span>or login with</span>
            <div className="flex justify-center items-center text-xl gap-1">
              <FaFacebookSquare className="hover:scale-150 duration-100" />
              <FaSquareInstagram className="hover:scale-150 duration-100" />
              <FaTwitter className="hover:scale-150 duration-100" />

              <FaGoogle className="hover:scale-150 duration-100" />
            </div>
          </div>


 

         
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default SignInForm;
