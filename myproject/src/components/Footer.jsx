const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Derrick Digital
            </h2>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Building modern digital experiences with clean design, performance
              and innovation in mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-red-500 transition">About</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Services</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sm">Nairobi, Kenya</p>
            <p className="text-sm mt-1">marvelswaka@gmail.com</p>
            <p className="text-sm mt-1">+254 726 26 13 27</p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Derrick Digital. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500 transition">Facebook</a>
            <a href="#" className="hover:text-red-500 transition">Twitter</a>
            <a href="#" className="hover:text-red-500 transition">LinkedIn</a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer