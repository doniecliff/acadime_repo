// import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Faq from "./components/Faq"


import Home from "./pages/Home"
import Mission from "./pages/Mission"
import FemAcademy from "./pages/FemAcademy"
import Courses from "./pages/Courses"
import Hire from "./pages/Hire"
import ContactUs from "./pages/ContactUs"
import FemReach from "./pages/FemReach"
import FRAboutUs from "./pages/FRAboutUs"
import FRDonate from "./pages/FRDonate"
import FRFaq from "./pages/FRFaq"


// a target="_blank"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        {/* routing & Link/, femAcad, femRch,  */} 
        {/* some state & code splitting */}

      {/* <Home/> */}
      {/* <Mission/> */}  {/* <Mission/> */}
      {/* <FemAcademy/> */}
      
      {/* <Courses/> */}
      {/* <Hire/> */}
      {/* <FemReach/> */}
      {/* <FRAboutUs/> */}
      {/* <FRDonate/> */}
      {/* <FRFaq/> */}


      <Router>
        <Header/>
      {/* <Faq/> */}

      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="mission" element={<Mission/>} />
          <Route path="fem_academy" element={<FemAcademy/>} />
          <Route path="fem_academy/mission" element={<Mission/>} />
          <Route path="fem_academy/courses" element={<Courses/>} />
          <Route path="fem_academy/hire" element={<Hire/>} />
          <Route path="fem_academy/contact-us" element={<ContactUs/>} />
          <Route path="fem_reach" element={<FemReach/>} />
          <Route path="fem_reach/about-us" element={<FRAboutUs/>} />
          <Route path="fem_reach/donate" element={<FRDonate/>} />
          <Route path="fem_reach/faq" element={<FRFaq/>} />

          <Route path="test" element={<Mission/>} />
        </Routes>

        <Footer />
      </Router>

    </>
  )
}

export default App
