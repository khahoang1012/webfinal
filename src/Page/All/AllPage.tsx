import ScrollToTopButton from "@/custom/ScrollToTopButton";
import Contact from "../contact/Contact";
import HomePage from "../homepage/HomePage";
import Resumer from "../resume/Resume";
import Services from "../servicee/Services";
import Skills from "../skills/Skills";
import Testimonials from "../testimonials/Testimonials";
import Work from "../work/Work";

function AllPage() {
  return (
    <>
  
        <div className="">
          <div className=" bg-[#0F0715]">
            <HomePage />
          </div>
          <div className="bg-[#050709]">
            <Services />
          </div>
          <div className="  bg-[#0F0715]">
            <Work />
          </div>
          <div className="bg-[#050709]">
            <Resumer />
          </div>
          <div className=" bg-[#0F0715]">
            <Skills />
          </div>
          <div className="bg-[#050709] ">
            <Testimonials />
          </div>
          <div className="bg-[#050709]">
            <Contact />
          </div>
          <ScrollToTopButton />
        </div>

    </>
  );
}

export default AllPage;
