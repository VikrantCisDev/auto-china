import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import brand_1 from "@/public/brands/brand-1.png"
import brand_2 from "@/public/brands/brand-2.png"
import brand_3 from "@/public/brands/brand-3.png"
import brand_4 from "@/public/brands/brand-4.png"
import brand_5 from "@/public/brands/brand-2.png"
import brand_6 from "@/public/brands/brand-6.png"
import brand_7 from "@/public/brands/brand-7.png"
import brand_8 from "@/public/brands/brand-8.png"
import brand_9 from "@/public/brands/brand-9.png"
import brand_10 from "@/public/brands/brand-10.png"
import brand_11 from "@/public/brands/brand-11.png"
import brand_12 from "@/public/brands/brand-12.png"
import brand_13 from "@/public/brands/brand-13.png"
import brand_14 from "@/public/brands/brand-14.png"
import brand_15 from "@/public/brands/brand-15.png"
import brand_16 from "@/public/brands/brand-16.png"
import brand_17 from "@/public/brands/brand-17.png"
import brand_18 from "@/public/brands/brand-18.png"
import brand_19 from "@/public/brands/brand-1.png"
import brand_20 from "@/public/brands/brand-3.png"
import brand_21 from "@/public/brands/brand-4.png"
import brand_22 from "@/public/brands/brand-2.png"
import brand_23 from "@/public/brands/brand-6.png"
import brand_24 from "@/public/brands/brand-7.png"

export default function BrowseByMakes() {
  const makes = [
    { id: 1,name: "BYD Auto", count: 45, img: brand_1 },
    { id: 2,name: "Jetour", count: 75, img: brand_2 },
    { id: 3,name: "Dongfeng", count: 34, img: brand_3 },
    { id: 4,name: "Geely", count: 66, img: brand_4 },
    { id: 5,name: "Chery", count: 45, img: brand_5 },
    { id: 6,name: "Changan", count: 34, img: brand_6 },
    { id: 7,name: "Aito Vehicle", count: 45, img: brand_7 },
    { id: 8,name: "Great Wall", count: 30, img: brand_8 },
    { id: 9,name: "Wuling", count: 66, img: brand_9 },
    { id: 10,name: "Xiaomi Auto", count: 66, img: brand_10 },
    { id: 11,name: "Li Auto", count: 45, img: brand_11 },
    { id: 12,name: "Hyundai", count: 34, img: brand_12 },
    { id: 13,name: "Toyota", count: 75, img: brand_13 },
    { id: 14,name: "Audi", count: 75, img: brand_14 },
    { id: 15,name: "Volkswagen", count: 75, img: brand_15 },
    { id: 16,name: "KIA", count: 34, img: brand_16 },
    { id: 17,name: "Mercedes", count: 34, img: brand_17 },
    { id: 18,name: "Nissan", count: 45, img: brand_18 },
    { id: 19,name: "BMW", count: 30, img: brand_1 },
    { id: 20,name: "BYD Auto", count: 45, img: brand_2 },
    { id: 21,name: "Jetour", count: 75, img:  brand_3 },
    { id: 22,name: "Dongfeng", count: 34, img: brand_4 },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-zinc-900">Browse By Makes</h2>
          <Link href="#" className="text-primary font-semibold max-sm: text-sm flex items-center gap-1 hover:underline">
            VIEW ALL MAKES <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-11 gap-4">
          {makes.map((make) => (
            <Link
              href="/car/1"
              key={make.id}
              className="group border border-gray-200 rounded-none px-4 pt-8 pb-4 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer relative"
            >
              <span className="absolute top-2 left-2 text-[10px] text-gray-500 font-bold bg-gray-100 px-2 py-1">
                {make.count}
              </span>
              <div className="h-8 w-16 relative mb-2 transition-all">
                <Image
                  src={make.img}
                  alt={make.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-black">{make.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
