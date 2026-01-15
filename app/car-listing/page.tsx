"use client"

import { CarListingSection } from "@/components/CarListingSection"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"

export default function CarListingPage() {
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    priceFrom: "",
    priceTo: "",
    year: "",
    condition: "",
    fuelType: "",
  })

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CarListingSection filters={filters} setFilters={setFilters} />
      <Footer />
    </main>
  )
}
