import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  console.log("userdata",userData)
  return (
    <div>
        <Navbar />
        <div className='flex justify-center items-center border h-[100vh]'>
          Welcome {userData.firstName}{userData.lastName}
            Choose a option create or read all blogs
        </div>
    </div>
  )
}

export default Home