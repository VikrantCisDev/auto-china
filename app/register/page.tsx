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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { FaAngleRight, FaAward } from "react-icons/fa"
import { BsShieldFillCheck } from "react-icons/bs";
import { FaCalendarDays, FaCircleCheck } from "react-icons/fa6"
import { RiDiscountPercentFill } from "react-icons/ri";
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


import { useRouter } from "next/navigation"


type Tab = "SignUp" | "SignIn" | "SearchUsername" | "SearchPassword"

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState<Tab>("SignUp")
  
  const router = useRouter()

  const menuItems = [
    { id: "SignUp", label: "Sign up", icon: CreditCard },
    { id: "SignIn", label: "Sign In", icon: Wallet },
    { id: "SearchUsername", label: "Search Username", icon: Calendar },
    { id: "SearchPassword", label: "Search Password", icon: Package }
  ]

   const handleTabClick = (id: Tab) => {
    if (id === "SignIn") {
      router.push("/login") // ✅ redirect
      return
    }
    setActiveTab(id)
  }
    

  return (<>
      <Header />
        <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
              {/* Sidebar Navigation */}
              <aside className="w-full lg:w-64 bg-white border border-gray-200 rounded-lg overflow-hidden shrink-0 align-top">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    // onClick={() => handleTabClick(item.id as Tab)}
                      // key={item.id}
                  onClick={() => handleTabClick(item.id as Tab)}
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
              <div className="flex-1">
                {activeTab === "SignUp" && <SignUp />}
                {/* {activeTab === "SignIn" && <SignIn />} */}
                {activeTab === "SearchUsername" && <SearchUsername />}
                {activeTab === "SearchPassword" && <SearchPassword />}
                
              </div>
            </div>
        </div>
        </section>
      <Footer />
  </>)
}

function SignUp() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-medium mb-2">Sign up for free</h2>
        <p className="mb-2">Joinfree at AutoChinaTrade, the No.1 Trading Platform for China Used Cars.</p>
        <hr className="border-yellow-500 border-t-2" />
        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            Username
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
              <Input readOnly value="" className="bg-gray-50 border-gray-200 h-12" />
              <p className="text-sm">Please enter a valid username again. (Do not include 4 same letters consecutively, use of special characters and restricted words are prohibited.)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            Password
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
            <Input readOnly value="" className="bg-gray-50 border-gray-200 h-12" />
              <p className="text-sm">6~16 characters with letters(a-z), numbers, and special letters.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            Confirm Password
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
            <Input readOnly value="" className="bg-gray-50 border-gray-200 h-12" />
              <p className="text-sm">Please enter your password again.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            Full Name
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
            <Input readOnly value="" className="bg-gray-50 border-gray-200 h-12" />
              <p className="text-sm">Please enter English characters only.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            E-mail
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
            <Input readOnly value="" className="bg-gray-50 border-gray-200 h-12" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            Country
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
              <Select>
                <SelectTrigger className="w-full !h-[auto] bg-gray-50 py-3">
                  <SelectValue placeholder="Theme"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Country">Country</SelectItem>
                  <SelectItem value="Country 1">Country 1</SelectItem>
                  <SelectItem value="Count 2ry">Country 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            Mobile
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
              <Input readOnly value="" className="bg-gray-50 border-gray-200 h-12" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            City
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
              <Input readOnly value="" className="bg-gray-50 border-gray-200 h-12" />
              <p className="text-sm">Please fill in English.</p>
            </div>
          </div>
        </div>
      </div>
        
    <div className="space-y-6 border-t border-gray-200 pt-8">

            <div className="flex flex-wrap gap-3 pt-2">
        <button className="px-6 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
          Term of use
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
          Privacy Policy
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
          Marketing Use Policy
        </button>
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-gray-400 data-[state=checked]:border-primary data-[state=checked]:bg-primary" />
            <Label htmlFor="remember" className="font-medium text-gray-600">
              I agree to all the terms and conditions.
            </Label>
          </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button className="px-8 py-3 bg-primary hover:bg-yellow-500 text-black font-bold rounded transition-colors">
          SUBMIT
        </button>
      </div>


    </div>


     
     


    </div>
  )
}
function SignIn() {
// const router = useRouter()

//   useEffect(() => {
//     if (activeTab === "SignIn") {
//       router.push("/sign-in")
//     }
//   }, [activeTab])


  return (<>
    
  </>)
}
function SearchUsername() {
  return (
        <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-medium mb-2">Sign up for free</h2>
        <p className="mb-2">Joinfree at AutoChinaTrade, the No.1 Trading Platform for China Used Cars.</p>
        <hr className="border-yellow-500 border-t-2" />
        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            Search Username
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
              <Input readOnly value="Search username here" className="bg-gray-50 border-gray-200 h-12" />
              <p className="text-sm">
                {/* Please enter a valid username again. (Do not include 4 same letters consecutively, use of special characters and restricted words are prohibited.) */}
                </p>
            </div>
          </div>
        </div>
        
      </div>
        
    <div className="space-y-6 border-t border-gray-200 pt-8">

            
            

      <div className="flex gap-3 pt-4">
        <button className="px-8 py-3 bg-primary hover:bg-yellow-500 text-black font-bold rounded transition-colors">
          SUBMIT
        </button>
      </div>


    </div>


     
     


    </div>
  )
}

function SearchPassword() {
  return (
        <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-medium mb-2">Search Password</h2>
        <p className="mb-2"></p>
        <hr className="border-yellow-500 border-t-2" />
       

        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            Password
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
            <Input readOnly value="" className="bg-gray-50 border-gray-200 h-12" />
              <p className="text-sm">6~16 characters with letters(a-z), numbers, and special letters.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-4 border-b border-b-gray-200 max-md:py-4">
          <div className="text-black font-medium md:px-8 md:w-60 md:py-4 md:bg-gray-50">
            Confirm Password
          </div>
          <div className="flex-1 md:py-4">
            <div className="relative">
            <Input readOnly value="" className="bg-gray-50 border-gray-200 h-12" />
              <p className="text-sm">Please enter your password again.</p>
            </div>
          </div>
        </div>
        
      </div>
        
    <div className="space-y-6 border-t border-gray-200 pt-8">

      <div className="flex gap-3 pt-4">
        <button className="px-8 py-3 bg-primary hover:bg-yellow-500 text-black font-bold rounded transition-colors">
          SUBMIT
        </button>
      </div>


    </div>

    </div>
  )
}
