import { Button } from "@/components/ui/button"
import { Car, Truck, Bus, Settings, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import heroBanner from "@/public/heroBanner.jpg"
import DiscountShap from "@/public/DiscountShap.svg"


export default function Hero() {
  // const categories = [
  //   { name: "Cars", icon: <Car className="w-5 h-5 text-inherit" /> },
  //   { name: "SUVs", icon: <Truck className="w-5 h-5 text-inherit" /> },
  //   { name: "Pick Ups", icon: <Truck className="w-5 h-5 text-inherit" /> },
  //   { name: "Trucks", icon: <Truck className="w-5 h-5 text-inherit" /> },
  //   { name: "Buses", icon: <Bus className="w-5 h-5 text-inherit" /> },
  //   { name: "Equipment", icon: <Settings className="w-5 h-5 text-inherit" /> },
  //   { name: "Parts Shop", icon: <Package className="w-5 h-5 text-inherit" /> },
  // ]

  return (
    <section className="relative h-[430px] overflow-hidden bg-black">
      <Image
        src={heroBanner}
        alt="Hero Car Background"
        fill
        className="object-cover opacity-30"
      />

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        {/* <div className="hidden lg:flex flex-col w-64 bg-black/60 backdrop-blur-sm border border-zinc-800 self-start mt-0 h-full">
          {categories.map((cat) => (
            <Link
              href="/car/1"
              key={cat.name}
              className="flex items-center gap-4 px-6 py-4 hover:bg-primary hover:text-black transition-colors border-b border-zinc-800 last:border-0 cursor-pointer text-gray-300
              group"
            >
              <span className="text-primary group-hover:text-black transition-colors">{cat.icon}</span>
              <span className="font-medium">{cat.name}</span>
            </Link>
          ))}
        </div> */}

        {/* Content */}
        <div className="flex-1 lg:ml-20 text-white max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
            <span className="text-primary">Quality Cars</span> For the
            Lowest Price
          </h1>
          <p className="text-white mb-8 text-md md:text-lg md:pr-20 lg:pr-50">
            Auto China Professional offers a range of services designed to streamline the process of buying and selling
            used cars.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold px-8">
              CONTACT US NOW
            </Button>
            <Link href="/car/1">
              <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-black border-0 px-8">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>

        {/* Discount Badge */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:block">
          <div className="p-8 pb-10 flex flex-col items-center justify-center text-center">
            <Image src={DiscountShap} alt="" className="absolute top-0 left-0 w-full h-full -z-10" />
            <p className="text-xs uppercase tracking-widest text-white">Get upto</p>
            <p className="text-4xl font-bold text-primary my-1">50%</p>
            <p className="text-xs uppercase tracking-widest text-white">Discount</p>
          </div>
        </div>
      </div>
    </section>
  )
}
