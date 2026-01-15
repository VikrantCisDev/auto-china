import { Zap, Clock } from "lucide-react"
import Image from "next/image"

export default function CarServices() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-zinc-900 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="px-8 md:px-14 py-8 md:py-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6">Why Choose Our Car Services</h2>
            <p className="text-gray-300 mb-12 leading-relaxed md:text-lg">
              Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme.
              Suitable for any car dealer websites, business or corporate websites.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Image src="/Brake-Check-&-Services.svg" alt="" width={40} height={40} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-primary">
                    Brake Check & Services
                  </h3>
                  <p className="md:text-lg text-gray-400">
                    Galley simply dummy text lorem Ipsum is of the printin k a of type and end
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Image src="/Online-Appointment.svg" alt="" width={40} height={40} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-primary">
                    Online Appointment
                  </h3>
                  <p className="md:text-lg text-gray-400">
                    Galley simply dummy text lorem Ipsum is of the printin k a of type and end
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
              <div className="absolute inset-0 z-0">
                <Image src="/service/service.jpg" alt="Car background" fill className="object-cover" />
              </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
