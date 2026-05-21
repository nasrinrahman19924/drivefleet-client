"use client";

import PrivateRoute from "@/components/shared/PrivateRoute";
import api from "@/services/api";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Sidebar from "@/components/dashboard/Sidebar";

const AddCarPage = () => {

  const { data } = authClient.useSession();

  const user = data?.user;

  const handleAddCar = async (e) => {
    e.preventDefault();

    const form = e.target;

    const carData = {
      carName: form.carName.value,
      price: form.price.value,
      type: form.type.value,
      image: form.image.value,
      seats: form.seats.value,
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,

      ownerName: user?.name,
      ownerEmail: user?.email,
      ownerImage: user?.image,

      booking_count: 0,
      createdAt: new Date(),
    };

    console.log(carData);

    try {

      const res = await api.post("/cars", carData);

      console.log(res.data);

      if (res.data.insertedId) {
        toast.success("Car Added Successfully");
        form.reset();
      }

    } catch (error) {
      console.log(error.response?.data);

      toast.error("Failed to Add car");
    }
  };

  return (
    <PrivateRoute>

      <div className="flex">

        <Sidebar/>


        <div className="max-w-4xl mx-auto py-10">

          <div className="bg-white p-10 rounded-2xl shadow">

            <h2 className="text-4xl font-bold mb-8 text-cyan-500">
              Add New Car
            </h2>

            <form
              onSubmit={handleAddCar}
              className="grid md:grid-cols-2 gap-5"
            >

              <input
                name="carName"
                type="text"
                placeholder="Car Name"
                className="border p-4 rounded-xl"
                required
              />

              <input
                name="price"
                type="number"
                placeholder="Daily Rent Price"
                className="border p-4 rounded-xl"
                required
              />

              <select
                name="type"
                className="border p-4 rounded-xl"
              >
                <option>SUV</option>
                <option>Sedan</option>
                <option>Luxury</option>
                <option>Sports</option>
              </select>

              <input
                name="image"
                type="text"
                placeholder="Image URL"
                className="border p-4 rounded-xl"
                required
              />

              <input
                name="seats"
                type="number"
                placeholder="Seat Capacity"
                className="border p-4 rounded-xl"
                required
              />

              <input
                name="location"
                type="text"
                placeholder="Pickup Location"
                className="border p-4 rounded-xl"
                required
              />

              <select
                name="availability"
                className="border p-4 rounded-xl"
              >
                <option>Available</option>
                <option>Unavailable</option>
              </select>

              <textarea
                name="description"
                placeholder="Description"
                className="border p-4 rounded-xl md:col-span-2"
                rows={5}
              />

              <button className="bg-cyan-500 text-white py-4 rounded-xl md:col-span-2">
                Add Car
              </button>

            </form>

          </div>

        </div>

      </div>

    </PrivateRoute>
  );
};

export default AddCarPage;