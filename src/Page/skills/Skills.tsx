import { FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCss3, SiTypescript } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const Skills = () => {
  const listSkills = [
    {
      skillName: "HTML",
      icon: <FaHtml5 />,
      present: "100%",
      styles: "group-hover:h-[100%]",
    },
    {
      skillName: "CSS",
      icon: <SiCss3 />,
      present: "10%",
      styles: " group-hover:h-[10%] ",
    },
    {
      skillName: "React",
      icon: <FaReact />,
      present: "50%",
      styles: "group-hover:h-[50%]",
    },
    {
      skillName: "JavaScript",
      icon: <TbBrandJavascript />,
      present: "20%",
      styles: "group-hover:h-[20%]",
    },
    {
      skillName: "Tailwind",
      icon: <RiTailwindCssFill />,
      present: "90%",
      styles: "group-hover:h-[90%]",
    },
    {
      skillName: "TypeScript",
      icon: <SiTypescript />,
      present: "60%",
      styles: "group-hover:h-[60%]",
    },
  ];

  return (
    <div id="skills" className="px-28 py-32">
      <div className="space-x-4">
        <div className="text-center clear-start mx-72 ">
          <p className="  text-5xl py-2 font-bold bg-gradient-to-r from-blue-700  to-blue-300 to-[60%]  text-transparent bg-clip-text">
            My Skills
          </p>
          <p className="text-xl mx-[15px] pt-4">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between pt-12 w-full   ">
            {listSkills.map((skill, index) => (
              <div key={index} className=" group ">
                <div
                  className={`  rounded-3xl overflow-hidden relative text-center bg-[#140c1c] w-[200px] h-[200px] group-hover:shadow-xl group-hover:shadow-blue-500 transition-all duration-1000  `}
                >
                  <div className="absolute top-0 left-0 z-10 w-full h-full">
                    <div className="text-7xl pt-10  px-14">{skill.icon}</div>
                    <div className="text-xl  pb-8 font-extrabold mt-7">
                      {skill.present}
                    </div>
                  </div>
                  <div
                    className={`group-hover:bg-blue-600 bg-opacity-10 h-0  ${skill.styles}  transition-all duration-1000  absolute w-full bottom-0 left-0 z-0`}
                  ></div>
                </div>

                <div className="text-center text-[#8750f7] mt-2 text-xl">
                  {skill.skillName}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;
