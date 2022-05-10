import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div class="hero container mx-auto min-h-screen">
      <div class="hero-content bg-hero-sm lg:bg-hero-lg flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-lg rounded-lg shadow-2xl" alt="" />
        <div className="px-10 ">
          <h1 class="text-5xl  font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Are you embarrassed by your smile or unhappy with how your teeth look? A smile makeover
            will transform your appearance and give you a smile you can be proud to show off.
            Whether you opt for one cosmetic dentistry treatment or a large collection of smile
            upgrades and dental restorations, a cosmetic dentistry makeover from Zoma Dental in West
            Bloomfield will result in a flawless smile that makes you look younger, happier, and
            healthier.
          </p>
          <button class="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
