import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='flex justify-center items-center border h-[100vh]'>
            Choose a option create or read all blogs
        </div>
    </div>
  )
}

export default Home