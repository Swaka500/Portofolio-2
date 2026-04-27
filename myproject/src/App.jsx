import TopBar from "./components/TopBar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient-bg"></div>

      <TopBar />
      <Navbar />
      <Hero />

    </div>
  )
}

export default App