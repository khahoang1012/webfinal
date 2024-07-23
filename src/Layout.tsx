import { Outlet, useLocation } from "react-router-dom";
import ButtonHome from "./custom/ButtonHome";
import logoHome from "@/Page/Card/img/logo.png";
export const dataLayout = [
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Work",
    path: "#work",
  },
  {
    title: "Resume",
    path: "#resumer",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Testimonials",
    path: "#testimonials",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
function Layout() {
  const location = useLocation();
  return (
    <>
      <div className="">
        <div className="flex justify-around gap-4 px-2 bg-[#050709] text-white  text-lg font-medium py-4 font-serif sticky z-50 left-0 top-0 right-0 shadow-lg shadow-blue-800 ">
          <div className=" flex justify-center items-center gap-2 ">
            <a href="/">
              {" "}
              <img src={logoHome} alt="" className="w-10" />
            </a>
            <a className=" drop-shadow-xl" href="">
              khahoang09nguyen@gmail.com
            </a>
          </div>
          <ul className={`flex justify-center items-center gap-4 py-3 `}>
            {dataLayout.map((data, index) => (
              <a
                onClick={() => {}}
                key={index}
                href={data.path}
                className={`${
                  location.hash === data.path
                    ? "before:scale-x-100 before:origin-bottom-left text-blue-500"
                    : ""
                } relative  before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px]
                 before:bg-gradient-to-r before:from-blue-500 before:to-blue-900 before:scale-x-0 before:origin-bottom-right 
                 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left`}
              >
                <li className="flex justify-center items-center gap-2 ">
                  <span>{data.title}</span>
                </li>
              </a>
            ))}
          </ul>
          <ButtonHome title = "Hire me!"/>
        </div>
        <div
          className={`w-full h-full  scroll-smooth  bg-gradient-to-br from-[#0F0715] to-[#291737] text-white`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
  