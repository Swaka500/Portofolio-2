const TopBar = () => {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-red-600 text-white font-bold rounded-lg">
            D
          </div>

          <div>
            <p className="font-semibold text-gray-900 leading-tight">
              Derrick Digital
            </p>
            <p className="text-xs text-gray-500">
              Innovation & Technology
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-gray-600">

          <span className="hidden sm:block text-sm font-bold text-gray-700">
            Welcome 👋
          </span>

          {/* Optional profile/avatar circle */}
          <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold">
            D
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopBar