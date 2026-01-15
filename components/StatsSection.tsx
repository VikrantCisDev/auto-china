import Image from "next/image"

export default function StatsSection() {
  const stats = [
    { title: "100% Online", desc: "Fully integrated system Detailed photos & videos Vehicle condition report" },
    { title: "Direct Trade", desc: "No middleman Local seller to global buyer Efficient low-cost model" },
    { title: "Safe & Easy", desc: "Buy-it-Safely service Order Tracking System Localized customer support" },
    {
      title: "Professional Shipping",
      desc: "Shipping Guarantee Shipping documents delivery All-in-one shipping service",
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 items-center">
          <div className="relative h-[400px] overflow-hidden rounded-lg lg:col-span-2">
            <Image src="/StatsSection/StatsSection-img-1.jpg" alt="Volvo Front" fill className="object-cover" />
          </div>
          <div className="lg:col-span-3 sm:pr-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-12 text-zinc-900 leading-tight">
              Auto China Trade is leading the Automobile Trading & Shipping Industry since 2015.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
              {stats.map((stat) => (
                <div key={stat.title} className="p-4 border rounded-xl">
                  <h3 className="text-xl font-medium mb-3">{stat.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
