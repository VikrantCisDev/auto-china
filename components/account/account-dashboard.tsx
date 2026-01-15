"use client"

import { useState } from "react"
import {
  CreditCard,
  Wallet,
  Calendar,
  Package,
  ShoppingCart,
  Truck,
  User,
  ChevronRight,
  ChevronDown,
  BookUser,
  CircleDollarSign,
  ClipboardCheck,
  CircleQuestionMark,
  ArrowRight,
  Check,
  ChevronLeft,
  Download,
  HardDriveDownload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { FaAngleRight, FaAward } from "react-icons/fa"
import { BsShieldFillCheck } from "react-icons/bs";
import { FaCalendarDays, FaCircleCheck } from "react-icons/fa6"
import { RiDiscountPercentFill } from "react-icons/ri";
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"



type Tab = "membership" | "wallet" | "booking" | "order" | "parts-cart" | "parts-order" | "shipping" | "info"

export default function AccountDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("membership")

  const menuItems = [
    { id: "membership", label: "My Membership", icon: CreditCard },
    { id: "wallet", label: "My Wallet", icon: Wallet },
    { id: "booking", label: "My Booking requests", icon: Calendar },
    { id: "order", label: "My Order", icon: Package },
    { id: "parts-cart", label: "My Parts Carts", icon: ShoppingCart },
    { id: "parts-order", label: "My Parts Orders", icon: Truck },
    { id: "shipping", label: "Shipping", icon: Truck },
    { id: "info", label: "My Information", icon: User },
  ]

  return (
    <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-white border border-gray-200 rounded-lg overflow-hidden shrink-0 self-start">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as Tab)}
            className={cn(
              "w-full text-left px-6 py-4 border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group",
              activeTab === item.id ? "bg-primary text-black" : "hover:bg-gray-50 text-gray-600",
            )}
          >
            <span className="font-medium">{item.label}</span>
            <ChevronRight
              className={cn(
                "w-4 h-4 transition-transform",
                activeTab === item.id ? "rotate-0" : "group-hover:translate-x-1",
              )}
            />
          </button>
        ))}
      </aside>

      {/* Main Content Area */}
      {/* <div className="flex-1 bg-white border border-gray-200 rounded-lg p-8"> */}
      <div className="flex-1 w-[calc(100% - w-64 )] max-lg:w-full">
        {activeTab === "wallet" && <WalletTab />}
        {activeTab === "info" && <InfoTab />}
        {activeTab === "order" && <OrderTab />}
        {activeTab === "booking" && <BookingTab />}
        {activeTab === "parts-cart" && <PartsCartTab />}
        {activeTab === "parts-order" && <PartsOrderTab />}
        {activeTab === "membership" && (<MembershipTab />
        //   <div className="text-center py-20 text-gray-400">Membership details content</div>
        )}
        {activeTab === "shipping" && <div className="text-center py-20 text-gray-400">Shipping tracking content</div>}
      </div>
    </div>
  )
}

function WalletTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-medium mb-4">My Wallet</h2>
        <p className="font-semibold mb-2">Your current balance:</p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Input readOnly value="Total" className="bg-gray-50 border-gray-200 h-12" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium">USD 0</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-black font-medium h-12 px-8">
            Add Money to My Wallet
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex gap-2">
          <Button variant="default" className="bg-primary text-black">
            All
          </Button>
          <Button variant="outline">Money-in</Button>
          <Button variant="outline">Money-out</Button>
        </div>

        <div className="border rounded-lg overflow-x-auto overflow-y-hidden">
          <div className="grid grid-cols-5 bg-slate-50 p-4 font-medium  text-gray-700 text-center">
            <div>Transaction Time</div>
            <div>Description</div>
            <div>Money-in</div>
            <div>Money-out</div>
            <div>Balance</div>
          </div>
          <div className="py-20 text-center text-gray-400 ">No transactions found</div>
        </div>
      </div>

      <div className="text-center pt-8">
        <h3 className="text-2xl font-medium text-primary mb-2">Charge your Wallet</h3>
        <p className="text-xl font-medium text-primary">and buy your car Anytime!</p>
      </div>
    </div>
  )
}

