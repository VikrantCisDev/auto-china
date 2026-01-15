import { Facebook, Twitter, Linkedin, Instagram, MapPin } from "lucide-react"
import Link from "next/link"
import footerLogo from "@/public/footer-logo.png"
import Image from "next/image"
import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoWechat, IoLogoWhatsapp } from "react-icons/io5"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="col-span-1 md:col-span-5">
            <div className="flex flex-wrap gap-4 justify-between border-b border-b-white/10 pb-8">
              <Link href="/" className="flex items-center gap-2">
                <Image src={footerLogo} alt="" className="max-md:max-w-2xs"/>
              </Link>
              <div className="inline-flex gap-4 max-md:gap-2 self-center">
                <div className="bg-zinc-800 p-3 rounded-full cursor-pointer hover:bg-primary hover:text-black transition-colors">
                  <IoLogoWechat className="w-6 h-6 max-md:w-4 max-md:h-4" />
                </div>
                <div className="bg-zinc-800 p-3 rounded-full cursor-pointer hover:bg-primary hover:text-black transition-colors">
                  <IoLogoWhatsapp  className="w-6 h-6 max-md:w-4 max-md:h-4" />
                </div>
                <div className="bg-zinc-800 p-3 rounded-full cursor-pointer hover:bg-primary hover:text-black transition-colors">
                  <FaFacebookF className="w-6 h-6 max-md:w-4 max-md:h-4" />
                </div>
                <div className="bg-zinc-800 p-3 rounded-full cursor-pointer hover:bg-primary hover:text-black transition-colors">
                  <FaXTwitter className="w-6 h-6 max-md:w-4 max-md:h-4" />
                </div>
                <div className="bg-zinc-800 p-3 rounded-full cursor-pointer hover:bg-primary hover:text-black transition-colors">
                  <FaTiktok className="w-6 h-6 max-md:w-4 max-md:h-4" />
                </div>
                <div className="bg-zinc-800 p-3 rounded-full cursor-pointer hover:bg-primary hover:text-black transition-colors">
                  <FaLinkedinIn className="w-6 h-6 max-md:w-4 max-md:h-4" />
                </div>
                
              </div>
              </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">About Us</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  About Autochinatrade.com
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Term of use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Become an Agent
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Buy</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Cars
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  SUVs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Pick Ups
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Trucks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Buses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Parts Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">How to Buy</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Purchase with Confidence
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Vehicle Purchase Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Shipping</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Shipping Schedule
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Shipping Photos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Type of Shipping
                </Link>
              </li>
            </ul>
            <br />
            <h3 className="font-medium mb-3">Information</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Country Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Community</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Customer's Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Auto China Trade Magazine
                </Link>
              </li>
            </ul>
            <br />
            <h3 className="font-medium mb-3">Sell</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Place an AD
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Membership Fee
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors font-light">
                  Dealership Registration
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
          <p>© Auto China Trade 2025 | All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
