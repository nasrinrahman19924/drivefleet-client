"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { authClient } from "@/lib/auth-client";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { div } from "framer-motion/client";
import Sidebar from "@/components/dashboard/Sidebar";





const MyBookingsPage = () => {

  const { data } = authClient.useSession();

  const user = data?.user;

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    if (user?.email) {
      fetchBookings();
    }

  }, [user]);

  const fetchBookings = async () => {

    const res = await api.get(
      `/bookings/${user.email}`
    );

    setBookings(res.data);
  };

  const handleDelete = async (id) => {

    const result = await Swal.fire({
      title: "Delete Booking?",
      icon: "warning",
      showCancelButton: true,
    });

    if (result.isConfirmed) {

      await api.delete(`/bookings/${id}`);

      toast.success("Booking Deleted");

      fetchBookings();
    }
  };





  return (
    <div className="flex">

      <Sidebar/>

      <div className="max-w-7xl mx-auto py-10 px-5">

        <div className="mb-10">

          <h2 className="text-4xl font-bold">
            My Bookings
          </h2>

          <p className="text-gray-500 mt-2">
            Manage your booked cars easily
          </p>

        </div>

        {
          bookings.length === 0 ? (

            <div className="border rounded-2xl p-16 text-center">

              <h2 className="text-3xl font-bold mb-3">
                No Bookings Yet
              </h2>

              <p className="text-gray-500">
                You have not booked any car yet.
              </p>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {
                bookings.map((booking) => (

                  <div
                    key={booking._id}
                    className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 bg-white"
                  >

                    <img
                      src={booking.carImage}
                      alt={booking.carName}
                      className="w-full h-60 object-cover"
                    />

                    <div className="p-5 space-y-4">

                      <div className="flex justify-between items-center">

                        <h2 className="text-2xl font-bold">
                          {booking.carName}
                        </h2>

                        <span className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-sm">
                          Booked
                        </span>

                      </div>

                      <div className="space-y-2 text-gray-600">

                        <p>
                          <span className="font-semibold text-black">
                            Price:
                          </span>{" "}
                          ${booking.price}
                        </p>

                        <p>
                          <span className="font-semibold text-black">
                            Driver Needed:
                          </span>{" "}
                          {booking.driverNeeded}
                        </p>

                        <p>
                          <span className="font-semibold text-black">
                            Booking Date:
                          </span>{" "}
                          {
                            new Date(
                              booking.bookingDate
                            ).toLocaleDateString()
                          }
                        </p>

                      </div>

                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                ))
              }

            </div>

          )
        }

      </div>


    </div>
  );
};

export default MyBookingsPage;