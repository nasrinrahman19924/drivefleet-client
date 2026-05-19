import CarCard from '../cards/CarCard'

const AvailableCars = async () => {

//   const res = await fetch('http://localhost:5000/cars')

//   const cars = await res.json()

  return (
    <section className='max-w-7xl mx-auto py-20'>

      <div className='text-center mb-12'>
        <h2 className='text-5xl font-bold'>
          Available Cars
        </h2>

        <p className='text-gray-500 mt-4'>
          Choose your perfect ride
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {/* {
          cars?.slice(0, 6).map(car => (
            <CarCard
              key={car._id}
              car={car}
            />
          ))
        } */}

      </div>

    </section>
  )
}

export default AvailableCars