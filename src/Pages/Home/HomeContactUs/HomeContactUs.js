import React from "react";
import appointment from "../../../assets/images/appointment.png";

const HomeContactUs = () => {
  return (
    <div className="p-10 my-20" style={{ background: `url(${appointment})` }}>
      <div className="text-center p-10">
        <h3 className="text-primary my-5 text-xl">Contact Us</h3>
        <h2 className="text-white text-4xl">Stay connected with us</h2>
      </div>
      <div className="my-10">
        <htmlForm className=" mx-auto w-96">
          <input
            className=" my-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email Address"
            required
          />
          <br />
          <input
            className="my-5  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Subject"
            required
          />
          <br />
          <textarea
            className="my-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            true="massage"
            placeholder="Your Massage"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex mb-10 justify-center items-center">
            <button className="btn w-64 btn-primary text-white" type="submit">
              Submit
            </button>
          </div>
        </htmlForm>
      </div>
    </div>
  );
};

export default HomeContactUs;
