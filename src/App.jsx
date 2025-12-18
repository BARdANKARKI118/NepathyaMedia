import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import AboutUs from '../Components/AboutUs/AboutUs'
import EventHighlights from '../Components/EventHighlights/EventHighlights'



const App = () => {
  return (
    <div>
      <script src="https://kit.fontawesome.com/ad578f6ba6.js" crossorigin="anonymous"></script>
      <Navbar/>
     <Home/>
     <div className='about  '>
     <AboutUs/>
     </div>
     <EventHighlights/>
    </div>
  )
}
    
export default App
