const services = [
  {
    title: "Web Development",
    desc: "Modern, fast and scalable web applications for your business.",
    icon: "🌐"
  },
  {
  title: "Business Analysis",
  desc: "Improve decisions using data, process insights, and strategy.",
  icon: "📊"
},
  {
    title: "UI/UX Design",
    desc: "Beautiful and user-friendly designs that convert visitors.",
    icon: "🎨"
  },
  {
    title: "E-Commerce",
    desc: "Online stores that increase sales and customer experience.",
    icon: "🛒"
  }
]

const Services = () => {
  return (
    <section className="py-24 bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                group p-10 rounded-2xl bg-white/5 backdrop-blur-md 
                border border-white/10 transition duration-500 
                hover:scale-110 hover:bg-blue-600/20 
                hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
                cursor-pointer
              "
            >
              <div className="text-5xl mb-6">{service.icon}</div>

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400">
                {service.title}
              </h3>

              <p className="text-gray-400 group-hover:text-gray-200">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services