import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "@firebase/auth";
const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [appointment, setAppointment] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`https://aqueous-scrubland-42523.herokuapp.com/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
          }
          return res.json();
        })
        .then((data) => {
          setAppointment(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h2 className="my-5 text-center text-3xl text-secondary">My Appointments</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr className="text-center text-blue-600">
              <th>No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((a, index) => (
              <tr className="text-center">
                <td>{index + 1}</td>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