function InfoTab() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-medium">My Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-y-6 ">
        <div className="font-medium text-gray-600">Membership</div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="rounded-full">
            <Image src="/My-Membership.svg" alt="" width="22" height="22"/>
            </span> Basic <ChevronRight className="w-4 h-4" />
        </div>

        <div className="font-medium text-gray-600">Name</div>
        <div className="text-gray-900 font-medium">Robert Parker</div>

        <div className="font-medium text-gray-600">Username</div>
        <div className="text-gray-900 font-medium">Robert</div>

        <div className="font-medium text-gray-600">Country</div>
        <div className="flex items-center gap-2 text-gray-900 font-medium">
          <Image src="/china.png" alt="" width={20} height={20} /> China
        </div>

        <div className="font-medium text-gray-600">City</div>
        <div className="text-gray-900 font-medium">Country</div>

        <div className="font-medium text-gray-600">Mobile</div>
        <div className="text-gray-900 font-medium">+23 8098097445</div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="font-medium mb-1">Edit My Information</h3>
            <p className=" text-gray-500">Please enter your password for privacy protection.</p>
          </div>
          <div className="flex-1 w-full flex gap-2">
            <Input type="password" placeholder="Password" className="bg-white" />
            <Button className="bg-primary hover:bg-primary/90 text-black font-medium whitespace-nowrap">
              Confirm Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function OrderTab() {

  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-medium mb-2">My Order</h2>
        <p className="text-gray-500">
          The Buy it Safely is the most safe and convenient way for the deal through AutoChina.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">

        
        <div className="w-full  md:w-52">
          <img
            src="/cars/car-4.jpg"
            alt="2014 Chevrolet Cruze"
            className="rounded-lg w-full object-cover max-w-52"
          />

          
          <Select>
            <SelectTrigger className="w-full mt-4 text-md text-gray-900">
              <SelectValue placeholder="Consignee Information" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Option 1">Option 1</SelectItem>
                <SelectItem value="Option 2">Option 2</SelectItem>
                <SelectItem value="Option 3">Option 3</SelectItem>
                <SelectItem value="Option 4">Option 4</SelectItem>
                <SelectItem value="Option 5">Option 5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
        </div>

        
        <div className="flex-1 space-y-4">

          <h2 className="text-2xl font-medium text-gray-900">
            2014 Chevrolet Cruze
          </h2>

          
          <div className="grid grid-cols-2 gap-y-2  max-w-xl">
            <span className="font-medium">Step 6</span>
            <span className="text-gray-500">Check Shipping Schedule</span>

            <span className="font-medium">Item No</span>
            <span className="text-gray-500">#CD4657766</span>

            <span className="font-medium">VIN No</span>
            <span className="text-gray-500">KLAJA574687989</span>
          </div>

          <p className=" text-gray-500">
            Used · LHD · Gasoline · 5seats · Automatic · KLAJA69SDEK521398 · China
          </p>

          
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="border rounded-md px-4 py-2  font-medium text-gray-700 bg-gray-50 hover:bg-gray-100">
              View Photos
            </button>
            <button className="border rounded-md px-4 py-2  font-medium text-gray-700 bg-gray-50 hover:bg-gray-100">
              View Video
            </button>
            <button className="border rounded-md px-4 py-2  font-medium text-gray-700 bg-gray-50 hover:bg-gray-100">
              Download Photos
            </button>
          </div>

          
          <div className="flex flex-wrap items-center gap-6 pt-3 ">

            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100">
                <Image src="/BuyItSafely.svg" alt="" width={18} height={20} />
              </span>
              Buy It Safely
            </div>

            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                <Image src="/VideoStock.svg" alt="" width={18} height={20} />
              </span>
              Video Stock
            </div>

            <div className="flex items-center gap-2 font-medium">
              <span className="w-5 h-5 flex items-center text-gray-700 justify-center rounded-full bg-green-100">
                <Image src="/ConditionReport.svg" alt="" width={18} height={20} />
              </span>
              Condition Report
            </div>

          </div>
        </div>
      </div>

      <hr />

      <div className="">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          Consignee’s Information
        </h2>

        <div className="space-y-4 ">
          <div className="grid grid-cols-2 gap-4">
            <span className="text-gray-500">Full Name</span>
            <span className="text-gray-800 font-medium">Osikani Wiafe</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <span className="text-gray-500">Tel/Mobile</span>
            <span className="text-gray-800 font-medium">23201566445 /-</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <span className="text-gray-500">Email Address</span>
            <span className="text-gray-800 font-medium">ritefm@yahoo.com</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <span className="text-gray-500">Full Address</span>
            <span className="text-gray-400">-</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <span className="text-gray-500">Postal Code (ZIP)</span>
            <span className="text-gray-400">-</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <span className="text-gray-500">Additional Info</span>
            <span className="text-gray-400">-</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="">
        <h2 className="text-2xl font-medium text-gray-900">Invoice (P.I)</h2>
        <p className=" text-gray-500 mb-4">*You can check and download P.I, also you can request amendment</p>
        
        <div className="border rounded-lg overflow-x-auto overflow-y-hidden">
          <table className="w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-slate-50">
              <tr className="text-gray-700 font-medium text-center">
                <th className="p-4 font-medium">No.</th>
                <th className="p-4 font-medium">File Name</th>
                <th className="p-4 font-medium">Request</th>
                <th className="p-4 font-medium">Download</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>

            {/* Empty State */}
            <tbody>
              <tr>
                <td colSpan={6} className="py-20 text-center text-gray-400">
                  Invoice (P.I) is not uploaded yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <hr />

      <div className="">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Payment Receipt</h2>
        <p className=" text-gray-500 mb-4">*You can check and download PI, also you can request amendment</p>
        
        <div className="border rounded-lg overflow-x-auto overflow-y-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-slate-50">
              <tr className="text-gray-700 font-medium text-center">
                <th className="p-4 font-medium">No.</th>
                <th className="p-4 font-medium">File Name</th>
                <th className="p-4 font-medium">Download</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={5} className="py-20 text-center text-gray-400">
                  Payment receipt not uploaded yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <p className="text-xs text-gray-500 mt-4">
          *Attached files, available formats GIF, JPG, JPEG, PNG, PDF and a maximum of 5MB, up to 10 files can be uploaded.
        </p>

        <div className="mt-6 flex justify-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-2">
            Upload Payment Receipt
          </Button>
        </div>
      </div>

      <hr />

      <div className="">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          Photo & Video in Autowini's Yard
        </h2>
        <p className=" text-gray-500 mb-4">
          This vehicle is ready to be shipped. You can see the photos and videos of this vehicle's stored in the Autowini's yard before shipping.
        </p>
        <p className=" text-red-500 mb-6">
          *Not all the cars will have photo and video available
        </p>

        <div className="border rounded-lg overflow-x-auto overflow-y-hidden">
          <table className="w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-slate-50">
              <tr className="text-left text-gray-700 font-medium">
                <th className="p-4 font-medium">No.</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">File Name</th>
                <th className="p-4 text-center">Preview</th>
                <th className="p-4 font-medium">Date</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={item} className="items-center">
                  <td className="p-4 text-gray-600">{index + 1}</td>
                  <td className="p-4 text-gray-600">Video</td>

                  <td className="p-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <HardDriveDownload />
                      cheked-video-IC475869.mp4
                    </div>
                  </td>

                  <td className="p-4 text-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 rounded-full p-2">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                  </td>

                  <td className="p-4 text-gray-600">2025.12.02</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

      <hr />

      <div className="">
        <div className="relative sm:pr-36">

          <h2 className="text-2xl font-medium text-gray-900 mb-2">
            Commercial Invoice & Packing List (CI)
          </h2>
          <p className=" text-gray-500 mb-4">
            You can download the CI file directly. We don’t send you the printout via DHL. If you request to edit your information of the file, please contact your B.I.S staff.
          </p>
          <button
              className="px-8 py-2 rounded-md border-2 border-amber-400 text-amber-400
                    text-base font-medium bg-white
                    hover:bg-amber-50 hover:border-amber-500 hover:text-amber-500
                    transition-colors duration-200
                    sm:absolute right-0 top-0 z-10
                    "
            >
              Download
            </button>

        </div>

        <hr />

        <div className="mt-4 text-gray-600 space-y-2">
          <ul className="list-disc pl-4 space-y-3">
              <li>
                  In certain countries the Commercial Invoice is not required. In other cases, the Commercial Invoice is necessary for customs clearance. 
                  <br /> The following countries DO NOT need to submit CI documents: 
                  <br /> Chile, Ghana, Rwanda, Democratic Republic of the Congo, Tanzania, Myanmar, Marshall Islands, Vanuatu, Cambodia
              </li>
              <li> 
                If you are in any of these countries and you need a CI file, please contact and request the document to the CS Staff.
              </li>
              <li>
                Policies related to Commercial Invoice are subject to change depending on local import regulations.
              </li>
          </ul>

        </div>
      </div>
      
      <hr />

      <div className="">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          Bill of Lading (B/L)
        </h2>
        <p className=" text-gray-500 mb-4">
          * You can check and download B/L, also you can request amendment.
        </p>

        <div className="border rounded-lg overflow-x-auto overflow-y-hidden">
          <table className="w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-slate-50">
              <tr className="text-gray-700 font-medium text-center">
                <th className="p-4 font-medium">No.</th>
                <th className="p-4 font-medium">File Name</th>
                <th className="p-4 font-medium">Request</th>
                <th className="p-4 font-medium">Download</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>

            {/* Empty State */}
            <tbody>
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-gray-400"
                >
                  Bill of Lading (B/L) is not uploaded yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="mt-6 space-y-1  text-gray-600">
          <div className="flex items-start gap-2">
            <span className="text-gray-400 text-xl align-middle">•</span>
            <span>Please review the B/L draft and confirm that your information is correct within 2 days. If no response is received after 2 days, it will be considered confirmed.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400 text-xl align-middle">•</span>
            <span>Please review the B/L carefully and submit only one change request. Multiple requests may cause processing delays and generate additional port charges.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400 text-xl align-middle">•</span>
            <span>If you request to edit your information after B/L confirmation, an additional fee of USD 100 will be charged.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400 text-xl align-middle">•</span>
            <span>After B/L confirmation, the document delivery address cannot be changed.</span>
          </div>
        </div>
      </div>


           <hr />

          <div className="">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Shipping Information
            </h2>


            <div className="">
              {[
                { label: "Vessel Name", value: "GALLOWAY" },
                { label: "Vessel Type", value: "Consolidation" },
                { label: "Voy No", value: "551E" },
                { label: "Line", value: "Hapag-Lloyd" },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-2 py-1 items-center">
                  <div className="text-gray-600 font-medium">{item.label}</div>
                  <div className="text-gray-900 font-medium">: {item.value}</div>
                </div>
              ))}
            </div>
          </div>


          <hr />

          <div className="">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Shipping Schedule
            </h2>

            <div className="">
              <div className="divide-y">
                <div  className="grid grid-cols-2 md:grid-cols-3  gap-2 ">
                {[
                  { label: "Estimated Time of Departure (ETD)", value: "2025.12.17" },
                  { label: "Country of Loading", value: "S.Korea" },
                  { label: "Port of Loading", value: "Incheon" },
                  { label: "Estimated Time of Arrival (ETA)", value: "S.Korea" },
                  { label: "Country of Destination", value: "Ghana" },
                  { label: "Port of Discharge", value: "Tema" },
                ].map((item, idx) => (
                    <div key={idx} className="text-gray-600 font-medium">{item.label} : <br /> <span className="text-gray-400">{item.value}</span></div>
                ))}
                  </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Documents Delivery Address
            </h2>

            <div className="">
              <div className="space-y-2">
                {[
                  { label: "Courier", value: "-" },
                  { label: "Receiver Name", value: "-" },
                  { label: "Delivery Address", value: "-" },
                  { label: "Postal Code (ZIP)", value: "-" },
                  { label: "Country", value: "-" },
                  { label: "TEL", value: "-" },
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-2 items-center">
                    <div className="text-gray-600 font-medium">{item.label}</div>
                    <div className="text-gray-400">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6  text-red-600 space-y-2">
              <p>*We can send the documents to a nearby city, if the given address is not valid for DHL delivery.</p>
              <p>*If you change the destination country after the documents have been sent to the requested address, an additional fee of USD 200 will apply.</p>
            </div>
          </div>

          <hr />



        
             <div className="">
               <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Tracking Information
            </h2>
  <p className=" text-gray-900 mb-4 text-lg font-medium">
         Documents Delivery Tracking
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-16 mb-4">
                {[
                  { label: "Courier", value: "-" },
                  { label: "Tracking No.", value: "-" }
                  
                ].map((item, idx) => (
                  <div key={idx} className="items-center">
                    <div className="text-gray-600 font-medium">{item.label}</div>
                    <div className="text-gray-400">{item.value}</div>
                  </div>
                ))}
              </div>

      <div className="relative max-w-7xl mx-auto px-6 flex">

        {/* Left Arrow */}
        <button className="text-primary hover:text-yellow-300 self-start absolute left-0 z-10">
          <ChevronLeft size={28} />
        </button>

        {/* Tabs */}
        <Tabs defaultValue="tracking" className="w-full">
          <TabsList
            className="
              w-full bg-transparent
              flex justify-between gap-12
              border-b border-gray-700
              rounded-none p-0
              overflow-y-hidden
              overflow-x-auto
              ">
            <TabsTrigger value="shipping" className="relative
    text-gray-500
    text-base
    font-medium
    px-1
    pb-4
    bg-transparent
    rounded-none
    transition-colors
    border-b-2
    border-b-transparent
    -mb-0.5
    z-20
    data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-primary" >
              Shipping Information
            </TabsTrigger>

            <TabsTrigger value="documents" className="relative
    text-gray-500
    text-base
    font-medium
    px-1
    pb-4
    bg-transparent
    rounded-none
    transition-colors
    border-b-2
    border-b-transparent
    -mb-0.5
    z-20
    data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-primary" >
              Documents Delivery Address
            </TabsTrigger>

            <TabsTrigger value="tracking" className="relative
    text-gray-500
    text-base
    font-medium
    px-1
    pb-4
    bg-transparent
    rounded-none
    transition-colors
    border-b-2
    border-b-transparent
    -mb-0.5
    z-20
    data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-primary">
              Tracking Information
            </TabsTrigger>

            <TabsTrigger value="review" className="relative
    text-gray-500
    text-base
    font-medium
    px-1
    pb-4
    bg-transparent
    rounded-none
    transition-colors
    border-b-2
    border-b-transparent
    -mb-0.5
    z-20
    data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-primary" >
              Write a Review
            </TabsTrigger>

            <TabsTrigger value="claim" className="relative
    text-gray-500
    text-base
    font-medium
    px-1
    pb-4
    bg-transparent
    rounded-none
    transition-colors
    border-b-2
    border-b-transparent
    -mb-0.5
    z-20
    data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-primary" >
              Claim Center
            </TabsTrigger>
          </TabsList>

          {/* Content placeholders */}
          <TabsContent value="shipping">
            <div className="py-10 text-center text-gray-500 italic"> 
              We are very sorry. There's no available data at the moment.
            </div>
          </TabsContent>
          <TabsContent value="documents">
            <div className="py-10 text-center text-gray-500 italic">
              We are very sorry. There's no available data at the moment.
            </div>
          </TabsContent>
          <TabsContent value="tracking">
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-16 mb-4 py-5 ">
                {[
                  { label: "Courier", value: "-" },
                  { label: "Tracking No.", value: "-" }
                  
                ].map((item, idx) => (
                  <div key={idx} className="items-center">
                    <div className="text-gray-600 font-medium">{item.label}</div>
                    <div className="text-gray-400">{item.value}</div>
                  </div>
                ))}
              </div>
          </TabsContent>
          <TabsContent value="review">
            <div className="py-10 text-center text-gray-500 italic">
              We are very sorry. There's no available data at the moment.
            </div>
          </TabsContent>
          <TabsContent value="claim">
            <div className="py-10 text-center text-gray-500 italic">
              We are very sorry. There's no available data at the moment.
            </div>
          </TabsContent>
        </Tabs>

        {/* Right Arrow */}
        <button className="text-primary hover:text-yellow-300 self-start absolute right-0 z-10">
          <ChevronRight size={28} />
        </button>
      </div>
            </div>
              

                <hr />

              <div className="space-y-6">

                <div className="bg-black/90 rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">

                  <div className="text-white max-w-xl">
                    <h2 className="text-2xl font-semibold mb-2">
                      Write a review and get a coupon
                    </h2>
                    <p className="text-gray-300 mb-4">
                      Did you receive your car? Tell us about your experience and share your photo.
                      Your reviews and feedback of using AutoChina will be a great help to improve our service.
                    </p>

                    <div className="flex items-center gap-4">
                      <button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 py-2 rounded-md transition">
                        Write
                      </button>
                      <a href="#" className="underline text-gray-300 hover:text-white">
                        Check how to get a coupon
                      </a>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <div className="relative">
                      <img
                        src="Car-check-icon.png"
                        alt="Car illustration"
                        className="w-36"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Claim Center
                  </h2>

                  <p className="text-gray-600 mb-2">
                    The vehicle does not work? Key information does not match with the one described? Do not worry. <br />
                    We will mediate the claim with the seller and help you make your business run again.
                  </p>

                  <p className="text-red-500">
                    *You should file a claim to Autowini within 30 days after the arrival of the vehicle at the destination port.
                    Please check this booking's ETA
                  </p>
                </div>

              </div>



      
    </div>
  )
}

function BookingTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-medium mb-2">My Booking Request</h2>
        <p className="text-gray-500">
          The Buy it Safely is the most safe and convenient way for the deal through AutoChina.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Input readOnly value="Total" className="bg-gray-50 border-gray-200 h-12" />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium">USD 0</span>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-black font-medium h-12 px-8">
          Add Money to My Wallet
        </Button>
      </div>

      <div className="space-y-6">
        <div className="flex gap-2">
          <Button variant="default" className="bg-primary text-black">
            All
          </Button>
          <Button variant="outline">Money-in</Button>
          <Button variant="outline">Money-out</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border rounded-md overflow-hidden bg-blue-50/30">
          <div className="py-4 text-center border-b-2 border-primary  bg-transparent  text-primary font-medium">All 0</div>
          <div className="py-4 text-center hover:bg-white/50 bg-transparent cursor-pointer">Waiting 0</div>
          <div className="py-4 text-center hover:bg-white/50 bg-transparent cursor-pointer">Booked 0</div>
          <div className="py-4 text-center hover:bg-white/50 bg-transparent cursor-pointer">Canceled 0</div>
        </div>

        <div className="flex flex-wrap gap-2 justify-between">
          <div className="border border-gray-200 rounded px-4 py-2  text-gray-500 flex items-center gap-2">
            Latest update date <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex flex-1 max-w-xl gap-2">
            <Input placeholder="Item No/Model" />
            <Button className="bg-primary hover:bg-primary/90 text-black font-medium px-8">SEARCH</Button>
            <Button variant="secondary" className="bg-black text-white hover:bg-black/90 px-8">
              RESET
            </Button>
          </div>
        </div>

        <div className="text-right text-xs text-gray-400">
          Search Result: <span className="text-red-500">0</span>
        </div>
      </div>
    </div>
  )
}

