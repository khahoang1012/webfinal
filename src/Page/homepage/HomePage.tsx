import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";

import avt from "@/Page/homepage/img/avttt.jpg";
import Button from "@/custom/Button";

function HomePage() {
  return (
    <>
      <div className="px-28 pt-20 pb-12 text-white ">
        <div className=" grid grid-cols-2 text-[#ddd]">
          <div className="flex flex-col gap-4 font-bold mr-10  pt-10">
            <p className="text-4xl ">I am Salik</p>
            <div className=" ">
              <h1 className="bg-gradient-to-r from-blue-700  to-blue-300 to-[60%]  text-transparent bg-clip-text text-7xl bg-opacity-10 py-3 ">
                Web Developer+ UX Designer
              </h1>
            </div>
            <p className="text-2xl font-light mr-16">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div>
              <div className="flex items-center gap-4 pt-12 ">
                <Button name="Download CV" />
                <div className="flex items-center gap-4 text-xl">
                  <div className="relative border rounded-full p-2 z-0 text-blue-500  transition-all duration-1000 border-[#8750f7] hover:text-white group">
                    <FaFacebook />
                    <div className="absolute bg-blue-500  rounded-full -z-10 inset-0 scale-0 group-hover:scale-100 transition-all duration-500   "></div>
                  </div>
                  <div className="relative border rounded-full p-2 z-0 text-blue-500  transition-all duration-1000 border-[#8750f7] hover:text-white group">
                    <FaTwitter />
                    <div className="absolute bg-blue-500  rounded-full -z-10 inset-0 scale-0 group-hover:scale-100 transition-all duration-500   "></div>
                  </div>
                  <div className="relative border rounded-full p-2 z-0 text-blue-500  transition-all duration-1000 border-[#8750f7] hover:text-white group">
                    <FaGithub />
                    <div className="absolute bg-blue-500  rounded-full -z-10 inset-0 scale-0 group-hover:scale-100 transition-all duration-500   "></div>
                  </div>
                  <div className="relative border rounded-full p-2 z-0 text-blue-500  transition-all duration-1000 border-[#8750f7] hover:text-white group">
                    <TfiLinkedin />
                    <div className="absolute bg-blue-500  rounded-full -z-10 inset-0 scale-0 group-hover:scale-100 transition-all duration-500   "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center">
            <div className="overflow-hidden w-9/12 h-96  border-2 border-[#4d2b92] rounded-[38px] ml-10 hover:border-blue-600 hover:shadow-xl hover:shadow-purple-400 rotate-6 hover:rotate-0 transform-all duration-500">
              <div className="">
                <img className="w-full" src={avt} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-28 pb-12">
          <ul className="flex justify-between items-center text-[#ddd]">
            <li className="flex items-center gap-2 ">
              <p className="text-6xl  font-bold">14</p>{" "}
              <span className="w-16 text-left"> Years of Exprience</span>
            </li>
            <li className="flex items-center gap-2 ">
              <p className="text-6xl  font-bold">50+</p>{" "}
              <span className="w-16 text-left"> Project Completed</span>
            </li>
            <li className="flex items-center gap-2 ">
              <p className="text-6xl  font-bold">1.5K</p>{" "}
              <span className="w-16 text-left"> Happy Clients</span>
            </li>
            <li className="flex items-center gap-2 ">
              <p className="text-6xl  font-bold">14 </p>{" "}
              <span className="w-16 text-left">Years of Exprience</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
