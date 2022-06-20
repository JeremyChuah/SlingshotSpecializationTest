import React from "react";
import icon from "./homeheroicon.svg";

//className="w-full flex flex-col justify-between items-center mt-20"
//className="grid md:grid-cols-2 m-auto"
//className="flex flex-col justify-center items-center w-full px-48"
//h1 className="text-4xl font-bold text-classifyBlue lg:w-full md:w-72 mb-5 lg:mb-2"

function homecomponents() {
  return (
    <div className="md:w-full md:flex md:flex-col md:justify-between md:items-center mt-10">
      <div className="md:grid md:grid-cols-2 m-auto justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full px-48 text-center">
          <h1 className="text-4xl font-bold lg:w-full md:w-72 mb-5 lg:mb-2 w-96 py-6">
            Try a Free Demo Today!
          </h1>
          <p className="lg:w-full md:w-72 w-96">
            People are shown to be 300% more engaged with a Matterport 3D
            virtual tour than they are with 2D imagery. 3D virtual tours can
            help you create better experiences, happier customers, and more
            revenue. Try for free today!
          </p>
          <button className="mt-6 md:mb-20 bg-MatterportRed text-white p-2 rounded-lg px-10">
            Try Demo
          </button>
        </div>
        <div>
          <img src={icon} />
        </div>
      </div>
    </div>
  );
}

export default homecomponents;
