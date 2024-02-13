import React from 'react'

const Blog = ({blog}) => {
  return (
    <div className='outline w-[100vw] px-10 py-10 overflow-hidden'>
        <div>
        <h1><span className='text-2xl font-bold'>Title : </span>{blog.title}</h1>
        <h1><span className='text-2xl font-bold'>Description : </span>{blog.description}</h1>
        <h1><span className='text-2xl font-bold'>Category : </span>{blog.category}</h1>
        </div>
    </div>
  )
}

export default Blog