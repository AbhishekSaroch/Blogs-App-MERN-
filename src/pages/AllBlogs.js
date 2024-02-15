import React, { useState, useEffect } from 'react';
import { apiConnector } from '../services/apiConnector';
import { endpoints } from '../services/apis';
import Listblogs from '../components/AllBlogs/Listblogs';

const { GET_BLOGS_API } = endpoints;

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true)
        const res = await apiConnector("GET", GET_BLOGS_API);
        setBlogs(res.data.allBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
      setLoading(false)
    }
    getBlogs();
  }, []);



  return (
    <div className='flex flex-col w-[100vw] '>
      {
        loading ? (<div className='flex justify-center items-center text-2xl font-medium'>Hold Your Coffee While we load blogs for you </div>) :(
          <div>
          {blogs.map((blog, index) => (
        <Listblogs key={index} blog={blog} />
      ))}
          </div>
        )
      }
    </div>
  );
}

export default AllBlogs;
