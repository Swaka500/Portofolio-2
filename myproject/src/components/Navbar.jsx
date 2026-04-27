const Navbar = () => {
  return (
    <div className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto justify-center px-6 py-4 flex gap-10 font-medium">

        <a className="hover:text-gray-300 cursor-pointer">Services</a>
        <a className="hover:text-gray-200 cursor-pointer">Projects</a>
        <a className="hover:text-gray-200 cursor-pointer">Booking</a>
        <a className="hover:text-gray-200 cursor-pointer">FAQs</a>
        <a className="hover:text-gray-200 cursor-pointer">Terms</a>

      </div>
    </div>
  )
}

export default Navbar