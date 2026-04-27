import { useEffect, useState } from "react"
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
import hero4 from "../assets/hero4.jpg"
import hero5 from "../assets/hero5.jpg"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
  // Background images
  const images = [hero1, hero2, hero3, hero4, hero5]

  const [current, setCurrent] = useState(0)

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000) // change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background image slider */}
      <img
        src={images[current]}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-black/90"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-2xl py-32 text-left">

          {/* Badge */}
          <div className="border border-yellow-500 inline-block px-6 py-2 mb-8 tracking-[0.3em] text-yellow-400 text-sm">
            WELCOME TO DERRICK DIGITAL
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your Vision,<br />
            <span className="text-yellow-400">My Expertise.</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            Transform your business and achieve
            <span className="text-blue-400 font-semibold"> 10x growth </span>
            with modern digital solutions.
          </p>

          {/* Typing animation */}
          <div className="mt-10 text-xl md:text-2xl text-gray-300">
            <span className="tracking-widest text-gray-400">
              SPECIALIZING IN
            </span>

            <span className="text-blue-400 font-semibold ml-3">
              <TypeAnimation
                sequence={[
                  "Business Websites",
                  2000,
                  "Web Applications",
                  2000,
                  "Business Analysis",
                  2000,
                  "UI/UX Design",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex gap-6">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold transition">
              Get Started
            </button>

            <button className="border border-white/40 hover:bg-white/10 px-8 py-4 rounded-lg transition">
              View Projects
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero