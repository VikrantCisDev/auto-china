"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  FiMoreHorizontal,
  FiEye,
  FiEdit,
  FiXCircle,
  FiTrash2,
} from "react-icons/fi"
import { LuListFilter } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// -----
import { BiDollarCircle } from "react-icons/bi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineTag } from "react-icons/ai";
import Link from "next/link";




const stockListIcon = ()=>(<><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.8125 4.6875H4.6875V6.5625H2.8125V4.6875ZM0.9375 2.8125V4.6875V6.5625V8.4375H2.8125H4.6875H6.5625V6.5625V4.6875V2.8125H4.6875H2.8125H0.9375ZM10.3125 4.6875H9.375V6.5625H10.3125H29.0625H30V4.6875H29.0625H10.3125ZM10.3125 14.0625H9.375V15.9375H10.3125H29.0625H30V14.0625H29.0625H10.3125ZM10.3125 23.4375H9.375V25.3125H10.3125H29.0625H30V23.4375H29.0625H10.3125ZM4.6875 14.0625V15.9375H2.8125V14.0625H4.6875ZM2.8125 12.1875H0.9375V14.0625V15.9375V17.8125H2.8125H4.6875H6.5625V15.9375V14.0625V12.1875H4.6875H2.8125ZM2.8125 23.4375H4.6875V25.3125H2.8125V23.4375ZM0.9375 21.5625V23.4375V25.3125V27.1875H2.8125H4.6875H6.5625V25.3125V23.4375V21.5625H4.6875H2.8125H0.9375Z" fill="#FFB300"/>
</svg></>)
const InventoryIcon = ()=>(<><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_804_2294)">
<path d="M25.4337 18.4767L22.8504 21.2498C22.5166 20.1764 21.5139 19.3947 20.332 19.3947H16.2132C15.6448 19.3947 15.0966 19.1879 14.6698 18.8123C12.3746 16.7925 8.92453 16.7747 6.60762 18.7564C6.12984 18.08 5.34252 17.6369 4.45312 17.6369H0.878906C0.393516 17.6369 0 18.0304 0 18.5158V29.1213C0 29.6067 0.393516 30.0002 0.878906 30.0002H4.45312C5.24244 30.0002 5.95137 29.6511 6.435 29.0997C8.29283 29.6219 10.0308 30.0002 12.4256 30.0002H20.332C22.2582 30.0002 24.0981 29.0802 25.2565 27.5358L29.4732 21.855C29.4734 21.8549 29.4735 21.8548 29.4735 21.8547C29.4739 21.8541 29.4743 21.8535 29.4747 21.853L29.4761 21.8511C29.4763 21.8508 29.4765 21.8505 29.4766 21.8503C29.8189 21.392 30 20.847 30 20.2736C30 17.8797 27.055 16.7363 25.4337 18.4767ZM5.33203 27.3635C5.33203 27.8481 4.93775 28.2424 4.45312 28.2424H1.75781V19.3947H4.45312C4.93775 19.3947 5.33203 19.789 5.33203 20.2736V27.3635ZM28.0673 20.7999C28.0669 20.8005 28.0665 20.8011 28.0661 20.8017C28.0656 20.8022 28.0651 20.8028 28.0646 20.8034L23.8477 26.4846C23.0221 27.5852 21.7079 28.2424 20.332 28.2424H12.4256C10.3646 28.2424 8.74506 27.9264 7.07572 27.4572C7.07924 27.3564 7.07812 27.8974 7.07812 20.6709L7.70232 20.132C9.35736 18.6755 11.8535 18.6755 13.5087 20.132C14.2566 20.7901 15.217 21.1525 16.2132 21.1525H20.332C20.8167 21.1525 21.2109 21.5468 21.2109 22.0314C21.2109 22.5161 20.8167 22.9103 20.332 22.9103H14.027C13.5416 22.9103 13.1481 23.3039 13.1481 23.7892C13.1481 24.2746 13.5416 24.6681 14.027 24.6681H20.9211C21.6503 24.6681 22.3535 24.3622 22.8505 23.8286L26.7199 19.6748C26.8882 19.4941 27.1167 19.3947 27.3633 19.3947C28.0873 19.3947 28.4985 20.225 28.0673 20.7999Z" fill="#FFB300"/>
<path d="M20.3321 8.78906C19.8475 8.78906 19.4532 8.39478 19.4532 7.91016C19.4532 7.55613 19.6639 7.2382 19.9898 7.1001C20.3834 6.93346 20.8545 7.07566 21.2824 7.49027C21.6311 7.82801 22.1873 7.81922 22.5252 7.47064C22.8629 7.12201 22.8541 6.56561 22.5055 6.22787C22.1087 5.84344 21.6676 5.57174 21.211 5.4184V4.39453C21.211 3.90914 20.8175 3.51562 20.3321 3.51562C19.8467 3.51562 19.4532 3.90914 19.4532 4.39453V5.42408C18.3766 5.80711 17.6954 6.80988 17.6954 7.91016C17.6954 9.36404 18.8782 10.5469 20.3321 10.5469C20.8167 10.5469 21.211 10.9412 21.211 11.4258C21.211 11.7941 20.9787 12.1262 20.6329 12.2521C20.1817 12.4165 19.6559 12.1936 19.1912 11.6402C18.879 11.2685 18.3246 11.2202 17.9528 11.5324C17.5811 11.8446 17.5329 12.399 17.8451 12.7707C18.3202 13.3364 18.8733 13.7244 19.4532 13.9196V14.9414C19.4532 15.4268 19.8467 15.8203 20.3321 15.8203C20.8175 15.8203 21.211 15.4268 21.211 14.9414V13.9117C21.2188 13.909 21.2267 13.9066 21.2345 13.9038C22.2718 13.526 22.9688 12.5301 22.9688 11.4258C22.9688 9.97189 21.786 8.78906 20.3321 8.78906Z" fill="#FFB300"/>
<path d="M20.332 0C15.0011 0 10.6641 4.33705 10.6641 9.66797C10.6641 14.9989 15.0011 19.3359 20.332 19.3359C25.6629 19.3359 30 14.9989 30 9.66797C30 4.33705 25.6629 0 20.332 0ZM20.332 17.5781C15.9704 17.5781 12.4219 14.0296 12.4219 9.66797C12.4219 5.30631 15.9704 1.75781 20.332 1.75781C24.6937 1.75781 28.2422 5.30631 28.2422 9.66797C28.2422 14.0296 24.6937 17.5781 20.332 17.5781Z" fill="#FFB300"/>
</g>
</svg></>)
const CarsAddedIcon = ()=>(<><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.35976 7.75814C3.93676 7.38896 3.87776 6.73009 4.23076 6.28561C6.90079 2.92641 10.8258 1 14.9999 1C17.8969 1 20.666 1.93497 23 3.64281V2.04583C23 1.46853 23.447 1 24 1C24.553 1 25 1.46853 25 2.04583V6.22914C25 6.80644 24.553 7.27497 24 7.27497H19.9999C19.4469 7.27497 18.9999 6.80644 18.9999 6.22914C18.9999 5.65184 19.4469 5.18331 19.9999 5.18331H21.626C19.6749 3.82687 17.3869 3.09166 14.9999 3.09166C11.4228 3.09166 8.05781 4.74302 5.76878 7.62323C5.41778 8.06457 4.78777 8.12941 4.35976 7.75814Z" fill="#FFB300"/>
<path d="M15.0004 29C12.1033 29 9.33419 28.065 7.00009 26.3572V27.9542C7.00009 28.5315 6.55307 29 6.00004 29C5.44702 29 5 28.5315 5 27.9542V24.1924C5 24.1903 5 24.1882 5 24.1861C5.032 24.0805 4.79399 22.7251 6.00004 22.7251H10.0002C10.5532 22.7251 11.0003 23.1936 11.0003 23.7709C11.0003 24.3482 10.5532 24.8167 10.0002 24.8167H8.37415C10.3252 26.1732 12.6133 26.9084 15.0004 26.9084C18.5776 26.9084 21.9427 25.257 24.2318 22.3769C24.5839 21.9345 25.2119 21.8717 25.6399 22.2409C26.0639 22.6101 26.1219 23.2689 25.7689 23.7134C23.0998 27.0736 19.1746 29 15.0004 29Z" fill="#FFB300"/>
<path d="M10 20V18.5C10 16.984 9.242 15.648 8.09 14.832C8.65 14.212 9 13.399 9 12.5C9 10.57 7.43 9 5.5 9C3.57 9 2 10.57 2 12.5C2 13.399 2.35 14.212 2.91 14.832C1.758 15.648 1 16.984 1 18.5V20C1 20.552 1.447 21 2 21H9C9.553 21 10 20.552 10 20ZM5.5 11C6.327 11 7 11.673 7 12.5C7 13.327 6.327 14 5.5 14C4.673 14 4 13.327 4 12.5C4 11.673 4.673 11 5.5 11ZM8 19H3V18.5C3 17.122 4.121 16 5.5 16C6.879 16 8 17.122 8 18.5V19Z" fill="#FFB300"/>
<path d="M27.09 14.832C27.65 14.212 28 13.399 28 12.5C28 10.57 26.43 9 24.5 9C22.57 9 21 10.57 21 12.5C21 13.399 21.35 14.212 21.91 14.832C20.758 15.648 20 16.984 20 18.5V20C20 20.552 20.447 21 21 21H28C28.553 21 29 20.552 29 20V18.5C29 16.984 28.242 15.648 27.09 14.832ZM24.5 11C25.327 11 26 11.673 26 12.5C26 13.327 25.327 14 24.5 14C23.673 14 23 13.327 23 12.5C23 11.673 23.673 11 24.5 11ZM27 19H22V18.5C22 17.122 23.121 16 24.5 16C25.879 16 27 17.122 27 18.5V19Z" fill="#FFB300"/>
</svg></>)
const CarsSoldIcon = ()=>(<><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.9443 8.27955L27.9221 8.24117C27.8913 8.17736 27.8558 8.11625 27.8162 8.05818L23.6426 0.84258C23.342 0.322852 22.7823 0 22.1819 0H7.81837C7.21702 0 6.65687 0.323614 6.35634 0.844748L2.11473 8.20332C2.07652 8.26965 2.04898 8.33902 2.02953 8.40951C1.96982 8.5707 1.93701 8.7449 1.93701 8.92666V27.9325C1.93701 29.0725 2.86449 29.9999 4.0045 29.9999H25.995C27.135 29.9999 28.0625 29.0725 28.0625 27.9325V8.85699C28.0625 8.8315 28.0617 8.80619 28.0604 8.78099C28.0723 8.61183 28.0357 8.4374 27.9443 8.27955ZM15.9091 1.75846H22.141L25.4241 7.43462H15.9091V1.75846ZM7.85933 1.75846H14.1506V7.43462H4.58745L7.85933 1.75846ZM26.304 27.9325C26.304 28.1029 26.1654 28.2415 25.995 28.2415H4.0045C3.83411 28.2415 3.69547 28.1029 3.69547 27.9325V9.19308H26.304V27.9325Z" fill="#FFB300"/>
<path d="M18.9909 15.8219C18.6476 15.4786 18.0909 15.4786 17.7475 15.8219L13.8216 19.7478L12.312 18.2382C11.9687 17.8949 11.4119 17.8949 11.0686 18.2382C10.7252 18.5815 10.7252 19.1383 11.0686 19.4816L13.2 21.6129C13.3716 21.7846 13.5967 21.8705 13.8216 21.8705C14.0466 21.8705 14.2717 21.7846 14.4433 21.6129L18.9909 17.0654C19.3343 16.722 19.3343 16.1653 18.9909 15.8219Z" fill="#FFB300"/>
</svg></>)

