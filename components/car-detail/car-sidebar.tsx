import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CarSidebar() {
  return (
    <div className="space-y-8">
      {/* Pricing and Booking Card */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h3 className="font-medium text-2xl md:text-3xl lg:text-4xl mb-2">2015 Honda Step WGN STEP WAGON 1.5G A</h3>
        <p className="text-gray-500 mb-6">Gasoline, 1,496cc, 75,300Km (Actual), Front 2WD, 8seats, Automatic</p>

        <div className="mb-6">
          <span className="text-3xl font-bold text-zinc-900">$450.00, </span>
          <span className="text-gray-500 uppercase">FOB, Singapore, Singapore</span>
        </div>

        <div className="space-y-4 mb-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-gray-500">Country</label>
            <Select defaultValue="us">
              <SelectTrigger className="w-full bg-gray-50">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-gray-500">Port</label>
            <Select defaultValue="select">
              <SelectTrigger className="w-full bg-gray-50">
                <SelectValue placeholder="Select Port" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="select">Select</SelectItem>
                <SelectItem value="newyork">New York</SelectItem>
                <SelectItem value="longbeach">Long Beach</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-gray-500">Shipping Option</label>
            <Select defaultValue="consolidation">
              <SelectTrigger className="w-full bg-gray-50">
                <SelectValue placeholder="Shipping Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consolidation">Consolidation</SelectItem>
                <SelectItem value="direct">Direct</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-gray-500">Total Price with Shipping</label>
            <div className="p-3 bg-gray-50 border rounded text-lg font-bold">$568.00</div>
          </div>
        </div>

        <div className="grid  max-sm:grid-cols-1 max-lg:grid-cols-2 xl:grid-cols-2 gap-3">
          <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-12">BOOKING REQUEST</Button>
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10 font-bold h-12 bg-transparent"
          >
            BUY NOW
          </Button>
        </div>
      </div>

      {/* Recommended Cars */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h3 className="font-medium text-2xl mb-1">Recommended Used Cars</h3>
        <p className="text-gray-400 mb-6">Showing 5 more cars you might like</p>

        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-4 items-center group cursor-pointer">
              <div className="relative w-28 h-16 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={`/cars/car-${i + 1}.jpg`}
                  alt="Recommended Car"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <h4 className="font-medium leading-tight group-hover:text-primary transition-colors">
                  Nissan Kicks 2022
                </h4>
                <p className="text-primary font-bold">$17,990</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
