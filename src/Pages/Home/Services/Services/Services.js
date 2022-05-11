import React from "react";
import Service from "../Service/Service";
import cavity from "../../../../assets/images/cavity.png";
import fluoride from "../../../../assets/images/fluoride.png";
import whitening from "../../../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:"Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. ",
      img: fluoride
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:"Amalgam has been used by dental professionals for more than a century; it is the most researched material used for filling cavities.",
      img: cavity
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:"Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.",
      img: whitening
    },
  ];
  return (
    <div className="container my-20 mx-auto">
      <div className="text-center my-20">
        <h4 className="uppercase my-5 text-xl font-bold text-secondary">Our Service</h4>
        <h1 className="text-4xl">Service We Provide</h1>
      </div>
      <div className="flex justify-center">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-20">
          {
            services.map(service => <Service
            key={service._id}
            service={service}
            ></Service>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
