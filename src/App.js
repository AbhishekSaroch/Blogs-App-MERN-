import React from 'react'
import './index.css'
import Signup from './pages/Signup'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import AllBlogs from './pages/AllBlogs'
const App = () => {
  return (
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/allblogs' element={<AllBlogs />}/>
      </Routes>
  )
}

export default App