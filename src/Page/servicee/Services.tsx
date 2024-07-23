
import { TfiArrowTopRight } from "react-icons/tfi";
function Services() {
  return (
    <div id="services" className=" px-28 pt-32">
      <div className="">
        <div className="text-center clear-start mx-72 ">
          <p className="text-5xl py-2 font-bold bg-gradient-to-r from-blue-700  to-blue-300 to-[60%]  text-transparent bg-clip-text">
            My Quality Services
          </p>
          <p className="text-xl mx-[15px] pt-4">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
      </div>

      {/* table */}
      <div  className=" pt-12 pb-32  ">
        <table className=" table-auto flex flex-col">
          <div className=" border-b mx-5">
            <tr className=" hover:bg-violet-400 text-xl grid grid-cols-7 main180">
              <td className=" flex justify-start items-center py-10 ml-5 text-2xl font-bold">
                01
              </td>
              <td className=" flex justify-start items-center text-3xl font-bold col-span-2">
                Branding Design
              </td>
              <td className=" flex justify-start items-center text-lg  col-span-3">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect bilions of people
              </td>
              <td className=" flex justify-end items-center">
                <div className=" text-2xl p-5">
                  <TfiArrowTopRight  className="icon180"/>
                </div>
              </td>
            </tr>
          </div>

          <div className=" border-b mx-5">
            <tr className="main180 hover:bg-gradient-to-l from-violet-900 from-[20%] to-violet-500 text-xl grid grid-cols-7">
              <td className=" flex justify-start items-center py-10 ml-5 text-2xl font-bold">
                02
              </td>
              <td className=" flex justify-start items-center text-3xl font-bold col-span-2">
                Branding Design
              </td>
              <td className=" flex justify-start items-center text-lg col-span-3 text-[#ddd]">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect bilions of people
              </td>
              <td className=" flex justify-end items-center">
                <div className=" text-2xl text-[#ddd] p-5 hover:rotate-90 hover:text-white duration-500">
                  <TfiArrowTopRight className="icon180" />
                </div>
              </td>
            </tr>
          </div>

          <div className=" border-b mx-5">
            <tr className="main180 hover:bg-violet-400 text-xl grid grid-cols-7">
              <td className=" flex justify-start items-center py-10 ml-5 text-2xl font-bold">
                03
              </td>
              <td className=" flex justify-start items-center text-3xl font-bold col-span-2">
                Branding Design
              </td>
              <td className=" flex justify-start items-center text-lg col-span-3">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect bilions of people
              </td>
              <td className=" flex justify-end items-center">
                <div className=" text-2xl  p-5">
                  <TfiArrowTopRight className="icon180" />
                </div>
              </td>
            </tr>
          </div>

          <div className=" border-b mx-5">
            <tr className="main180 hover:bg-violet-400 text-xl grid grid-cols-7">
              <td className=" flex justify-start items-center py-10 ml-5 text-2xl font-bold">
                04
              </td>
              <td className=" flex justify-start items-center text-3xl font-bold col-span-2">
                Branding Design
              </td>
              <td  className=" flex justify-start items-center text-lg col-span-3">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect bilions of people
              </td>
              <td className=" flex justify-end items-center">
                <div className=" text-2xl  p-5">
                  <TfiArrowTopRight className="icon180" />
                </div>
              </td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
}

export default Services;
