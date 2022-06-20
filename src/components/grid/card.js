import React from "react";

const card = (props) => {
  return (
    <div className="flex justify-between items-center my-5 md:my-0">
      <div className="bg-white rounded-lg shadow-lg flex flex-col p-5 items-center">
        <div className="flex flex-row items-center">
          <img src={props.image} className="mb-6" />
        </div>
        <h1 className="text-xl font-bold text-classifyBlue lg:text-xl md:text-md">
          {props.name}
        </h1>
        <h2 className="text-center my-3">{props.description}</h2>
        <a href="#" className="hover:font-semibold">
          Read More
        </a>
      </div>
    </div>
  );
};

export default card;
