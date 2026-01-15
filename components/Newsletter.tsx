import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShieldCheck, Headset, Tag } from "lucide-react"
import Image from "next/image"

export default function Newsletter() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Banner */}
        <div className="flex flex-col lg:flex-row items-center gap-0 md:gap-12 mb-20">
          <div className="relative w-full lg:w-1/2 h-[400px]">
            <Image src="/Latest-update/latest-update.png" alt="Mechanic" fill className="object-contain lg:object-left" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">Get Latest Updates And Best Offers</h2>
            <p className="text-gray-500 mb-8 max-w-md">
              Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme.
              Suitable for any car dealer websites, business or corporate websites.
            </p>
            <div className="flex max-w-md bg-white border rounded-lg p-1">
              <Input placeholder="Email Address" className="border-0 focus-visible:ring-0 shadow-none" />
              <Button className="bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wider px-6">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "All Brands",
              desc: "Galley simply dummy text lorem Ipsum is of the printin k a of type and",
              icon: <Tag />,
            },
            {
              title: "Free Support",
              desc: "Galley simply dummy text lorem Ipsum is of the printin k a of type and",
              icon: <Headset />,
            },
            {
              title: "Free Quality Check",
              desc: "We offer a 100% money-back guarantee if you don't receive your car.",
              icon: <ShieldCheck />,
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 border rounded-md hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                <span className="text-primary group-hover:text-black w-6 h-6">
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">{item.title}</h3>
                <p className="md:text-lg text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { cloneElement } from "react"