function PartsCartTab() {
  const steps = [
    { label: "My Parts Cart", icon: ShoppingCart },
    { label: "Checkout", icon: BookUser },
    { label: "Payment", icon: CircleDollarSign },
    { label: "Complete", icon: ClipboardCheck },
  ]

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-medium mb-2">My Parts Cart</h2>
        <p className="text-gray-500">
          Currently in your shopping cart. Click "Buy All" to confirm your purchase.
        </p>
      </div>

      <div className="flex items-start justify-around max-w-4xl mx-auto py-4 md:py-12">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-4 text-center">
              <div
                className="max-sm:w-10 max-sm:h-10 max-md:w-14 max-md:h-14 w-20 h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center bg-gray-100">
                <step.icon className="text-primary max-md:w-6 max-md:h-6" size={40} />
              </div>
              <span className=" font-medium text-black max-md:text-xs">{step.label}</span>
            </div>
            {i < steps.length - 1 && <ChevronRight className="w-8 h-8 text-gray-200 mx-auto self-start mt-8 max-md:mt-2" />}
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-3xl font-medium">Your Cart is Empty</h3>
        <p className="text-lg font-medium text-gray-600">Try AutoChina Trade Parts Shop!</p>
        <p className=" text-gray-500 max-w-md mx-auto italic">
          By sourcing directly from China Parts Manufacturers, we guarantee best prices and fast deliveries!
        </p>
      </div>
    </div>
  )
}

