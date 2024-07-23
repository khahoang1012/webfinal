import { CiMedal } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";
import "../work/Animations.css"
function Resumer() {
  const data = {
    experience: [
      {
        year: "2022-Present",
        job: "lead developer",
        address: "Blockdots,London",
      },
      {
        year: "2021-2022",
        job: "full stack web developer",
        address: "Parsons,The New School",
      },
      {
        year: "2020-2021",
        job: "ui designer",
        address: "House of life,Leeds",
      },
      {
        year: "2018-2020",
        job: "junior graphics designer",
        address: "Theme Junction,Brusa",
      },
    ],
    education: [
      {
        year: "2020-2023",
        job: "programming course",
        address: "Harverd university",
      },
      {
        year: "2026-2020",
        job: "graphic design course",
        address: "University of Denmark",
      },
      {
        year: "2021-2015",
        job: "web design course",
        address: "University of California",
      },
      {
        year: "2010-2011",
        job: "design & technology",
        address: "Parsons,The New School",
      },
    ],
  };
  return (
    <div id="resumer" className="px-28 py-32 grid grid-cols-2 ">
      <div className="">
        <div className="flex items-center justify-start ">
          <div className="text-5xl text-blue-700 flex items-center justify-center ">
            <CiMedal />
          </div>
          <div className="text-5xl font-bold p-2 bg-gradient-to-r from-[#8850f7] from-[0%] to-[#fff] to-[100%] text-transparent bg-clip-text">
            My Experience
          </div>
        </div>
        <div className="">
          {data.experience.map((experience, index) => (
            <div
              key={index}
              className="border mt-7 py-8 px-5 mr-28 rounded-[20px] hover:shadow-xl hover:shadow-blue-300 group
             animate-background transition duration-1000 
              "
            >
              <div className="text-xl text-[#8750F7] font-extrabold group-hover:text-white">
                {experience.year}
              </div>
              <div className="uppercase text-2xl font-bold">
                {experience.job}
              </div>
              <div className="text-[#ddd]">{experience.address}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="" id="hehe">
        <div className="flex items-center justify-start ">
          <div className="text-5xl text-blue-700 flex items-center justify-center ">
            <FaGraduationCap />
          </div>
          <div className="text-5xl font-bold p-2 bg-gradient-to-r from-[#8850f7] from-[0%] to-[#fff] to-[100%] text-transparent bg-clip-text">
            My Education
          </div>
        </div>
        <div className="">
          {data.education.map((education, index) => (
            <div
              key={index}
              className="border hover:bg-blue-200 bg-[#140c1c] mt-7 py-8 px-5 mr-28 rounded-[20px] hover:shadow-xl hover:shadow-blue-300"
            >
              <div className="text-xl text-[#8750F7] font-extrabold">
                {education.year}
              </div>
              <div className="uppercase text-2xl font-bold">
                {education.job}
              </div>
              <div className="text-[#ddd]">{education.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resumer;
