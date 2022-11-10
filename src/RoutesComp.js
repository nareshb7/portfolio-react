import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AboutMain from './components/about/AboutMain'
import HomeMain from './components/home/HomeMain'
import LeftSideSection from './components/home/LeftSideSection'
import ProjectsMain from './components/projects/ProjectsMain'

const RoutesComp = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeMain/> }>
            <Route path='/' element={<LeftSideSection />} />
        </Route>
        <Route path='about' element={<AboutMain/> }/>
        <Route path='projects' element={<ProjectsMain />} />
    </Routes>
  )
}

export default RoutesComp