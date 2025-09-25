import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Workout.jsx'
import Navbar from './components/navigation/Navbar.jsx'
import FullScreenNav from './components/navigation/FullScreenNav.jsx'
import Project from './pages/Ai.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'

const App = () => (
  <div className='overflow-x-hidden text-white'>

    <FullScreenNav />
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/project' element={<Project/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
    </Routes>
  </div>
)

export default App