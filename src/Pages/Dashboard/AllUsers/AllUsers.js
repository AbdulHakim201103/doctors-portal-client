import React from "react";
import { useQuery } from "react-query";
import UserRow from "../UserRow/UserRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("/users", () =>
    fetch("https://aqueous-scrubland-42523.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return (
      <button className="btn flex mx-auto my-4 bg-white text-red-500 border-0 loading">
        loading
      </button>
    );
  }
  return (
    <div>
      <h2 className="my-5 text-center text-3xl text-secondary">All Users</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr className="text-center text-blue-600">
              <th>No</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={user._id} index={index} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