function PartsOrderTab() {
  const steps = [
    { label: "Place an Order & Payment", icon: ShoppingCart },
    { label: "Shipping Process", icon: Package },
    { label: "Track Your Shipment", icon: Truck },
    { label: "Complete", icon: Package },
  ]

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-medium mb-2">My Parts Order</h2>
        <p className="text-gray-500">
          "Buy it Now!" is AutoChina's Automotive parts & accessories Express service.
        </p>
      </div>

            <div className="flex items-start justify-around max-w-4xl mx-auto py-4 md:py-12">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-4 text-center">
              <div
                className="max-sm:w-10 max-sm:h-10 max-md:w-14 max-md:h-14 w-20 h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center bg-gray-100">
                <step.icon className="text-primary max-md:w-6 max-md:h-6" size={40} />
              </div>
              <span className=" font-medium text-black max-md:text-xs">{step.label}</span>
            </div>
            {i < steps.length - 1 && <ChevronRight className="w-8 h-8 text-gray-200 mx-auto self-start mt-8 max-md:mt-2" />}
          </div>
        ))}
      </div>

      <div className="border rounded-lg overflow-x-auto overflow-y-hidden">
        <div className="grid grid-cols-3 bg-slate-50 p-4 font-medium  text-gray-700 text-center">
          <div>Order Date</div>
          <div>Item</div>
          <div>Status</div>
        </div>
        <div className="h-40 flex items-center justify-center text-gray-300  italic">No order history found</div>
      </div>
    </div>
  )
}

function MembershipTab() {
  const steps = [
    { label: "Place an Order & Payment", icon: ShoppingCart },
    { label: "Shipping Process", icon: Package },
    { label: "Track Your Shipment", icon: Truck },
    { label: "Complete", icon: Package },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-medium mb-2">My Membership</h2>
        <p className="text-gray-500">Join our business membership and get all privileges</p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 space-y-6">
        {/* Membership Header */}
        <div className="flex max-sm:flex-col max-sm:items-start flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
          <div className="inline-flex gap-4 sm:border-r sm:border-r-gray-200 pr-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-2xl">
                    <Image src="/My-Membership.svg" alt="" width="65" height="65"/>
                </span>
            </div>
            <div className="flex-auto">
                <p className="text-gray-500">My Membership <CircleQuestionMark size="16" className="inline"/></p>
                <h3 className="text-2xl font-semibold">Basic</h3>
            </div>
          </div>
          <div className="flex-auto">
            <p className="text-gray-500">My Purchase Record</p>
            <h3 className="text-2xl font-semibold">0 Units <ChevronRight  size="16" className="inline" /></h3>
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-medium mb-6">My Benefits</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-2xl mt-1">
                <BsShieldFillCheck size={40} className="text-amber-400" /> 
              </div>
              <div className="flex-1">
                <p className="font-medium text-xl">VIN Check</p>
                <p className="text-gray-500">Provide details about a car's accident history, special usage record, and more.</p>
              </div>
              <span className="text-green-500">
                <FaCircleCheck size="30" />
              </span>
            </div>

            <div className="flex items-start gap-4 py-4 border-y border-gray-200">
              <div className="text-2xl mt-1">
                <FaCalendarDays size={40} className="text-amber-400" /> 
              </div>
              <div className="flex-1">
                <p className="font-medium text-xl">Booking Request</p>
                <p className="text-gray-500">Request a booking you want to buy. Autowin staff will contact you and confirm your booking</p>
              </div>
              <span className="text-right whitespace-nowrap font-medium">10/Day</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl mt-1">
                <RiDiscountPercentFill size={40} className="text-amber-400" /> 
              </div>
              <div className="flex-1">
                <p className="font-medium text-xl">Inspection Discount</p>
                <p className="text-gray-500">Get a 50% discount on inspection service and check the vehicle condition before your purchase.</p>
              </div>
              <span className="text-right whitespace-nowrap font-medium">USD 99/Unit</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-400 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-yellow-500 transition">
        <div className="flex items-center gap-3">
          <span className="text-2xl"><FaAward /> </span>
          <p className="font-semibold">Learn more about the membership</p>
        </div>
        <ChevronRight className="w-5 h-5" />
      </div>
    </div>
  )
}
