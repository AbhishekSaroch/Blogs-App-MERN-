import React from 'react'
import Navbar from '../components/Navbar'
import AllBlogs from './AllBlogs'
import { useSelector } from 'react-redux'

const Intro = () => {
  const userData=JSON.parse(localStorage?.getItem("user"))
  const {token}=useSelector((state)=>state.auth)
  return (
    <div>
       <Navbar />
       {
        token!=null && (
          <div className='flex justify-center items-center gap-x-2 font-semibold mt-5'>Hey<span className="text-2xl font-bold ">{userData?.firstName}{userData?.lastName}</span></div>
        )
       }
       <AllBlogs />
    </div>
  )
}

export default Intro