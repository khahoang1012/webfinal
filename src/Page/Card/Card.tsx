import bg1 from "./img/bg1.jpg";
import bg2 from "./img/bg2.jpg";
import bg2mini from "./img/bg2mini.jpg";
import post1 from "./img/post-thumb-1.jpg";
import post2 from "./img/post-thumb-2.jpg";
import post3 from "./img/post-thumb-3.jpg";
import user1 from "./img/user-1.jpg";
import user2 from "./img/user-2.jpg";
import user3 from "./img/user-3.jpg";
import user4 from "./img/user-4.jpg";
import logo from "./img/logo.png";

import { GoArrowRight } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa6";
import { PiQuotesLight } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandPicsart } from "react-icons/tb";
import { FaAnglesLeft } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";

import InputForm from "@/custom/InputForm";
import { Textarea } from "@/components/ui/textarea";
import ButtonHome from "@/custom/ButtonHome";
import { dataLayout } from "@/Layout";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ScrollToTopButton from "@/custom/ScrollToTopButton";

function Card() {
  return (
    <>
      <div className="bg-[#050709] text-[#ddd] px-28">
        <div className=" py-28">
          <div className="text-5xl font-bold text-center">Blog Details</div>
          <div className="flex text-xl items-center justify-center mt-4 gap-2">
            <div>Home</div>
            <GoArrowRight />
            <p>Blog Details</p>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-6">
          <div className="col-span-2  rounded-tl-2xl rounded-tr-2xl overflow-hidden ">
            <img src={bg2} alt="" className=" bg-cover object-cover" />
            <div className=" uppercase absolute z-10 px-2 py-1 top-4 right-4 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full">
              tutorial
            </div>
            <div className="flex items-center gap-6 text-lg leading-none mt-9 tracking-wide">
              <div className="flex  items-center justify-center gap-1 ">
                <CiUser className="text-blue-500 text-2xl" />
                <p>By Admin</p>
              </div>
              <div className="flex  items-center justify-center gap-1">
                <CgCalendarDates className="text-blue-500 text-2xl" />
                11 Jul, 2023
              </div>
              <div className="flex  items-center justify-center gap-1">
                <FaRegComments className="text-blue-500 text-2xl" />
                <p>Comment(3)</p>
              </div>
            </div>
            <div>
              <p className="mt-5 text-3xl font-bold pr-20">
                The Role of Technology in Modern Logistics Management
              </p>
              <p className="mt-5">
                Welcome to our blog, where we celebrate our achievement as an
                AWS SaaS Competency Partner and share insights on how we
                accomplished this significant milestone.
              </p>
              <p className="mt-5">
                As businesses unlock growth opportunities in the digital age,
                harnessing the power of cloud computing has become essential.
                Amazon Web Services (AWS) offers the AWS SaaS Competency Partner
                program, recognizing companies with exceptional expertise in
                delivering Software-as-a-Service solutions on the AWS platform.
              </p>
              <p className="mt-5">
                In this blog, we will delve into the strategies, best practices,
                and key factors that accelerated our business growth and earned
                us the prestigious AWS SaaS Competency Partner status.
              </p>
            </div>
            <div className=" bg-[#140C1C] px-8 py-10 text-lg rounded-2xl mt-5">
              <PiQuotesLight className=" text-5xl mb-6 " />
              <p>
                “Welcome to our blog, where we celebrate our achievement as an
                AWS SaaS Competency Partner and share insights on how we
                accomplished this significant milestone. As businesses unlock
                growth opportunities in the digital age, harnessing the power of
                cloud computing has become essential. Amazon Web Services (AWS)
                offers the AWS SaaS Competency.”
              </p>
              <h1 className="text-xl font-bold italic mt-5">Silvester Scott</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
              <h1 className="text-2xl font-bold leading-7">
                The Role of Technology in Modern Logistics Management
              </h1>
              <p className="">
                Welcome to our blog, where we celebrate our achievement as an
                AWS SaaS Competency Partner and share insights on how we
                accomplished this significant milestone.
              </p>
              <p className="">
                As businesses unlock growth opportunities in the digital age,
                harnessing the power of cloud computing has become essential.
                Amazon Web Services (AWS) offers the AWS SaaS Competency Partner
                program, recognizing companies with exceptional expertise in
                delivering Software-as-a-Service solutions on the AWS platform.
              </p>
              <p className="">
                In this blog, we will delve into the strategies, best practices,
                and key factors that accelerated our business growth and earned
                us the prestigious AWS SaaS Competency Partner status.
              </p>
              <p className="">
                Explore the transformative impact of technology on logistics
                management. Discuss how technologies like IoT, AI, and
                blockchain are reshaping the industry and improving efficiency.
              </p>
            </div>
            <div className="mt-8">
              <h6 className="text-xl font-bold leading-tight mb-4">
                Key Points
              </h6>
              <ul className="grid grid-cols-1 gap-2 text-lg font-medium">
                <li className="flex items-center justify-start gap-2">
                  <IoIosCheckmarkCircle className=" text-blue-500" />{" "}
                  <span className="">IoT and Real-Time Tracking</span>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <IoIosCheckmarkCircle className=" text-blue-500" />{" "}
                  <span>
                    Artificial Intelligence in Route Optimization and Predictive
                    Analytics
                  </span>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <IoIosCheckmarkCircle className=" text-blue-500" />{" "}
                  <span>Blockchain for Enhanced Transparency and Security</span>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <IoIosCheckmarkCircle className=" text-blue-500" />{" "}
                  <span>Warehouse Automation and Robotics</span>
                </li>
              </ul>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-4 text-lg mr-2">
              <h1 className=" text-2xl font-bold">Conclusion</h1>
              <p>
                Emphasize the long-term benefits of integrating sustainable
                practices into logistics operations, both for the planet and a
                company's reputation.
              </p>
              <p>
                These outlines can be expanded into comprehensive blog posts,
                each providing valuable insights and information on the
                respective topics.
              </p>
            </div>
            <div className=" mt-12 p-8 border-y">
              <div className="flex gap-5">
                <div className="text-3xl font-medium">Tags</div>
                <div className="flex flex-wrap  items-center justify-start gap-4">
                  <div className="bg-[#140c1c] rounded-full py-2 px-5 ">
                    Business
                  </div>
                  <div className="bg-[#140c1c] rounded-full py-2 px-5 ">
                    Analysis
                  </div>
                  <div className="bg-[#140c1c] rounded-full py-2 px-5 ">
                    Technology
                  </div>
                  <div className="bg-[#140c1c] rounded-full py-2 px-5 ">
                    Design
                  </div>
                  <div className="bg-[#140c1c] rounded-full py-2 px-5 ">
                    Strategy
                  </div>
                  <div className="bg-[#140c1c] rounded-full py-2 px-5 ">
                    Tips
                  </div>
                </div>
                <div className="text-xl flex items-start justify-center gap-4">
                  <div className="border rounded-full p-1">
                    <TiSocialFacebook />
                  </div>
                  <div className="text-xs rounded-full border p-2">
                    <BsTwitterX />
                  </div>
                  <div className="border rounded-full p-1">
                    <TiSocialLinkedin />
                  </div>
                  <div className="border rounded-full p-2 text-xs">
                    <TbBrandPicsart />
                  </div>
                </div>
              </div>
            </div>

            {/* Revious Next */}
            <div className=" grid grid-cols-2 py-8 border-b gap-6">
              <div className="flex justify-start gap-5 bg-[#140c1c] px-6 py-9">
                <img src={bg1} alt="" className="w-1/4" />
                <div className="  flex-col justify-between gap-10">
                  <div className=" text-blue-800 flex items-center gap-2">
                    <FaAnglesLeft />
                    <p className="uppercase">previous</p>
                  </div>
                  <div className="pr-4 text-xl mt-2 font-bold hover:text-blue-800">
                    Buiding a Real Estate Website Tips and Ideas
                  </div>
                </div>
              </div>

              <div className="flex justify-end  gap-5 bg-[#140c1c] px-6 py-9">
                <div className=" flex flex-col justify-end ">
                  <div className=" text-blue-800 flex justify-end items-center gap-2">
                    <p className="uppercase">next</p>
                    <MdKeyboardDoubleArrowRight className="text-2xl" />
                  </div>
                  <div className="hover:text-blue-800 text-end text-xl mt-2 font-bold">
                    Architecture Is Not Based On Concrete And Steel
                  </div>
                </div>
                <img src={bg2mini} alt="" className="w-1/4 bg-cover" />
              </div>
            </div>
            <div className="mt-12 text-3xl font-bold pb-8">3 Comments</div>
            <div>
              <div className="flex gap-4 text-xl border-b ">
                <img src={user1} alt="" className=" w-32 h-32" />
                <div className="flex flex-wrap gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-blue-700">
                      Jane Doe
                    </h1>
                    <h2 className="text-sm">January 3, 2024</h2>
                  </div>
                  <p>
                    England dotted with a lush, green landscape, rustic villages
                    and throbbing with humanity. South Asian country that has
                    plenty to offer to visitors with its diverse wildlife.
                  </p>
                  <a
                    href=""
                    className=" hover:bg-blue-700 text-blue-600 hover:text-white transition-all duration-1000 border border-blue-600 px-5 py-1 mt-5 mb-8 "
                  >
                    Reply
                  </a>
                </div>
              </div>
              <div className="flex gap-4 text-xl border-b ml-8 mt-8">
                <img src={user2} alt="" className=" w-32 h-32" />
                <div className="flex flex-wrap gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-blue-700">
                      Jane Doe
                    </h1>
                    <h2 className="text-sm">January 3, 2024</h2>
                  </div>
                  <p>
                    England dotted with a lush, green landscape, rustic villages
                    and throbbing with humanity. South Asian country that has
                    plenty to offer to visitors with its diverse wildlife.
                  </p>
                  <a
                    href=""
                    className=" hover:bg-blue-700 text-blue-600 hover:text-white transition-all duration-1000 border border-blue-600 px-5 py-1 mt-5 mb-8 "
                  >
                    Reply
                  </a>
                </div>
              </div>
              <div className="flex gap-4 text-xl border-b  ml-8 mt-8">
                <img src={user3} alt="" className=" w-32 h-32" />
                <div className="flex flex-wrap gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-blue-700">
                      Jane Doe
                    </h1>
                    <h2 className="text-sm">January 3, 2024</h2>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here making it look like readable English.
                  </p>
                  <a
                    href=""
                    className=" hover:bg-blue-700 text-blue-600 hover:text-white transition-all duration-1000 border border-blue-600 px-5 py-1 mt-5 mb-8 "
                  >
                    Reply
                  </a>
                </div>
              </div>
              <div className="flex gap-4 text-xl border-b  mt-8 ">
                <img src={user4} alt="" className=" w-32 h-32" />
                <div className="flex flex-wrap gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-blue-700">
                      Jane Doe
                    </h1>
                    <h2 className="text-sm">January 3, 2024</h2>
                  </div>
                  <p>
                    England dotted with a lush, green landscape, rustic villages
                    and throbbing with humanity. South Asian country that has
                    plenty to offer to visitors with its diverse wildlife.
                  </p>
                  <a
                    href=""
                    className=" hover:bg-blue-700 text-blue-600 hover:text-white transition-all duration-1000 border border-blue-600 px-5 py-1 mt-5 mb-8 "
                  >
                    Reply
                  </a>
                </div>
              </div>
            </div>

            {/* leave a reply */}
            <div className="mt-8 pb-32">
              <h1 className="text-3xl font-bold">Leave a Reply</h1>
              <div className="mt-5  font-medium">
                <label htmlFor="">
                  Your email address will not be published. Required fields are
                  marked *
                </label>
                <div className="mt-5 grid grid-cols-2  gap-5">
                  <InputForm
                    type="text"
                    name="email1"
                    placeholder="Enter Email..."
                  />
                  <InputForm
                    type="text"
                    name="email2"
                    placeholder="Enter Email..."
                  />
                  <div className=" col-span-2">
                    <InputForm
                      type="text"
                      name="website"
                      placeholder="Enter Website..."
                    />
                  </div>
                  <div className=" col-span-2 ">
                    <Textarea placeholder="Enter Your Comment..." />
                  </div>
                  <div className="col-span-2 flex gap-2">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <div className="ml-10">
                    <ButtonHome title="Post Comment"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* Search */}
            <div className=" px-6 py-8 bg-[#140c1c] rounded-[8px]">
              <div className=" relative ">
                <InputForm name="search" type="text" placeholder="Search" />
                <div className="bg-blue-500 hover:bg-blue-900 transition duration-700 absolute text-3xl right-0 top-0 bottom-0 flex items-center justify-center px-3  rounded-br-[8px] rounded-tr-[8px]">
                  <HiMagnifyingGlass />
                </div>
              </div>
            </div>
            {/* Categories */}
            <div className=" bg-[#140c1c]  mt-6 py-8 rounded-[8px] px-6 text-white">
              <h1 className="uppercase text-xl font-bold ">categories</h1>
              <ul className="flex flex-col gap-5 mt-6">
                <li className="flex justify-between items-center ">
                  <p>Business</p>
                  <p className="text-blue-500">(4)</p>
                </li>
                <li className="flex justify-between items-center ">
                  <p>Analysis</p>
                  <p className="text-blue-500">(0)</p>
                </li>
                <li className="flex justify-between items-center ">
                  <p>Technology</p>
                  <p className="text-blue-500">(1)</p>
                </li>
                <li className="flex justify-between items-center ">
                  <p>Technology</p>
                  <p className="text-blue-500">(10)</p>
                </li>
              </ul>
            </div>
            {/* Resent Post */}
            <div className="bg-[#140c1c] mt-8 py-8 px-7 rounded-[8px]">
              <h1 className="uppercase text-xl font-bold ">resent post</h1>
              <div className=" flex flex-col gap-8 mt-6">
                <div className="flex justify-center items-center gap-4 group">
                  <div className=" w-1/4  overflow-hidden ">
                    <img
                      src={post1}
                      alt=""
                      className=" object-cover group-hover:scale-110 transition-all duration-700 "
                    />
                  </div>
                  <div className="flex flex-col justify-between items-start">
                    <div className="flex justify-start items-start text-lg   gap-6 ">
                      <div className="flex  items-center gap-1 ">
                        <CgCalendarDates className="text-blue-600" />
                        <p>Jan 2024</p>
                      </div>
                      <div className="flex items-center justify-start gap-1">
                        <FaRegComments className="text-blue-600" />
                        <span>(3)</span>
                      </div>
                    </div>
                    <p className="text-xl font-medium leading-6 hover:text-blue-600 pr-4">
                    Real-world Examples of Successful JIT Logistics
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4 group">
                  <div className=" w-1/4 overflow-hidden ">
                    <img
                      src={post2}
                      alt=""
                      className=" object-cover group-hover:scale-110 transition-all duration-1000"
                    />
                  </div>
                  <div className="flex flex-col justify-between items-start">
                    <div className="flex justify-start items-start text-lg   gap-6 ">
                      <div className="flex  items-center gap-1 ">
                        <CgCalendarDates className="text-blue-600" />
                        <p>Jan 2024</p>
                      </div>
                      <div className="flex items-center justify-start gap-1">
                        <FaRegComments className="text-blue-600" />
                        <span>(3)</span>
                      </div>
                    </div>
                    <p className="text-xl font-medium leading-6 pr-4  hover:text-blue-600">
                      Real-world Examples of Successful JIT Logistics
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4 group">
                  <div className=" w-1/4 overflow-hidden ">
                    <img
                      src={post3}
                      alt=""
                      className=" object-cover group-hover:scale-110 transition-all duration-1000"
                    />
                  </div>
                  <div className="flex flex-col justify-between items-start">
                    <div className="flex justify-start items-start text-lg   gap-6 ">
                      <div className="flex  items-center gap-1 ">
                        <CgCalendarDates className="text-blue-600" />
                        <p>Jan 2024</p>
                      </div>
                      <div className="flex items-center justify-start gap-1">
                        <FaRegComments className="text-blue-600" />
                        <span>(3)</span>
                      </div>
                    </div>
                    <p className="text-xl font-medium leading-6 pr-4  hover:text-blue-600">
                      Real-world Examples of Successful JIT Logistics
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-5 bg-[#140c1c] rounded-[8px] px-5 py-8">
              <h1 className="uppercase text-2xl font-bold">popular tag</h1>
              <div className="mt-5 flex flex-wrap gap-4 tracking-wide text-lg ">
                <div className=" px-3 border rounded-full hover:bg-blue-600 duration-500 transition">
                  Business
                </div>
                <div className=" px-3 border rounded-full hover:bg-blue-600 duration-500 transition">
                  Analysis
                </div>
                <div className=" px-3 border rounded-full hover:bg-blue-600 duration-500 transition">
                  Technology
                </div>
                <div className=" px-3 border rounded-full hover:bg-blue-600 duration-500 transition">
                  Finance
                </div>
                <div className=" px-3 border rounded-full hover:bg-blue-600 duration-500 transition">
                  Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-12 flex flex-col justify-between items-center gap-4 ">
        <img src={logo} alt="" className="w-[52px]" />
        <ul className="flex justify-between items-center  gap-3 text-lg font-medium ">
          {dataLayout.map((data, index) => (
            <li key={index}>{data.title}</li>
          ))}
        </ul>
        <p className="text-[#8750f7] text-xl font-light">
          © 2024 All rights reserved by ThemeJunction
        </p>
      </div>
      <ScrollToTopButton/>
    </>
  );
}

export default Card;
