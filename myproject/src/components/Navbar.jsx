import { useState } from "react"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-red-600 text-white font-bold rounded-full shadow-md">
            D
          </div>

          <div>
            <p className="font-semibold text-white leading-tight">
              Derrick Digital
            </p>
            <p className="text-xs text-gray-400">
              Innovation & Technology
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a className="hover:text-red-500 cursor-pointer">Services</a>
          <a className="hover:text-red-500 cursor-pointer">Projects</a>
          <a className="hover:text-red-500 cursor-pointer">Booking</a>
          <a className="hover:text-red-500 cursor-pointer">FAQs</a>
          <a className="hover:text-red-500 cursor-pointer">Terms</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4 text-gray-300 font-medium">
          <a className="block hover:text-red-500">Services</a>
          <a className="block hover:text-red-500">Projects</a>
          <a className="block hover:text-red-500">Booking</a>
          <a className="block hover:text-red-500">FAQs</a>
          <a className="block hover:text-red-500">Terms</a>
        </div>
      )}

    </header>
  )
}

export default Header