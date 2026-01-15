import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CarAccordions() {
  const interiorFeatures = [
    "Leather Seats",
    "Heated Front Seats",
    "Power Adjustable Driver Seat",
    "Sunroof/Moonroof",
    "Premium Sound System",
    "Navigation System",
    "Bluetooth Connectivity",
    "USB Ports",
  ]

  const exteriorFeatures = [
    "LED Headlights",
    "LED Taillights",
    "Chrome Accents",
    "Roof Rails",
    "Fog Lights",
    "Power Mirrors",
    "Tinted Windows",
    "Alloy Wheels",
  ]

  const safetyFeatures = [
    "Anti-lock Braking System (ABS)",
    "Electronic Stability Control",
    "Traction Control",
    "Multiple Airbags",
    "Backup Camera",
    "Blind Spot Monitoring",
    "Lane Departure Warning",
    "Collision Mitigation System",
  ]

  return (
    <div className="mt-8">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="interior" className="border-b">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">Interior</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-3 pb-4">
              {interiorFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="exterior" className="border-b">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">Exterior</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
              {exteriorFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="safety" className="border-b">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">Safety</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
              {safetyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
