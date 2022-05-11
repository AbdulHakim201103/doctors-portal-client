import React from "react";

const TestimonialCard = ({ monial }) => {
  const { name, img, address, description } = monial;
  return (
    <div className="card mx-auto lg:lg-w-lg bg-base-100 shadow-xl">
      <div className="mx-10 my-5">
        <p>{description}</p>
      </div>
      <div className="flex  items-center my-5 mx-10 justify-around">
        <figure>
          <img className="border-4 border-primary rounded-full p-1" src={img} alt="Shoes" />
        </figure>
        <div>
          <h2 className=" font-bold">{name}</h2>
          <h4>{address}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
