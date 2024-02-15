import React from 'react'

const Listblogs = ({blog}) => {
    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden  mx-auto my-4 p-6 w-[50vw] '>
        <h1 className='text-2xl font-bold mb-4'>{blog.title}</h1>
        <p className='text-gray-700 mb-2'>{blog.description}</p>
        <div className='flex items-center text-gray-500'>
          <div className='flex justify-around items-center w-[100%]'>
          <svg className='w-4 h-4 fill-current mr-1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10 12a2 2 0 100-4 2 2 0 000 4z'/>
            <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0zm-6 3a1 1 0 00-2 0v1a1 1 0 002 0v-1zm0-7a1 1 0 00-2 0v4a1 1 0 002 0V6z'/>
          </svg>
          <span>{blog.category}</span>
          </div>
        </div>
      </div>
      )
}

export default Listblogs