const stats = [
  { title: "Total Cars In Stock", value: "2,450", icon: stockListIcon },
  { title: "Total Inventory Value", value: "$500.00", icon: InventoryIcon },
  { title: "Cars Added This Month", value: "350", icon: CarsAddedIcon },
  { title: "Cars Sold This Month", value: "1,550", icon: CarsSoldIcon },
];

const inventory = [
  {
    id: 1,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Available",
    carImage: "/redCar.png"
  },
  {
    id: 2,
    car: "2020 BMW X5",
    year: "2022",
    price: "$250,000",
    status: "Sold",
    carImage: "/whiteCar.png"
  },
  {
    id: 3,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Sold",
    carImage: "/blueCar.png"
  },
  {
    id: 4,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Sold",
    carImage: "/blueCar.png"
  },
  {
    id: 5,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Accepted",
    carImage: "/whiteCar.png"
  },
  {
    id: 6,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Accepted",
    carImage: "/whiteCar.png"
  },
  {
    id: 7,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Accepted",
    carImage: "/whiteCar.png"
  },
  {
    id: 8,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Accepted",
    carImage: "/whiteCar.png"
  },
  {
    id: 9,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Accepted",
    carImage: "/whiteCar.png"
  },
  {
    id: 10,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Accepted",
    carImage: "/whiteCar.png"
  },
  {
    id: 11,
    car: "2020 BMW X5",
    year: "2023",
    price: "$250,000",
    status: "Accepted",
    carImage: "/whiteCar.png"
  }
];


