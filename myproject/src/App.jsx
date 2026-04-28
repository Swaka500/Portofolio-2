import TopBar from "./components/TopBar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient-bg"></div>

      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default App