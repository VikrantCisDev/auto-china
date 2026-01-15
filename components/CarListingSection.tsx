"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Heart, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Label } from "./ui/label"
import { ScrollArea } from "./ui/scroll-area"

interface CarListingProps {
  filters?: Record<string, string>
  setFilters?: (filters: Record<string, string>) => void
}

const carListings = [
  {
    id: 1,
    title: "2015 Bentley Fly Spur S.ROOF/R21/NAVI/R.CAM/25.KEY",
    vin: "IC5564598",
    fuel: "Gasoline",
    engine: "3.99cc",
    transmission: "AT",
    drive: "4 Wheel Drive",
    seats: "LHD",
    mileage: "93,488km (Actual)",
    location: "S Korea, Incheon",
    oldPrice: 44080,
    price: 42980,
    isLimitedSale: true,
    mainImages: ["/car-list/car-1.jpg"],
    images: ["/car-list/car-small-1.jpg", "/car-list/car-small-2.jpg"],
  },
  {
    id: 2,
    title: "2015 Bentley Fly Spur S.ROOF/R21/NAVI/R.CAM/25.KEY",
    vin: "IC5564598",
    fuel: "Gasoline",
    engine: "3.99cc",
    transmission: "AT",
    drive: "4 Wheel Drive",
    seats: "LHD",
    mileage: "93,488km (Actual)",
    location: "S Korea, Incheon",
    oldPrice: 44080,
    price: 42980,
    isLimitedSale: true,
    mainImages: ["/car-list/car-1.jpg"],
    images: ["/car-list/car-small-1.jpg", "/car-list/car-small-2.jpg"],
  },
  {
    id: 3,
    title: "2015 Bentley Fly Spur S.ROOF/R21/NAVI/R.CAM/25.KEY",
    vin: "IC5564598",
    fuel: "Gasoline",
    engine: "3.99cc",
    transmission: "AT",
    drive: "4 Wheel Drive",
    seats: "LHD",
    mileage: "93,488km (Actual)",
    location: "S Korea, Incheon",
    oldPrice: 44080,
    price: 42980,
    isLimitedSale: true,
    mainImages: ["/car-list/car-1.jpg"],
    images: ["/car-list/car-small-1.jpg", "/car-list/car-small-2.jpg"],
  },
  {
    id: 4,
    title: "2015 Bentley Fly Spur S.ROOF/R21/NAVI/R.CAM/25.KEY",
    vin: "IC5564598",
    fuel: "Gasoline",
    engine: "3.99cc",
    transmission: "AT",
    drive: "4 Wheel Drive",
    seats: "LHD",
    mileage: "93,488km (Actual)",
    location: "S Korea, Incheon",
    oldPrice: 44080,
    price: 42980,
    isLimitedSale: true,
    mainImages: ["/car-list/car-1.jpg"],
    images: ["/car-list/car-small-1.jpg", "/car-list/car-small-2.jpg"],
  },
  {
    id: 5,
    title: "2015 Bentley Fly Spur S.ROOF/R21/NAVI/R.CAM/25.KEY",
    vin: "IC5564598",
    fuel: "Gasoline",
    engine: "3.99cc",
    transmission: "AT",
    drive: "4 Wheel Drive",
    seats: "LHD",
    mileage: "93,488km (Actual)",
    location: "S Korea, Incheon",
    oldPrice: 44080,
    price: 42980,
    isLimitedSale: true,
    mainImages: ["/car-list/car-1.jpg"],
    images: ["/car-list/car-small-1.jpg", "/car-list/car-small-2.jpg"],
  },
  {
    id: 6,
    title: "2015 Bentley Fly Spur S.ROOF/R21/NAVI/R.CAM/25.KEY",
    vin: "IC5564598",
    fuel: "Gasoline",
    engine: "3.99cc",
    transmission: "AT",
    drive: "4 Wheel Drive",
    seats: "LHD",
    mileage: "93,488km (Actual)",
    location: "S Korea, Incheon",
    oldPrice: 44080,
    price: 42980,
    isLimitedSale: true,
    mainImages: ["/car-list/car-1.jpg"],
    images: ["/car-list/car-small-1.jpg", "/car-list/car-small-2.jpg"],
  },
]

