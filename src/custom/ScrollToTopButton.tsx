import { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import { SlRocket } from "react-icons/sl";

function ScrollToTopButton() {
  const [shown, setShown] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const scrollCallback = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setShown(scrollTop > 300);
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", scrollCallback);
    scrollCallback();

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10 right-10 group  z-50">
      <div
        className={`w-[60px] h-[60px] p-1  ${
          shown ? "scale-100" : "scale-0"
        } transition-transform duration-200`}
      >
        <CircularProgressbarWithChildren
          value={scrollPercentage}
          strokeWidth={3}
          styles={buildStyles({
            pathColor: "blue",
            trailColor: "#8750f780",
          })}
        >
          <button
            onClick={scrollToTop}
            className="flex justify-center items-center w-full h-full rounded-full  text-blue-500  text-lg"
          >
            <SlRocket className="-rotate-45 transition-all duration-300 ease-linear group-hover:scale-105 group-hover:text-blue-400" />
          </button>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}

export default ScrollToTopButton;
