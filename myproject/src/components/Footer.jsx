import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-16 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Derrick Digital
            </h2>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Building modern digital experiences with clean design,
              performance and innovation in mind.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-xl">
              <FaFacebook className="hover:text-red-500 cursor-pointer transition" />
              <FaTwitter className="hover:text-red-500 cursor-pointer transition" />
              <FaLinkedin className="hover:text-red-500 cursor-pointer transition" />
              <FaGithub className="hover:text-red-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a className="hover:text-red-500 transition">Home</a></li>
              <li><a className="hover:text-red-500 transition">About</a></li>
              <li><a className="hover:text-red-500 transition">Services</a></li>
              <li><a className="hover:text-red-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Subscribe
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Get updates on new projects and services.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-l-md text-sm outline-none"
              />
              <button className="bg-red-600 px-4 text-white text-sm rounded-r-md hover:bg-red-700 transition">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-white font-bold">
            © {new Date().getFullYear()} Derrick Digital. All rights reserved.
          </p>

          <p className="text-white mt-3 font-bold md:mt-0">
            Built with React + Tailwind
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer