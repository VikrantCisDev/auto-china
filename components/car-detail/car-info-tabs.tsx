import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AirVent, ArrowDown, ArrowDownNarrowWide, Car, ChevronDown, LifeBuoy, LockKeyholeOpen, Ratio } from "lucide-react"
import { Button } from "../ui/button"
import { FaAngleDown } from "react-icons/fa"

export default function CarInfoTabs() {
  const specs = [
    { label: "Condition", value: "New Car" },
    { label: "Cylinders", value: "6" },
    { label: "Stock Number", value: "Z5669S2" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Vin Number", value: "KNDJ23225" },
    { label: "Doors", value: "4" },
    { label: "Year", value: "2023" },
    { label: "Color", value: "Black,Gold" },
    { label: "Seat", value: "4" },
    { label: "Transmission", value: "DCT" },
    { label: "City MPG", value: "27" },
    { label: "Engine Size", value: "1.5" },
    { label: "Highway MPG", value: "33" },
    { label: "Drive Type", value: "FWD - Front-wheel drive" },
  ]

  return (
    <div className="mb-12">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start p-0 h-auto mb-6 gap-10">
          {/* <TabsTrigger
            value="description"
            className="w-auto border-t-0 border-l-0 border-r-0 flex-0 rounded-none border-b-2 border-transparent text-gray-500 data-[state=active]:text-black data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 font-medium"
          >
            Description
          </TabsTrigger> */}
          <TabsTrigger
            value="overview"
            className="w-auto border-t-0 border-l-0 border-r-0 flex-0 rounded-none border-b-2 border-transparent text-gray-500 data-[state=active]:text-black data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 font-medium"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="features"
            className="w-auto border-t-0 border-l-0 border-r-0 flex-0 rounded-none border-b-2 border-transparent text-gray-500 data-[state=active]:text-black data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 font-medium"
          >
            Features
          </TabsTrigger>
        </TabsList>
        {/* <TabsContent value="description" className="space-y-6">
          <h3 className="text-xl font-bold">Description</h3>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
                The 2023 Ford Territory has a modern appearance, bearing the strong mark of the American car company’s language. This SUV model is designed based on Ford’s global DNA platform, so it has many similarities with the Ford Equator. But in Vietnam, the Territory still feels fresh, exuding abundant energy of youthfulness and strength. The front of the 2023 Ford Territory is “flatter” than the usual Ford style. The rough muscular blocks are removed. Instead, the sophistication comes from the details “displayed” on the surface.
            </p>
            <p>
                Above, the Territory stands out with its slim, hook-shaped LED positioning “eyes”. The two side lights are connected to each other by a thin chrome line. Below is the main lighting cluster placed low and slightly recessed. All versions of the Ford Territory are equipped with LED lights. The Titanium and Titanium X versions have an additional automatic on/off feature and automatic anti-glare headlights.
            </p>
            </div>
            <Button className="g-1 text-primary cursor-pointer" variant="ghost">Hide Less<ChevronDown /></Button>

        </TabsContent> */}
        
        <TabsContent value="overview" className="space-y-6">
          <h3 className="text-xl font-bold">Overview</h3>
          
        <div className="grid grid-cols-2 gap-4 mt-6">
            {specs.map((spec) => (
                <div key={spec.label} className="flex items-center border-b pb-2 gap-4">
                    <span className="text-gray-600 text-sm">{spec.label}:</span>
                    <span className="font-semibold text-sm">{spec.value}</span>
                </div>
            ))}
        </div>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <h3 className="text-xl font-bold">Features</h3>
            <div className="grid grid-cols-2 gap-6 mt-6">
                {[
                    { icon: <Ratio />, label: "Touch Screen" },
                    { icon: <LockKeyholeOpen />, label: "Anti Lock Braking System" },
                    { icon: <Car />, label: "Power Windows Rear" },
                    { icon: <Car />, label: "Power Windows Front" },
                    { icon: <AirVent />, label: "Air Conditioner" },
                    { icon: <LifeBuoy />, label: "Alloy Wheels" },
                ].map((feature) => (
                    <div key={feature.label} className="flex items-center gap-3 rounded-lg">
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="text-sm font-medium">{feature.label}</span>
                    </div>
                ))}
            </div>
         
        </TabsContent>
        
      </Tabs>
    </div>
  )
}
