import Image from 'next/image'
import Link from 'next/link'

const CarCard = ({ car }) => {

  return (
    <div className='border rounded-2xl overflow-hidden shadow-sm'>
      
      <Image
        src={car.image}
        alt={car.carName}
        width={500}
        height={300}
        className='w-full h-56 object-cover'
      />

      <div className='p-5 space-y-3'>

        <h2 className='text-2xl font-bold'>
          {car.carName}
        </h2>

        <p className='text-gray-500'>
          {car.carType}
        </p>

        <div className='flex justify-between'>
          <span>${car.dailyPrice}/day</span>
          <span>{car.location}</span>
        </div>

        <Link href={`/cars/${car._id}`}>
          <button className='w-full bg-cyan-500 text-white py-3 rounded-xl'>
            View Details
          </button>
        </Link>

      </div>
    </div>
  )
}

export default CarCard