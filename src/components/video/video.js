import React from "react";
import vid from "./3dModelVid.mp4";

const video = () => {
  return (
    <div className="flex lg:flex-row flex-col  md:justify-around mt-10 md:px-28 mx-auto mb-2">
      <div className="justify-center items-center text-center flex-col flex lg:w-5/12">
        <h1 className="font-bold text-3xl mb-5">
          The world's leading spatial data platform
        </h1>
        <h2 className="bg-gray-100 rounded-md  font-bold mb-3 p-2 mx-3">
          Take your buildings online with Matterport to design, build, promote,
          and manage your most valuable asset at your fingertips.
        </h2>
        <h2 className="bg-gray-100 rounded-md font-bold mb-3 p-2 mx-3">
          Create a digital twin of any space with a wide array of cameras and
          our mobile apps (available on iOS and Android.) We’ll even take care
          of it for you with Matterport Capture Services™.
        </h2>
        <h2 className="bg-gray-100 rounded-md font-bold  mb-3 p-2 mx-3">
          With over 15 billion square feet of data and growing, we’re building
          the largest digital library of spatial data and information in the
          world. Even better—it’s open for innovation and available to your
          business.
        </h2>
      </div>
      <div className="lg:w-2/5 lg:h-2/5 mx-3">
        <video autoPlay muted src={vid} loop className="rounded-md" />
      </div>
    </div>
  );
};

export default video;
