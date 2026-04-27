const TopBar = () => {
  return (
    <div className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex bg-black justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg ">
          <div className="text-3xl font-bold text-red-600">D</div>
          <div>
            <p className="font-semibold">Derrick Digital</p>
            <p className="text-xs text-gray-500">Innovation & Technology</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-2  text-xl bg-green-400 px-4 py-2 rounded-lg">
          <span>Hi</span>
          <span>👋</span>
        </div>

      </div>
    </div>
  )
}

export default TopBar