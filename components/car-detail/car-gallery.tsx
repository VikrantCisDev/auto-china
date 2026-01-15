"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CarGallery() {
  const images = [
    "/cars/car-1.jpg",
    "/cars/car-2.jpg",
    "/cars/car-3.jpg",
    "/cars/car-4.jpg",
    "/cars/car-1.jpg",
  ]

  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-xl overflow-hidden border">
        <Image src={images[activeImage] || "/placeholder.svg"} alt="Car Main Image" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-black/50 text-white hover:bg-black/70 border-none"
            onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-black/50 text-white hover:bg-black/70 border-none"
            onClick={() => setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              activeImage === idx ? "border-primary shadow-lg" : "border-transparent opacity-70 hover:opacity-100"
            }`}
            onClick={() => setActiveImage(idx)}
          >
            <Image src={img || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
