import './index.css'
import About from './pages/About'
import Landing from './pages/Landing'
import { Route, Routes } from 'react-router'
import ProjectList from './pages/projects'
import DonationPage from './pages/Donate'
import Contact from './pages/contact'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [showDonate, setShowDonate] = useState(false)

  return (
    <>
      <Navbar setShowDonate={setShowDonate}/>
      {showDonate ? <DonationPage setShowDonate={setShowDonate}/>:<></>}
      <Routes>
        <Route path='/' element={ <Landing setShowDonate={setShowDonate}/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/projects' element={<ProjectList/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     
    </>
  )
}

export default App
