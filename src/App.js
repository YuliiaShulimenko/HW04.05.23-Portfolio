import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import WorksPage from './Pages/WorksPage/WorksPage'
import BlogPage from './Pages/Blogpage/BlogPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import './App.css';
import { WorkID } from './Pages/WorkID/WorkID'


//ссылка на гх пэйдес https://yuliiashulimenko.github.io/HW04.05.23-Portfolio/

function App() {

  return (
    <div className='main'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/works' element={<WorksPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path="/works/:id" element={<WorkID/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App