import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div
      className='h-[90vh] bg-cover bg-center flex items-center'
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600)'
      }}
    >
      <div className='container'>

        <div className='max-w-2xl text-white'>
          <h1 className='text-6xl font-bold leading-tight'>
            Premium Car Rental Experience
          </h1>

          <p className='mt-6 text-lg'>
            Discover luxury and affordable cars for your next journey.
          </p>

          <Link href="/explore-cars">
            <button className='mt-8 bg-cyan-500 px-8 py-4 rounded-lg font-semibold'>
              Explore Cars
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner