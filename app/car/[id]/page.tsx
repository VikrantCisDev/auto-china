// import { Header } from "@/components/layout/header"
// import { Footer } from "@/components/layout/footer"
// import { Partners } from "@/components/sections/partners"

// import { CarGallery } from "@/components/car-detail/car-gallery"
// import { CarSidebar } from "@/components/car-detail/car-sidebar"
// import { CarInfoTabs } from "@/components/car-detail/car-info-tabs"
// import { CarAccordions } from "@/components/car-detail/car-accordions"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Partners from "@/components/Partners"
import CarHero from "@/components/car-detail/car-hero"
import CarGallery from "@/components/car-detail/car-gallery"
import CarInfoTabs from "@/components/car-detail/car-info-tabs"
import CarAccordions from "@/components/car-detail/car-accordions"
import CarSidebar from "@/components/car-detail/car-sidebar"
import { Fuel, Gauge, Settings2 } from "lucide-react"

export default function CarDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CarHero />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-8">Car Details</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CarGallery />
            <div className="mt-8">
              <div className="flex items-center gap-6 mb-4">
                <h2 className="text-3xl font-medium">Dongfeng Aeolus Yixuan Mach</h2>
              </div>
              <div className="flex items-center gap-8 text-sm text-black mb-8">
                <div className="flex items-center gap-2">
                  <span className="p-0 rounded inline-flex gap-2"><Fuel className="w-5 h-5 self-start" /> Diesel</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="p-0 rounded inline-flex gap-2"><Gauge className="w-5 h-5 self-start" /> 1200Km</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="p-0 rounded inline-flex gap-2"><Settings2 className="w-5 h-5 self-start" /> Auto</span>
                </div>
              </div>
              <CarInfoTabs />
              <CarAccordions />
            </div>
          </div>
          <div className="lg:col-span-1">
            <CarSidebar />
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
    </main>
  )
}
