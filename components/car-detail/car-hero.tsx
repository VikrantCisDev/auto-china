export default function CarHero() {
  return (
    <div className="relative h-[300px] w-full bg-black flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/banner.jpg")',
        }}
      />
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="text-primary">Find Your</span> Perfect Car
        </h2>
        <p className="text-gray-300 text-sm">
          Explore our selection of high-quality, pre-owned vehicles. Our inventory includes top brands like Jetour,
          Geely, Great Wall and more. Find the perfect used car for your needs
        </p>
      </div>
    </div>
  )
}
