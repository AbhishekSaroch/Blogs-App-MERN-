import React from 'react'
import './index.css'
import Signup from './pages/Signup'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import AllBlogs from './pages/AllBlogs'
import CreateBlog from './pages/createBlog'
import Intro from './pages/Intro'
import MyBlogs from './pages/MyBlogs'
const App = () => {
  return (
      <Routes>
        <Route  path='/' element={<Intro />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/allblogs' element={<AllBlogs />}/>
        <Route path='/createBlog' element={<CreateBlog />}/>
        <Route path='/myBlogs' element={<MyBlogs />}/>
      </Routes>
  )
}

export default App