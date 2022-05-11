import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import HomeContactUs from "../HomeContactUs/HomeContactUs";
import Info from "../Info/Info/Info";
import Services from "../Services/Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Treatment from "../Treatment/Treatment";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Treatment></Treatment>
      <HomeAppointment></HomeAppointment>
      <Testimonial></Testimonial>
      <HomeContactUs></HomeContactUs>
      <Footer></Footer>

    </div>
  );
};

export default Home;
