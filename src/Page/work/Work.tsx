import React from "react";
import FilterButton from "../../custom/ButtonFilter";

import "./Animations.css"
import bg1 from "./img/bg1.jpg";
import bg2 from "./img/bg2.jpg";
import bg3 from "./img/bg3.jpg";
import bg4 from "./img/bg4.jpg";

import { GoArrowDownLeft } from "react-icons/go";
function Work() {
  const products = [
    { id: 1, name: "Laptop", category: "ux/ui", bg: bg1 },
    { id: 2, name: "Shirt", category: "branding", bg: bg2 },
    { id: 3, name: "Watch", category: "branding", bg: bg3 },
    { id: 4, name: "Phone", category: "apps", bg: bg4 },
  ];
  const [activeFilter, setActiveFilter] = React.useState("all");

  const handleFilterClick = (filter: any) => {
    setActiveFilter(filter);
  };

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div id="work" className="px-28 py-32">
      <div className="text-center clear-start mx-72 ">
        <p className="text-5xl py-2 font-bold bg-gradient-to-r from-blue-700  to-blue-300 to-[60%]  text-transparent bg-clip-text">
          My Recent Works
        </p>
        <p className="text-xl mx-[15px] pt-4">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>

      <div className="mt-12">
        <div className="p-4 ">
          <div className="flex justify-center items-center  mb-4">
            <div className="bg-[#050709] px-2 rounded-full flex justify-between gap-1">
              <FilterButton
                label="All"
                onClick={() => handleFilterClick("all")}
                isActive={activeFilter === "all"}
              />
              <FilterButton
                label="Ux/ui"
                onClick={() => handleFilterClick("ux/ui")}
                isActive={activeFilter === "ux/ui"}
              />
              <FilterButton
                label="Branding"
                onClick={() => handleFilterClick("branding")}
                isActive={activeFilter === "branding"}
              />
              <FilterButton
                label="Apps"
                onClick={() => handleFilterClick("apps")}
                isActive={activeFilter === "apps"}
              />
            </div>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-2 gap-14 ">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#140C1C] relative p-9 pb-0 rounded-xl overflow-hidden shadow-lg shadow-blue-300 main main1  group "
                >
                  <div>
                    <img src={product.bg} alt="" />
                  </div>

                  <div className="absolute hidden object-cover group-hover:block  bottom-5 right-5 left-5 rounded-[15px] box bg-gradient-to-r from-blue-500 to-blue-950">
                    <div className="  flex justify-between items-center p-5">
                      <div>
                        <h1 className="text-3xl font-bold">Deloiite</h1>
                        <p className="text-xl font-medium mt-5">
                          Project was about precision an information  
                        </p>
                      </div>
                      <div className="text-4xl text-right p-2 rotate ">
                        <GoArrowDownLeft  className=""/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
