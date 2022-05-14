import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero container  mx-auto my-40">
      <div className="hero-content bg-hero-sm lg:bg-hero-lg flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt="" />
        <div className="px-10 ">
          <h1 className="text-5xl  font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Are you embarrassed by your smile or unhappy with how your teeth look? A smile makeover
            will transhtmlForm your appearance and give you a smile you can be proud to show off.
            Whether you opt htmlFor one cosmetic dentistry treatment or a large collection of smile
            upgrades and dental restorations, a cosmetic dentistry makeover from Zoma Dental in West
            Bloomfield will result in a flawless smile that makes you look younger, happier, and
            healthier.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
