import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image"

import morInfo_1 from "@/public/moreInfo/more-info-1.jpg"
import morInfo_2 from "@/public/moreInfo/more-info-2.jpg"
import morInfo_3 from "@/public/moreInfo/more-info-3.jpg"


export default function WhyChooseUs() {
  const items = [
    {
      title: "What is Auto China Trade",
      desc: "Auto China is the No.1 global auto trading platform in Korea. We've sold 100,000+ vehicles to 100+ countries around the world.",
      img: morInfo_1,
    },
    {
      title: "What is Auto China Trade",
      desc: "Auto China is the No.1 global auto trading platform in Korea. We've sold 100,000+ vehicles to 100+ countries around the world.",
      img: morInfo_2,
    },
    {
      title: "What is Auto China Trade",
      desc: "Auto China is the No.1 global auto trading platform in Korea. We've sold 100,000+ vehicles to 100+ countries around the world.",
      img: morInfo_3,
    },
  ]

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-zinc-900 text-white px-5 md:px-10 py-8 md:py-14 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start ">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 leading-tight">
                There are many reasons why people do buy from Auto China Trade.
              </h2>
              <p className="text-white/80 mb-8 max-w-lg md:text-lg">
                Auto China Trade got you covered from start to finish. Make yourself comfortable with our 100% reliable,
                and truly global online car trading Platform.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-medium uppercase tracking-wider px-8">
                MORE INFORMATION
              </Button>
            </div>

            <div className="space-y-4 lg:col-span-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-6 group cursor-pointer border-b border-white/20 pb-4 last:border-0"
                >
                  <div className="relative w-full sm:w-48 h-28 flex-shrink-0 overflow-hidden rounded-none">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg md:text-xl font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="md:text-lg text-white/80 font-normal leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
