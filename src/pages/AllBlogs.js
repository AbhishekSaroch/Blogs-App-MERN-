import React, { useState } from 'react'
import { useEffect } from "react";
import { apiConnector } from '../services/apiConnector';
import { endpoints } from '../services/apis';
import Blog from './Blog';
const {GET_BLOGS_API}=endpoints;
const AllBlogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=> {
        const getBlogs = async() => {
            const res = await apiConnector("GET",GET_BLOGS_API );
            setBlogs(res.data.allBlogs)
        }
        getBlogs();
    },[]);
    console.log("WHOLE DATA is",blogs)
  return (
    <div className='flex justify-center flex-col items-center border 4px solid '>
        {
          blogs.map((blog,index)=>(
            <Blog key={index} blog={blog} />
          ))
        }
    </div>
  )
}

export default AllBlogs