const filterCategories = [
  { name: "Make", count: 0 },
  { name: "Model", count: 0 },
  { name: "S Class", count: 845 },
  { name: "E Class", count: 675 },
  { name: "S-Series", count: 347 },
  { name: "Cayenne", count: 134 },
  { name: "X5", count: 665 },
  { name: "GLE Class", count: 885 },
  { name: "Panamera", count: 388 },
]


const brands = [
  { name: "Kia", count: 42366 },
  { name: "Hyundai", count: 42193 },
  { name: "Chevrolet", count: 9692 },
  { name: "Mercedes Benz", count: 9500 },
  { name: "BMW", count: 9364 },
  { name: "KGM (Ssangyong)", count: 8424 },
  { name: "Genesis", count: 8246 },
  { name: "Renault", count: 7634 },
  { name: "Audi", count: 3155 },
  { name: "Toyota", count: 2353 },
  { name: "Volkswagen", count: 1991 },
  { name: "Mini", count: 1973 },
  { name: "Land Rover", count: 1697 },
  { name: "Jeep", count: 1300 },
  { name: "Porsche", count: 1272 },
  { name: "Ford", count: 1131 },
  { name: "Volvo", count: 969 },
  { name: "Lexus", count: 902 },
  { name: "Nissan", count: 829 },
  { name: "Honda", count: 821 },
  { name: "Suzuki", count: 492 },
  { name: "Lincoln", count: 394 },
  { name: "Peugeot", count: 388 },
  { name: "Jaguar", count: 363 },
  { name: "Maserati", count: 355 },
  { name: "Mazda", count: 351 },
  { name: "Cadillac", count: 308 },
  { name: "Infiniti", count: 297 },
  { name: "Daihatsu", count: 296 },
  { name: "Subaru", count: 206 },
  { name: "Mitsubishi", count: 125 },
  { name: "Bentley", count: 111 },
  { name: "Citroen", count: 97 },
  { name: "Fiat", count: 91 },
  { name: "Chrysler", count: 70 },
  { name: "Rolls Royce", count: 53 },
  { name: "Dodge", count: 42 },
  { name: "Lamborghini", count: 41 },
  { name: "Ferrari", count: 29 },
  { name: "Hummer", count: 19 },
  { name: "Smart", count: 18 },
  { name: "Aston Martin", count: 15 },
  { name: "Isuzu", count: 15 },
  { name: "GMC", count: 14 },
  { name: "DFSK", count: 8 },
  { name: "Saab", count: 7 },
  { name: "McLaren", count: 6 },
  { name: "Acura", count: 2 },
  { name: "Lotus", count: 2 },
  { name: "BAIC YINXIANG", count: 1 },
  { name: "Others", count: 1 },
]


