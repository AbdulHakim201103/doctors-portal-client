import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const phone = event.target.phone.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user?.email,
      patientName: user?.displayName,
      phone,
    };

    fetch("https://aqueous-scrubland-42523.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Your Booking Successfully on ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center my-5">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              disabled
              className="input input-bordered w-full "
            />
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              disabled
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary bg-gradient-to-r from-secondary to-primary w-full mx-auto"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
