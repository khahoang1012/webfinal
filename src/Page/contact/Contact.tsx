import InputChoose from "@/custom/InputChoose";
import InputForm from "@/custom/InputForm";
import { Textarea } from "@/components/ui/textarea";
import ButtonHome from "@/custom/ButtonHome";
import {
  MdPhoneInTalk,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";
import { dataLayout } from "@/Layout";
import logo from "@/Page/Card/img/logo.png";
function Contact() {
  return (
    <div id="contact" className="">
      <div className=" px-24 py-32 ">
        <div className="grid grid-cols-2">
          <div className="p-10 bg-[#140C1C] shadow-lg shadow-[#ddd] rounded-[15px]">
            <div className="pb-6">
              <p className="bg-gradient-to-r pb-4 from-blue-700  to-blue-300 to-[60%]  text-transparent bg-clip-text text-5xl font-bold bg-opacity-10">
                Let’s work together!
              </p>
              <p className="text-lg text-[#ddd]">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <InputForm
                  name="Fist name"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div>
                <InputForm
                  name="Last name"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div className="">
                <InputForm
                  name="Email address"
                  type="text"
                  placeholder="Email address"
                />
              </div>
              <div>
                <InputForm
                  name="Phone number"
                  type="text"
                  placeholder="Phone number"
                />
              </div>

              <div className=" col-span-2">
                <InputChoose />
              </div>
              <div className="col-span-2">
                <Textarea placeholder="Message" />
              </div>

              <div>
                <ButtonHome title="Send Messeage" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center text-xl font-medium h-full p-10">
              <ul className="">
                <li className="flex justify-start items-center gap-6 mb-10 ">
                  <div className=" text-2xl rounded-full flex justify-center bg-gradient-to-b from-blue-950 to-violet-600 items-center p-3">
                    <MdPhoneInTalk />
                  </div>
                  <div>
                    <p className="text-[#ddd]">Phone</p>
                    <p className="hover:text-blue-600">+84 326 484 769</p>
                  </div>
                </li>
                <li className="flex justify-start items-center gap-6 mb-10">
                  <div className=" text-2xl rounded-full flex justify-center bg-gradient-to-b from-blue-950 to-violet-600 items-center p-3">
                    <MdOutlineEmail />
                  </div>
                  <div>
                    <p className="text-[#ddd]">Email</p>
                    <p className="hover:text-blue-600">
                      hoangkha09nguyen@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex justify-start items-center gap-6 mb-10">
                  <div className=" text-2xl rounded-full flex justify-center bg-gradient-to-b from-blue-950 to-violet-600 items-center p-3">
                    <MdOutlineLocationOn />
                  </div>
                  <div>
                    <p className="text-[#ddd]">Address</p>
                    <p className="hover:text-blue-600">
                      Go Vap, Ho Chi Minh city
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#0F0715] py-12 flex flex-col justify-between items-center gap-4 ">
        <img src={logo} alt="" className="w-[52px]" />
        <ul className="flex justify-between items-center  gap-3 text-lg font-medium ">
          {dataLayout.map((data, index) => (
            <a
              href={data.path}
              key={index}
              className={`relative  before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-blue-500 before:to-blue-900 before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left`}
            >
              {data.title}
            </a>
          ))}
        </ul>
        <p className="text-[#8750f7] text-xl font-light">
          © 2024 All rights reserved by ThemeJunction
        </p>
      </div>
    </div>
  );
}

export default Contact;
