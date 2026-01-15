import { ChevronRight, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


import brand_1 from "@/public/cars/car-4.jpg"
// import brand_3 from "@/public/brands/brand-3.png"
import carnews_1 from "@/public/news/car-news-1.jpg"
import carnews_2 from "@/public/news/car-news-2.jpg"
import carnews_3 from "@/public/news/car-news-3.jpg"
import { FaCalendarAlt } from "react-icons/fa"

export default function FeaturedPosts() {
  const latestNews = [
    { title: "How Much Does a Bugatti...", date: "Thursday, August, 2022", carnews: carnews_1, pera: "Cras gravida augue eu lacus tincidunt, a tristique quam faucibus. Praesent viver..."},
    { title: "How Much Does a Bugatti...", date: "Thursday, August, 2022", carnews: carnews_2, pera: "Cras gravida augue eu lacus tincidunt, a tristique quam faucibus. Praesent viver..." },
    { title: "How Much Does a Bugatti...", date: "Thursday, August, 2022",  carnews: carnews_3, pera: "Cras gravida augue eu lacus tincidunt, a tristique quam faucibus. Praesent viver..." },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-medium text-black">Featured Posts</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Featured */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-r border-r-gray-200 pr-10 max-lg:border-0 max-lg:pr-0">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                <Image src={brand_1} alt="Featured Car" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium text-black mb-2">2016 McLaren 675LT</h3>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <FaCalendarAlt className="w-4 h-4 text-primary" />
                  <span className="text-gray-500">Thursday, August, 2022</span>
                </div>
                <p className="text-gray-500 md:text-lg leading-relaxed mb-2">
                  Finished in special Napier green pearl metallic, leather and Alcantara interior with Cras gravida 
                  augue eu lacus tincidunt, a tristique quam faucibus. Praesent viver.... ...
                </p>
                <div className="space-y-2 mb-6">
                  <ul className="md:text-lg list-disc list-inside">
                    <li>Location: 15 Bark Place, London, UK</li>
                    <li>Engine: 3.8</li>
                    <li>Mileage: 21,350</li>
                    <li>Prev. Owners:</li>
                    <li>Seller: Mr. Admin</li>
                  </ul>
                </div>
                <Link href="/car/1" className="text-primary font-medium inline-flex items-center gap-1 uppercase hover:underline">
                  VIEW MORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Latest News Sidebar */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-medium">Latest News</h3>
              <Link
                href="/car/1"
                className="text-primary font-medium inline-flex items-center gap-1 uppercase hover:underline"
              >
                View More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-4">
              {latestNews.map((news, i) => (
                <Link href="/car/1" key={i} className="flex gap-4 group cursor-pointer">
                  <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                    <Image
                      src={news.carnews}
                      alt="News thumbnail"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">{news.title}</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FaCalendarAlt className="w-3 h-3 text-primary" />
                      <span>{news.date}</span>
                    </div>
                    <p  className="text-sm text-gray-500">{news.pera}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
