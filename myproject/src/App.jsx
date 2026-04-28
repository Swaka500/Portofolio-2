import Navbar from "./components/Navbar"

import About from "./components/About"
import Services from "./components/Services"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient-bg"></div>

      
      <Navbar />
      
      <About />
      
      <Services />
      <Footer />
      
    </div>
  )
}

export default App