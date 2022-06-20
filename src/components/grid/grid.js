import React from "react";
import Card from "./card.js";
import Capture from "./images/capture.svg";
import Connect from "./images/connect.svg";
import Manage from "./images/manage.svg";
import "./grid.css";

function classgrid() {
  return (
    <div className="main-container">
      <div className="flex flex-col justify-center items-center mx-auto w-4/5 content">
        <div className="flex flex-col text-center mb-7">
          <div className="text-4xl text-classifyBlue font-bold mb-5">
            What Matterport Offers
          </div>
          <div className=" text-center text-lg">
            Matterport is the leading spatial data company focused on digitizing
            and indexing the built world. Our all-in-one 3D data platform
            enables anyone to turn a space into an accurate and immersive
            digital twin which can be used to design, build, operate, promote,
            and understand any space.
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 justify-center items-center gap-7">
          <Card
            image={Capture}
            name="Capture the way you want"
            description="Whether you want to capture your property yourself or use Matterport Capture Services, it’s easy to get the job done. View our range of cameras—or simply use the phone in your pocket."
          />
          <Card
            image={Connect}
            name="Connect to our mobile app"
            description="Our free mobile app connects and controls any supported camera. Create, edit and share immersive digital twins of any space from any device."
          />
          <Card
            image={Manage}
            name="Manage your 3D models"
            description="Our Cloud platform provides a secure experience for storing and managing your 3D models. Start with a free plan or upgrade for more features."
          />
        </div>
      </div>
    </div>
  );
}

export default classgrid;