export default function DashboardPage() {
  return (
    <div className=" space-y-6">
      <h1 className="text-2xl font-semibold">Dealership Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.title} className="rounded-md border-0 shadow-none">
            <CardContent className="flex items-center justify-between px-4">
              <div>
                <p className="2xl:text-lg  ">{s.title}</p>
                <p className="2xl:text-3xl font-bold lg:mt-3 mt-2">{s.value}</p>
              </div>
              <div className="w-11.25 h-11.25 flex items-center justify-center bg-[#FFF7E4] text-[#FFB300] rounded-lg">
                <s.icon />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Inventory Table */}
        <Card className="xl:col-span-2 rounded-md border-0 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.05)] pb-0 gap-4">
          <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="text-xl">Full Inventory</CardTitle>
            <div className="flex flex-wrap gap-2">
              <Button className="bg-[#FFB300] hover:bg-yellow-500 text-black py-3 px-4 text-base lg:h-11.25">
                <Link href="/new-car-listing">Add Car to Inventory</Link>
              </Button>
              <div className="relative">
                <Input
                  className="pr-9 w-64 py-3 lg:h-11.25 border-[#EEEEEE] bg-[#F9FAFB] placeholder:text-[#555555] text-[#555555] text-base"
                  placeholder="Search by Make, Model"
                />
                <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555]" size={20} />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="border-[#EEEEEE] border bg-[#F9FAFB] hover:bg-gray-100 text-[#555555] p-3 lg:h-11.25 text-base font-normal">
                    Sort <LuListFilter size={22}/>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>Option 1</DropdownMenuLabel>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="overflow-x-auto px-0">
            <table className="w-full text-sm">
              <thead className="bg-[#F6F9FF]">
                <tr>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">Car</th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">Year</th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">Price</th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">Status</th>
                  <th className="text-lg font-normal text-black p-3 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} className="border-b last:border-0 text-center text-[#555555] md:text-base text-sm">
                    <td className="p-3 px-6 border-r">
                      <div className="flex items-center sm:flex-row flex-col justify-center lg:gap-4 gap-3">
                        <div className="w-14 h-7">
                          <img src={item.carImage} alt={item.carImage} className="w-full h-full object-contain" />
                        </div>
                        <span className=" whitespace-nowrap">{item.car}</span>
                      </div>
                    </td>
                    <td className="p-3 px-6 border-r">{item.year}</td>
                    <td className="p-3 px-6 border-r">{item.price}</td>
                    <td className="p-3 px-6 border-r">
                      <span
                        className={
                          // item.status === "Available"
                          //   ? "text-green-500" :
                             item.status === "Sold"
                            ? "text-[#D30F0F] "
                            : "text-[#FFB300]"
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 px-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild className="mx-auto">
                          <FiMoreHorizontal className="cursor-pointer" size={22} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-fit px-0" align="start">
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300] ">
                            <FiEye size={16} className="group-hover:text-[#FFB300]"/>
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <FiEdit size={16} className="group-hover:text-[#FFB300]" />
                            Edit Listing
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <BiDollarCircle size={16} className="group-hover:text-[#FFB300]" />
                            Edit Price
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <IoCheckmarkCircleOutline size={16} className="group-hover:text-[#FFB300]" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <FiXCircle size={16} className="group-hover:text-[#FFB300]" />
                            Reject
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <AiOutlineTag size={16} className="group-hover:text-[#FFB300]" />
                            Mark as Sold
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <FiTrash2 size={16} className="group-hover:text-[#FFB300]" />
                            Delete Listing
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="space-y-6 xl:flex xl:flex-col">
          {/* Recent Activity */}
          <Card className="rounded-md border-0 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.05)]">
            <CardHeader>
              <CardTitle className="text-xl font-medium">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Ferrari Aventador", status: "Added", date: "26/11/2024" },
                { name: "Ferrari Aventador", status: "Sold", date: "26/11/2024" },
                { name: "Porsche 678 GTT", status: "Sold", date: "26/11/2024" },
                { name: "Lamborghini Aventador", status: "Added", date: "26/11/2024" },
              ].map((a, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{a.name}</p>
                    <p className="text-[#555]">{a.date}</p>
                  </div>
                  <Badge
                    className={`w-18 rounded h-7 text-base font-normal
                      ${a.status === "Added"
                        ? "bg-[#EDFFE4] text-[#49CA04]"
                        : "bg-[#FFD5D5] text-[#D30F0F]"}
                    `}
                  >
                    {a.status}
                  </Badge>
                </div>
              ))}
              <Button variant="link" className="text-[#FFB300] text-lg font-medium px-0! underline uppercase">
                View All Activity <LiaLongArrowAltRightSolid className="w-7! h-7!"/>
              </Button>
            </CardContent>
          </Card>

          {/* Add Listings */}
          <Card className="rounded-md border-0 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.05)] gap-2 xl:h-full">
            <CardHeader>
              <CardTitle className="text-xl font-medium">Add Listings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-base text-[#555555]">
                Manage cars available for sale. Select a car from inventory to
                create a new listing.
              </p>
              <Select>
                <SelectTrigger className="w-full border-[#EEEEEE] bg-[#F9FAFB] placeholder:text-[#555555] text-[#555555] text-base h-12!">
                  <SelectValue placeholder="Select a car from Inventory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Fruits</SelectLabel> */}
                    <SelectItem value="BMW_X5_1">BMW X5</SelectItem>
                    <SelectItem value="BMW_X5_2">BMW X5</SelectItem>
                    <SelectItem value="BMW_X5_3">BMW X5</SelectItem>
                    <SelectItem value="BMW_X5_4">BMW X5</SelectItem>
                    <SelectItem value="BMW_X5_5">BMW X5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="bg-[#FFB300] hover:bg-yellow-500 text-black py-3 px-4.5 text-base lg:h-11.25">
                Create New Listing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
