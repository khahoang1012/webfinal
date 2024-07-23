import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import avt1 from "./img/avt1.jpg";
import avt2 from "./img/avt2.jpg";

import bg1 from "./img/bg1.jpg";
import bg2 from "./img/bg2.jpg";
import bg3 from "./img/bg3.jpg";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide} from "swiper/react";
import {
  Pagination,
} from "swiper/modules";

function Testimonials() {
  const dataCard = [
    {
      logo: img1,
      avt: avt1,
      icon1: <FaCaretLeft />,
      icon2: <FaCaretRight />,
      text: " ''Taylor is a professional Designer he really help my bussiness by provideing value to my bussiness.",
      person: "Brandon Fraser",
      job: "Senior Software Dev,Cosmit Sport",
    },
    {
      logo: img2,
      avt: avt2,
      icon1: <FaCaretLeft />,
      icon2: <FaCaretRight />,
      text: "''Taylor is a professional Designer he really help my bussiness by provideing value to my bussiness.",
      person: "Brandon Fraser",
      job: "Senior Software Dev,Cosmit Sport",
    },
    {
      logo: img1,
      avt: avt1,
      icon1: <FaCaretLeft />,
      icon2: <FaCaretRight />,
      text: " ''Taylor is a professional Designer he really help my bussiness by provideing value to my bussiness.",
      person: "Brandon Fraser",
      job: "Senior Software Dev,Cosmit Sport",
    },
    {
      logo: img2,
      avt: avt2,
      icon1: <FaCaretLeft />,
      icon2: <FaCaretRight />,
      text: "''Taylor is a professional Designer he really help my bussiness by provideing value to my bussiness.",
      person: "Brandon Fraser",
      job: "Senior Software Dev,Cosmit Sport",
    },
    {
      logo: img1,
      avt: avt1,
      icon1: <FaCaretLeft />,
      icon2: <FaCaretRight />,
      text: " ''Taylor is a professional Designer he really help my bussiness by provideing value to my bussiness.",
      person: "Brandon Fraser",
      job: "Senior Software Dev,Cosmit Sport",
    },
    {
      logo: img2,
      avt: avt2,
      icon1: <FaCaretLeft />,
      icon2: <FaCaretRight />,
      text: "''Taylor is a professional Designer he really help my bussiness by provideing value to my bussiness.",
      person: "Brandon Fraser",
      job: "Senior Software Dev,Cosmit Sport",
    },
  ];

  return (
    <>
      <div id="testimonials" className=" grid grid-cols-2 px-28 py-32">
        <div className="mr-32">
          <p className="text-5xl py-2 font-bold bg-gradient-to-r from-blue-700  to-blue-300 to-[60%]  text-transparent bg-clip-text">
            My Client's Stories
          </p>
          <p className="text-xl mt-4">
            Empowering people in new a digital journey with my super services
          </p>
        </div>
        {/* card */}
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={10}
          slidesPerGroup={2}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="w-[636px]"
        >
          <div>
            {dataCard.map((data, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center text-white "
              >
                <div className=" p-6 bg-[#140c1c] rounded-2xl group">
                  <div className="flex justify-between items-start overflow-hidden ">
                    <img src={data.logo} alt="" />
                    <img
                      src={data.avt}
                      alt=""
                      className="boder rounded-bl-full w-1/3 "
                    />
                  </div>

                  <div className="flex mt-5 text-3xl  ">
                    <FaCaretLeft className=" group-hover:rotate-45 duration-300" />
                    <FaCaretRight className=" group-hover:-rotate-45 duration-300" />
                  </div>

                  <div className="">
                    <p className="text-xl text-[#ddd] leading-tight mt-6">
                      {data.text}
                    </p>
                  </div>

                  <div className="mt-12">
                    <p className="text-lg font-bold">{data.person}</p>
                    <p className="text-sm">{data.job}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <div  className="bg-[#0F0715] px-28 py-32">
        <div className="text-center clear-start mx-72 ">
          <p className="  text-5xl py-2 font-bold bg-gradient-to-r from-blue-700  to-blue-300 to-[60%]  text-transparent bg-clip-text">
            Recent Blogs
          </p>
          <p className="text-xl mx-[15px] pt-4 pb-12">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-3 gap-4">
          <a
            href="/card"
            className=" relative rounded-2xl overflow-hidden text-white group"
          >
            <div className=" absolute top-4 left-4 uppercase text-sm  rounded-full bg-gradient-to-r from-[#8750f7] from-[0%] to-[#2a1454] py-1 text-center w-1/5 z-50">
              tutarial
            </div>
            <div className="absolute z-10 bottom-4 left-4 bg-[#2a1454] group-hover:bg-blue-900 transition-all duration-700 right-4 rounded-2xl p-4 transform-capitalize">
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center gap-1 text-left  group-hover:text-[#ddd] text-sm font-medium text-blue-700 ">
                  <CiCalendarDate className="text-xl" />
                  <p>Oct 01, 2022</p>
                </div>
                <div className="flex items-center gap-1 text-left  group-hover:text-[#ddd] text-sm font-medium text-blue-700">
                  <TiMessages className="text-xl" />
                  <p>Comment(0)</p>
                </div>
              </div>
              <div className="text-2xl font-bold">Top 10 Ui Ux Designers </div>
            </div>
            <img
              src={bg1}
              alt=""
              className=" object-cover w-full hover:scale-110 transition-all duration-700"
            />
          </a>
          {/* card2 */}
          <Link
            to="/card"
            className=" relative rounded-2xl overflow-hidden text-white group"
          >
            <div className=" absolute top-4 left-4 uppercase text-sm  rounded-full bg-gradient-to-r from-[#8750f7] from-[0%] to-[#2a1454] py-1 text-center w-1/5 z-50">
              tips
            </div>
            <div className="absolute z-10 bottom-4 left-4 bg-[#2a1454] group-hover:bg-blue-900 transition-all duration-700 right-4 rounded-2xl p-4 transform-capitalize">
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center gap-1 text-left  group-hover:text-[#ddd] text-sm font-medium text-blue-700 ">
                  <CiCalendarDate className="text-xl" />
                  <p>Nov 01, 2022</p>
                </div>
                <div className="flex items-center gap-1 text-left  group-hover:text-[#ddd] text-sm font-medium text-blue-700">
                  <TiMessages className="text-xl" />
                  <p>Comment(0)</p>
                </div>
              </div>
              <div className="text-2xl font-bold">App Development Guides</div>
            </div>
            <img
              src={bg2}
              alt=""
              className=" object-cover w-full hover:scale-110 transition-all duration-700"
            />
          </Link>
          {/* card3 */}
          <Link
            to="/card"
            className=" relative rounded-2xl overflow-hidden text-white group"
          >
            <div className=" absolute top-4 left-4 uppercase text-sm  rounded-full bg-gradient-to-r from-[#8750f7] from-[0%] to-[#2a1454] py-1 text-center w-1/5 z-50">
              freebies
            </div>
            <div className="absolute z-10 bottom-4 left-4 bg-[#2a1454] group-hover:bg-blue-900 transition-all duration-700 right-4 rounded-2xl p-4 transform-capitalize">
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center gap-1 text-left  group-hover:text-[#ddd] text-sm font-medium text-blue-700 ">
                  <CiCalendarDate className="text-xl" />
                  <p>Dec 01, 2022</p>
                </div>
                <div className="flex items-center gap-1 text-left  group-hover:text-[#ddd] text-sm font-medium text-blue-700">
                  <TiMessages className="text-xl" />
                  <p>Comment(0)</p>
                </div>
              </div>
              <div className="text-2xl font-bold">
                Learn Graphic Design Free
              </div>
            </div>
            <img
              src={bg3}
              alt=""
              className=" object-cover w-full hover:scale-110 transition-all duration-700"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
