"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import CarCard from "@/components/cards/CarCard";
import CarCardSkeleton from "@/components/shared/CarCardSkeleton";

const CarsPage = () => {

  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [type, setType] = useState("");

  useEffect(() => {
    fetchCars();
  }, [search, type]);

  const fetchCars = async () => {

    setLoading(true);

    const res = await api.get(
      `/cars?search=${search}&type=${type}`
    );

    setCars(res.data);

    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-10">

      <div className="flex flex-col md:flex-row gap-5 mb-10">

        <input
          type="text"
          placeholder="Search Cars..."
          className="border p-4 rounded-xl flex-1"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-4 rounded-xl"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Luxury">Luxury</option>
          <option value="Sports">Sports</option>
        </select>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {
          loading
            ? [...Array(6)].map((_, i) => (
              <CarCardSkeleton key={i} />
            ))
            : cars.map((car) => (
              <CarCard
                key={car._id}
                car={car}
              />
            ))
        }

      </div>
      {
        !loading && cars.length === 0 && (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold mb-4">
              No Cars Found
            </h2>

            <p className="text-gray-500">
              Try another search
            </p>

          </div>

        )
      }

    </div>
  );
};

export default CarsPage;