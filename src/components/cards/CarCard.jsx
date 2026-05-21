"use client";

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

const CarCard = ({ car }) => {

  return (
    <div
      className="
    border
    rounded-2xl
    shadow
    overflow-hidden
    h-full
    flex
    flex-col
    transition-all
    duration-300
    hover:shadow-2xl
    hover:-translate-y-2
  "
    >



      <motion.div
        whileHover={{
          y: -10
        }}
        className="border rounded-2xl shadow overflow-hidden">

        <img
          src={car.image}
          alt={car.carName}
          width={500}
          height={300}
          className="h-60 w-full object-cover"
        />

        <div className="p-5 space-y-3">
          <h2 className="text-2xl font-bold">
            {car.carName}
          </h2>
          <div className='flex justify-between'>


            <p>${car.price}/day</p>
            <span>{car.location}</span>
          </div>


          <Link href={`/explore-cars/${car._id}`}>
            <button className='w-full bg-cyan-500 text-white py-3 rounded-xl'>
              View Details
            </button>
          </Link>

        </div>

      </motion.div>
    </div>
  )
}

export default CarCard