"use client";

import { useState } from "react";
import api from "@/services/api";
import { toast } from "sonner";

const UpdateCarModal = ({ car, fetchCars }) => {

  const [open, setOpen] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedData = {
      carName: form.carName.value,
      price: form.price.value,
      type: form.type.value,
      image: form.image.value,
      seats: form.seats.value,
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
    };

    try {

      const res = await api.patch(
        `/cars/${car._id}`,
        updatedData
      );

      if (res.data.modifiedCount > 0) {

        toast.success("Car Updated");

        fetchCars();

        setOpen(false);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-cyan-500 text-white px-4 py-2 rounded-lg"
      >
        Update
      </button>

      {
        open && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white p-8 rounded-2xl w-full max-w-2xl">

              <h2 className="text-3xl font-bold mb-6">
                Update Car
              </h2>

              <form
                onSubmit={handleUpdate}
                className="grid md:grid-cols-2 gap-5"
              >

                <input
                  name="carName"
                  defaultValue={car.carName}
                  className="border p-4 rounded-xl"
                />

                <input
                  name="price"
                  defaultValue={car.price}
                  className="border p-4 rounded-xl"
                />

                <input
                  name="type"
                  defaultValue={car.type}
                  className="border p-4 rounded-xl"
                />

                <input
                  name="image"
                  defaultValue={car.image}
                  className="border p-4 rounded-xl"
                />

                <input
                  name="seats"
                  defaultValue={car.seats}
                  className="border p-4 rounded-xl"
                />

                <input
                  name="location"
                  defaultValue={car.location}
                  className="border p-4 rounded-xl"
                />

                <select
                  name="availability"
                  defaultValue={car.availability}
                  className="border p-4 rounded-xl"
                >
                  <option>Available</option>
                  <option>Unavailable</option>
                </select>

                <textarea
                  name="description"
                  defaultValue={car.description}
                  className="border p-4 rounded-xl md:col-span-2"
                  rows={4}
                />

                <div className="flex gap-4 md:col-span-2">

                  <button className="bg-cyan-500 text-white px-6 py-3 rounded-xl">
                    Save Changes
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="bg-red-500 text-white px-6 py-3 rounded-xl"
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>

          </div>
        )
      }
    </>
  );
};

export default UpdateCarModal;