function FilterSidebar({
  expandedFilters,
  toggleFilter,
}: { expandedFilters: Set<string>; toggleFilter: (name: string) => void }) {
  return (
    <div className="bg-gray-50 border">
      <div className="flex justify-between px-4 py-2 items-center border-b">
        <h2 className="text-xl font-medium text-foreground">Search Filter</h2>
        <button className="text-yellow-500 hover:text-yellow-600 text-sm font-semibold">Reset</button>
      </div>

      {/* Make Filter */}
      <div className="">
        <button
          onClick={() => toggleFilter("Make")}
          className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:bg-gray-100 px-2 rounded"
        >
          <span className="font-medium text-foreground">Make</span>
          {expandedFilters.has("Make") ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {expandedFilters.has("Make") && (
            <ScrollArea className="h-72 border-b">
          <div className="w-full max-w-sm py-3 bg-white">
              {brands.map((brand, index) => (
                <div
                  key={brand.name}
                  className={`flex items-center justify-between px-4 py-1 text-smy
                    ${index !== brands.length - 1 ? "border-b border-gray-100" : ""}
                    hover:bg-gray-50 transition`}
                >
                  <span className="text-gray-800">
                    {brand.name}
                  </span>

                  <span className="text-gray-900">
                    {brand.count.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
        </ScrollArea>
        )}
      </div>

      {/* Model Filter */}
      <div>
        <button
          onClick={() => toggleFilter("Model")}
          className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:bg-gray-100 px-2 rounded">
          <span className="font-medium text-foreground">Model</span>
          {expandedFilters.has("Model") ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {expandedFilters.has("Model") && (
          <div className="flex flex-col py-3  bg-white border-b">
            <div className="flex items-center gap-3 px-4 py-2 text-base">
              <Checkbox id="S Class" className="data-[state=checked]:text-black"/>
              <Label htmlFor="S Class">S Class</Label>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-base">
              <Checkbox id="E Class" className="data-[state=checked]:text-black"/>
              <Label htmlFor="E Class">E Class</Label>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-base">
              <Checkbox id="5 Series" className="data-[state=checked]:text-black"/>
              <Label htmlFor="5 Series">5 Series</Label>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-base">
              <Checkbox id="Cayenne" className="data-[state=checked]:text-black"/>
              <Label htmlFor="Cayenne">Cayenne</Label>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-base">
              <Checkbox id="X5" className="data-[state=checked]:text-black"/>
              <Label htmlFor="X5">X5</Label>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-base">
              <Checkbox id="GLE Class" className="data-[state=checked]:text-black"/>
              <Label htmlFor="GLE Class">GLE Class</Label>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-base">
              <Checkbox id="Panamera" className="data-[state=checked]:text-black"/>
              <Label htmlFor="Panamera">Panamera</Label>
            </div>
          </div>
        )}
      </div>


      {/* Model Detail */}
      <div>
        <button
          onClick={() => toggleFilter("Model Detail")}
          className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:bg-gray-100 px-2 rounded"
        >
          <span className="font-medium text-foreground">Model Detail</span>
          {expandedFilters.has("Model Detail") ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
             {expandedFilters.has("Model Detail") && 
        <div className="space-y-3 px-4 py-2  bg-white border-b">
            {["Option", "Option 1", "Option 3", "Option 4"].map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
            <Checkbox className="border-gray-300" />
            <span className="text-sm text-foreground">{option}</span>
            </label>
            ))}
            </div>
}
      </div>

      {/* Year Filter */}
      <div>
        <button
          onClick={() => toggleFilter("Year")}
          className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:bg-gray-100 px-2 rounded"
        >
          <span className="font-medium text-foreground">Year</span>
          {expandedFilters.has("Year") ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
     {expandedFilters.has("Year") && 
        <div className="space-y-3 px-4 py-2  bg-white border-b">
            {["Option", "Option 1", "Option 3", "Option 4"].map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
            <Checkbox className="border-gray-300" />
            <span className="text-sm text-foreground">{option}</span>
            </label>
            ))}
            </div>
}

      </div>

      {/* Additional Filters */}
      {[
        "Price",
        "Fuel Type",
        "Vehicle Type",
        "Transmission",
        "Drive Type",
        "Condition",
        "No. of Passenger",
        "Engine Volume",
        "Options",
        "Color",
        "Steering",
        "Location",
        "Hot Mark",
      ].map((filter) => (
        <div key={filter}>
          <button
            onClick={() => toggleFilter(filter)}
            className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:bg-gray-100 px-2 rounded"
          >
            <span className="font-semibold text-foreground text-sm">{filter}</span>
            {expandedFilters.has(filter) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

            {expandedFilters.has(filter) && <>
            <div className="space-y-3 px-4 py-2  bg-white border-b">
            {["Option", "Option 1", "Option 3", "Option 4"].map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
            <Checkbox className="border-gray-300" />
            <span className="text-sm text-foreground">{option}</span>
            </label>
            ))}
            </div>
            </>}

        </div>
      ))}
      
      

      <div className="px-4 py-2">
        <div className="flex w-full max-w-md overflow-hidden rounded-lg border border-gray-300">
          <Input
            placeholder="Model, Item No."
            className="
              border-0
              rounded-none
              focus-visible:ring-0
              focus-visible:ring-offset-0
              text-gray-700
            "
          />
          <Button
            className="
              rounded-none
              bg-yellow-500
              hover:bg-yellow-600
              text-black
              font-semibold
              px-6
            "
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

export function CarListingSection({ filters, setFilters }: CarListingProps) {
  const [expandedFilters, setExpandedFilters] = useState<Set<string>>(new Set(["Make"]))
  const [currentPage, setCurrentPage] = useState(1)

  const toggleFilter = (filterName: string) => {
    const newExpanded = new Set(expandedFilters)
    if (newExpanded.has(filterName)) {
      newExpanded.delete(filterName)
    } else {
      newExpanded.add(filterName)
    }
    setExpandedFilters(newExpanded)
  }

  return (
    <div className="flex-1 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                  <Menu size={18} className="mr-2" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-80 overflow-y-auto gap-0">
                <SheetHeader className="mb-0">
                  <SheetTitle>Search Filters</SheetTitle>
                </SheetHeader>
                <FilterSidebar expandedFilters={expandedFilters} toggleFilter={toggleFilter} />

                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                  <Button variant="outline">Button</Button>
                  <Button variant="outline" aria-label="Submit">
                    Button
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Left Sidebar - Desktop only */}
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
            <FilterSidebar expandedFilters={expandedFilters} toggleFilter={toggleFilter} />
          </div>

          {/* Right Content - Car Listings */}
          <div className="flex-1 w-full">
            {/* Search Header */}
            <div className="mb-0">
              <h1 className="text-2xl sm:text-3xl font-medium text-foreground mb-2">Search Cars</h1>
              <p className="text-gray-600 mb-4">Search Result - 9,347 units</p>

            <div className="flex flex-wrap justify-between gap-4">
              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Fast Shipping", "Inspected", "VIN Check", "Guarantee", "Clearance Sale"].map(
                  (label, i) => (
                    <div key={i} className="flex items-center gap-2 mr-6">
                      <Checkbox
                        id={label}
                        defaultChecked={label !== "Inspected" && label !== "VIN Check"}
                        className="
                          border-gray-300
                          data-[state=checked]:bg-yellow-500
                          data-[state=checked]:border-yellow-500
                          data-[state=checked]:text-black
                        "
                      />
                      <Label
                        htmlFor={label}
                        className="text-sm font-normal text-gray-700 cursor-pointer"
                      >
                        {label}
                      </Label>
                    </div>
                  )
                )}
              </div>

              {/* Sort and Pagination Controls */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Select>
                    <SelectTrigger className="w-full sm:w-32">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-full sm:w-32">
                      <SelectValue placeholder="30 per page" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 per page</SelectItem>
                      <SelectItem value="30">30 per page</SelectItem>
                      <SelectItem value="50">50 per page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            </div>

            {/* Car Listings Grid */}
            <div className="mb-8">
              
                {carListings.map((car) => (
                    <Card
                      key={car.id}
                      className="py-4 sm:py-6 border-x-0 first:border-t-0 px-0 -mt-0.5 shadow-none rounded-none transition-shadow">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-[350px]">
                          <div className="row-span-2">
                            <Image
                              src={car.mainImages?.[0] || "/placeholder.png"}
                              alt={car.title || "Car image"}
                              width={300}
                              height={450}
                              className="h-full w-full object-cover border border-gray-200"
                            />
                          </div>
                          {car.images.map((img, idx) => (
                            <div key={idx}>
                              <Image
                                src={img || "/placeholder.png"}
                                alt={`${car.title} view ${idx + 1}`}
                                width={150}
                                height={150}
                                className=" w-full h-[100px] object-cover border border-gray-200"
                              />
                            </div>
                          ))}
                        </div>

                    {/* Car Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start gap-2 sm:gap-4 mb-3">
                        <div className="flex-1 space-y-2">
                          <h3 className="text-base sm:text-lg font-medium text-foreground line-clamp-2">{car.title}</h3>
                          <p className="  text-gray-600 mt-1 line-clamp-2">
                            {car.vin} - {car.fuel} - {car.engine} - {car.transmission} - {car.drive} Seats: {car.seats}{" "}
                            - {car.mileage}
                          </p>
                          <p className=" text-gray-500 mt-1 flex gap-1">
                            <Image src="/SKorea.png" alt="" width={22} height={12} className="shrink-0 self-center"/>
                             {car.location}</p>
                        </div>
                        <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer flex-shrink-0" />
                      </div>

                      {/* Badge and Price */}
                      <div className="gap-2 sm:gap-4 mt-4 space-y-2">
                        {car.isLimitedSale && (<div>
                          <span className="bg-red-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded">
                            Limited Sale
                          </span>
                        </div>)}

                          <div className="text-gray-400 line-through text-xs sm:text-sm">
                            ${car.oldPrice.toLocaleString()}
                          </div>
                          <div className="text-lg sm:text-2xl font-bold text-foreground">
                            ${car.price.toLocaleString()}
                          </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-1 sm:gap-2 py-8 flex-wrap">
              <Button variant="outline" size="sm">
                ❮
              </Button>
              <Button variant="outline" size="sm">
                ‹
              </Button>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm" className="hidden border-0 sm:inline-flex bg-transparent">
                ...
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent">
                10
              </Button>
              <Button variant="outline" size="sm">
                ›
              </Button>
              <Button variant="outline" size="sm">
                ❯
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
