import Image from "next/image"

import partner_1 from "@/public/partners/partner-1.png"
import partner_2 from "@/public/partners/partner-2.png"
import partner_3 from "@/public/partners/partner-3.png"
import partner_4 from "@/public/partners/partner-4.png"
import partner_5 from "@/public/partners/partner-5.png"

export default function Partners() {
  const partners = [
    {partner: "MSC", img : partner_1},
    {partner: "MAERSK", img : partner_2},
    {partner: "COSCO SHIPPING", img : partner_3},
    {partner: "CMA CGM", img : partner_4},
    {partner: "PIL", img : partner_5}
]

  return (
    <section className="py-12 border-t border-gray-100 bg-[#F6F6F8]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around items-center gap-8 sm:gap-12 md:gap-20 transition-all">
          {partners.map((partner) => (
            <div key={partner.partner} className="h-20 w-32 relative">
              <Image
                src={partner.img}
                alt={partner.partner}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
