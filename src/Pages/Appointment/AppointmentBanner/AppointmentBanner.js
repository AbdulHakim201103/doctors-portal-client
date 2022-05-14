import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div style={{ background: `url(${bg})` }} className="hero container my-40 bg-white">
      <div className="hero-content flex-col lg:gap-64 lg:flex-row-reverse">
        <div>
          <img src={chair} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="bg-slate-100 rounded">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
