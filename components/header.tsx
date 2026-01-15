import { Mail, Phone, MessageSquare, Search, ChevronDown, User, LogIn, Menu, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import logo from "@/public/logo.png"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu"

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b py-2 text-sm text-gray-600 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+02356 001737</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@autochina.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span>Live Chat / Chat with an Expert</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border mr-4 px-2 py-1 rounded-sm bg-white">
              <span>$ USD</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1">
              <span>En</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Link href="/" className="flex items-center gap-2">
                <Image src={logo} alt="" className="max-md:w-2xs max-sm:w-50"/>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="gap-0">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4 max-h-[calc(100vh - 120px)] overflow-auto px-4 pb-4">
                  <Link href="/" className="text-primary font-bold">
                    Home
                  </Link>
                  <Link href="/car/1">Car Listing</Link>
                  <Link href="/account">Account</Link>
                  <Link href="/resources">Resources</Link>
                  <Link href="/service">Service</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                  <hr className="my-2" />
                  <Link href="/login" className="flex items-center gap-2">
                    <LogIn className="size-4" /> Login
                  </Link>
                  <Link href="/register" className="flex items-center gap-2">
                    <User className="size-4" /> Register
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="w-full md:flex-1 md:max-w-2xl flex items-center">
            <div className="relative w-full flex">
              <Input
                placeholder="Enter a keyword or vehicle name"
                className="rounded-r-none border-r-0 focus-visible:ring-0 h-auto bg-gray-50"
              />
              <Button className="rounded-l-none bg-primary hover:bg-primary/90 text-black px-4 md:px-6 h-10">
                <span className="hidden sm:inline">SEARCH</span> <Search className="w-4 h-4 ml-0 sm:ml-2" />
              </Button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" className="text-primary rounded-sm hover:bg-primary hover:text-black border-primary bg-transparent">
              <Link href="/login">
                <LogIn className="w-4 h-4 mr-1 text-inherit" /> LOGIN
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-primary rounded-sm hover:bg-primary hover:text-black border-primary bg-transparent">
              <Link href="/register">
                <User className="w-4 h-4 mr-1 text-inherit" /> REGISTER
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="bg-yellow-500 text-black font-medium sticky top-0 z-50 hidden md:block">
        <div className="container mx-auto px-4 flex items-center">
          {/* <div className="bg-white text-black px-4 py-3 font-semibold flex items-center gap-2 cursor-pointer rounded-lg">
            <div className="flex flex-col gap-1 w-5">
              <div className="h-0.5 w-full bg-black"></div>
              <div className="h-0.5 w-full bg-black"></div>
              <div className="h-0.5 w-full bg-black"></div>
            </div>
            All Categories
          </div> */}

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"  className="text-xl bg-white text-black px-5 py-6 font-medium flex items-center gap-2 cursor-pointer rounded-lg">
                <MenuIcon className="w-10 h-10" /> All Categories</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-black/70 border-black text-white" align="start">
              {/* <DropdownMenuSeparator /> */}
              {/* <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Image src='/Cars.svg' width={20} height={20} alt=""/>
                  Cars</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Cars</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Cars</DropdownMenuItem>
                      <DropdownMenuItem>Cars</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Cars...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup> */}
              
              <DropdownMenuItem className="py-4 text-lg font-medium hover:bg-white/5 focus:bg-white/5  hover:text-white focus:text-white"><Image src='/Cars.svg' width={25} height={25} alt=""/> Cars</DropdownMenuItem>
              <DropdownMenuItem className="py-4 text-lg font-medium hover:bg-white/5 focus:bg-white/5  hover:text-white focus:text-white"><Image src='/SUVs.svg' width={25} height={25} alt=""/> SUVs</DropdownMenuItem>
              <DropdownMenuItem className="py-4 text-lg font-medium hover:bg-white/5 focus:bg-white/5  hover:text-white focus:text-white"><Image src='/PickUps.svg' width={25} height={25} alt=""/> Pick Ups</DropdownMenuItem>
              <DropdownMenuItem className="py-4 text-lg font-medium hover:bg-white/5 focus:bg-white/5  hover:text-white focus:text-white"><Image src='/Trucks.svg' width={25} height={25} alt=""/> Trucks</DropdownMenuItem>
              <DropdownMenuItem className="py-4 text-lg font-medium hover:bg-white/5 focus:bg-white/5  hover:text-white focus:text-white"><Image src='/Buses.svg' width={25} height={25} alt=""/> Buses</DropdownMenuItem>
              <DropdownMenuItem className="py-4 text-lg font-medium hover:bg-white/5 focus:bg-white/5  hover:text-white focus:text-white"><Image src='/Equipment.svg' width={25} height={25} alt=""/> Equipment</DropdownMenuItem>
              <DropdownMenuItem className="py-4 text-lg font-medium hover:bg-white/5 focus:bg-white/5  hover:text-white focus:text-white"><Image src='/PartsShop.svg' width={25} height={25} alt=""/> Parts Shop</DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>

          <nav className="flex-1 flex justify-end gap-4 lg:gap-8 xl:gap-16">
            <Link href="/" className="text-black border-b-2 border-primary py-4">
              Home
            </Link>
            <Link href="/car-listing" className="hover:text-black/70 transition-colors flex items-center gap-1 py-4">
              Car Listing <ChevronDown className="w-3 h-3" />
            </Link>
            <Link href="/account" className="hover:text-black/70 transition-colors py-4">
              Account
            </Link>
            <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <span className="hover:text-black/70 transition-colors flex items-center gap-1 py-4 cursor-pointer">
                Resources  <ChevronDown className="w-3 h-3" /></span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="" align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem>Cars</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Cars</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Cars</DropdownMenuItem>
                      <DropdownMenuItem>Cars</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Cars...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
                <DropdownMenuItem>Cars</DropdownMenuItem>
                <DropdownMenuItem>Cars</DropdownMenuItem>
                <DropdownMenuItem>Cars</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            <Link href="/service" className="hover:text-black/70 transition-colors py-4">
              Service
            </Link>
            <Link href="/about" className="hover:text-black/70 transition-colors py-4">
              About
            </Link>
            <Link href="/contact" className="hover:text-black/70 transition-colors py-4">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
