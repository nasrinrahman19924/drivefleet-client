"use client";

import api from "@/services/api";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const BookingCard = ({ car }) => {

  const { data } = authClient.useSession();

  const user = data?.user;

  const handleBooking = async (e) => {

    e.preventDefault();

    const form = e.target;

    const bookingData = {
      carId: car._id,
      carName: car.carName,
      carImage: car.image,
      price: car.price,

      userEmail: user.email,
      userName: user.name,

      driverNeeded: form.driverNeeded.value,
      specialNote: form.specialNote.value,

      bookingDate: new Date(),
    };

    const res = await api.post(
      "/bookings",
      bookingData
    );

    if (res.data.insertedId) {
      toast.success("Booking Successful");
    }
  };

  return (
    <form
      onSubmit={handleBooking}
      className="border p-6 rounded-2xl space-y-4"
    >

      <select
        name="driverNeeded"
        className="border p-4 w-full rounded-xl"
      >
        <option>Yes</option>
        <option>No</option>
      </select>

      <textarea
        name="specialNote"
        placeholder="Special Note"
        className="border p-4 w-full rounded-xl"
      />

      <button className="bg-cyan-500 text-white py-4 rounded-xl w-full">
        Book Now
      </button>

    </form>
  );
};

export default BookingCard;