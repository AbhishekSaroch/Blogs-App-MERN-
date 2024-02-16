import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlogAPI } from '../services/operation/blogAPI'; // Assuming you have an API function to create a blog
import Navbar from "../components/Navbar"
const CreateBlog = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const userId = userData?._id;

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: ''
  });

  const { title, category, description } = formData;

  const handleOnChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value
      }));
  };
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
      dispatch(createBlogAPI(userId,title,category,description));
    }
  


  return (
    <>
    <Navbar />
    <form className='flex flex-col items-center mt-10' onSubmit={handleOnSubmit}>
      <label className='text-xl text-gray-700 mb-2'>Title</label>
      <input
        type='text'
        placeholder='Enter Your Title Here'
        className='border-2 border-gray-300 rounded-md px-4 py-2 mb-4 w-80'
        name='title'
        value={title}
        onChange={handleOnChange}
      />
      <label className='text-xl text-gray-700 mb-2'>Category</label>
      <input
        type='text'
        placeholder='Enter Your Category Here'
        className='border-2 border-gray-300 rounded-md px-4 py-2 mb-4 w-80'
        name='category'
        value={category}
        onChange={handleOnChange}
      />
      <label className='text-xl text-gray-700 mb-2'>Description</label>
      <textarea
        placeholder='Write about your blog...'
        className='border-2 border-gray-300 rounded-md px-4 py-2 mb-4 w-[40vw] h-[20vw]'
        maxLength={20000}
        name='description'
        value={description}
        onChange={handleOnChange}
      />
      <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        POST
      </button>
    </form>
    </>
  );
};

export default CreateBlog;
    