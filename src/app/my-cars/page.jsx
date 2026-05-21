"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { authClient } from "@/lib/auth-client";
import PrivateRoute from "@/components/shared/PrivateRoute";
import UpdateCarModal from "@/components/modals/UpdateCarModal";
import Swal from "sweetalert2";
import { toast } from "sonner";
import Sidebar from "@/components/dashboard/Sidebar";

const MyCarsPage = () => {

  const { data } = authClient.useSession();

  const user = data?.user;

  const [cars, setCars] = useState([]);

  useEffect(() => {

    if (user?.email) {
      fetchCars();
    }

  }, [user]);

  const fetchCars = async () => {

    const res = await api.get(`/my-cars/${user.email}`);

    setCars(res.data);
  };

  const handleDelete = async (id) => {

    const result = await Swal.fire({
      title: "Delete Car?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
    });

    if (result.isConfirmed) {

      await api.delete(`/cars/${id}`);

      toast.success("Car Deleted");

      fetchCars();
    }
  };

  return (
    <PrivateRoute>

     <div className="flex">
      <Sidebar/>

       <div className="max-w-7xl mx-auto py-10">

        <h2 className="text-4xl font-bold mb-10">
          My Added Cars
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {
            cars.map(car => (

              <div
                key={car._id}
                className="border rounded-2xl overflow-hidden shadow"
              >

                <img
                  src={car.image}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5 space-y-3">

                  <h2 className="text-2xl font-bold">
                    {car.carName}
                  </h2>

                  <p>${car.price}/day</p>

                  <p>{car.type}</p>

                  <p>
                    Booking Count:
                    {car.booking_count}
                  </p>

                  <p>
                    {car.availability}
                  </p>

                  <div className="flex gap-3">

                    <UpdateCarModal
                      car={car}
                      fetchCars={fetchCars}
                    />

                    <button
                      onClick={() => handleDelete(car._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>
     </div>

    </PrivateRoute>
  );
};

export default MyCarsPage;