import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Fuel, Gauge, Settings2, ChevronRight, MoveRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import car_1 from "@/public/cars/car-1.jpg"
import car_2 from "@/public/cars/car-2.jpg"
import car_3 from "@/public/cars/car-1.jpg"
import car_4 from "@/public/cars/car-3.jpg"
import car_5 from "@/public/cars/car-3.jpg"
import car_6 from "@/public/cars/car-1.jpg"
import car_7 from "@/public/cars/car-2.jpg"
import car_8 from "@/public/cars/car-1.jpg"
import car_9 from "@/public/cars/car-3.jpg"
import car_10 from "@/public/cars/car-3.jpg"
import car_11 from "@/public/cars/car-3.jpg"
import car_12 from "@/public/cars/car-2.jpg"
import car_13 from "@/public/cars/car-1.jpg"
import car_14 from "@/public/cars/car-1.jpg"
import car_15 from "@/public/cars/car-2.jpg"
import car_16 from "@/public/cars/car-3.jpg"
import car_17 from "@/public/cars/car-2.jpg"
import car_18 from "@/public/cars/car-1.jpg"
import car_19 from "@/public/cars/car-3.jpg"
import car_20 from "@/public/cars/car-1.jpg"

export default function LatestOffers() {

  const carImages = [car_1, car_2, car_3, car_4, car_5, car_6, car_7, car_8, car_10, car_11, car_12, car_13, car_14, car_15];

  const cars = Array.from({ length: 12 }, (_, i) => ({
    name: "Mercedes Benz Car",
    year: 2022,
    rating: 4.5,
    fuel: "Hybrid",
    mileage: "1200km",
    transmission: "Auto",
    price: 44980,
    car: carImages[i]
  
  }))

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-zinc-900">Check Our Latest Offers</h2>
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3 bg-transparent gap-4">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:border-primary data-[state=active]:text-black px-6 py-2 text-base border border-gray-300">
                All Cars
              </TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:bg-primary data-[state=active]:text-black px-6 py-2 text-base border border-gray-300">New</TabsTrigger>
              <TabsTrigger value="used" className="data-[state=active]:bg-primary data-[state=active]:text-black px-6 py-2 text-base border border-gray-300">Used</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cars.map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48">
                <Image
                  src={car.car}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded">
                  {car.year}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-xl mb-1">{car.name}</h3>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? "text-primary fill-primary" : "text-gray-300"}`} />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">{car.rating}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1 pr-3">
                    <Fuel className="w-4 h-4 self-start" />
                    <div className="flex-1">
                      <span className="text-gray-400">Fuel Type</span> <br />
                      <span className="text-black">{car.fuel}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 border-x pl-3 pr-3">
                    <Gauge className="w-4 h-4 self-start" />
                    <div className="flex-1">
                      <span className="text-gray-400">Mileage</span> <br />
                      <span className="text-black">{car.mileage}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 pr-3">
                    <Settings2 className="w-4 h-4 self-start" />
                    <div className="flex-1">
                      <span className="text-gray-400">Transmission</span> <br />
                      <span className="text-black">{car.transmission}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-lg font-semibold">${car.price.toLocaleString()}</span>
                  <Link
                    href={`/car/${i + 1}`}
                    className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                  >
                    VIEW DETAILS <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
