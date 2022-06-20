import React from "react";
import redfin from "./redfin_2.png";
import swinerton from "./swinerton_2.png";
import vacasa from "./vacasa_1.png";

const used = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 bg-gray-200 pt-10">
      <div className="font-bold text-4xl bg-gray-300 rounded-md p-3">
        As used by
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:px-7">
          <img src={redfin} />
        </div>
        <div className="lg:px-7">
          <img src={swinerton} />
        </div>
        <div className="lg:px-7">
          <img src={vacasa} />
        </div>
      </div>
    </div>
  );
};

export default used;
