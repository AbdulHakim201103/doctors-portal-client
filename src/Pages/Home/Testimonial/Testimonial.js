import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import quote from "../../../assets/icons/quote.svg";
const Testimonial = () => {
  const testimonial = [
    {
      _id: 1,
      name: "Farshid Ahsan",
      address: " Nodia",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 2,
      name: "Sabiha Khair Ohi",
      address: "Faridpur",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 3,
      name: "Munni Khatun",
      address: "Dhaka",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="my-20">
          <h3 className="text-primary my-5 text-xl">Testimonial</h3>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div className="p-10">
            <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        {testimonial.map((monial) => (
          <TestimonialCard key={monial._id} monial={monial}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
