import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white mt-20'>
      <div className='container py-14 grid md:grid-cols-3 gap-10'>

        <div>
          <h2 className='text-3xl font-bold text-cyan-400'>DriveFleet</h2>
          <p className='mt-3 text-gray-300'>
            Premium car rental platform for modern travelers.
          </p>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-3'>Useful Links</h3>

          <div className='flex flex-col gap-2'>
            <a href="/">Home</a>
            <a href="/explore-cars">Explore Cars</a>
            <a href="/login">Login</a>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-3'>Social Links</h3>

          <div className='flex gap-4 text-2xl'>
            <FaFacebook />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer