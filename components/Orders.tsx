"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react"
import { BiDollarCircle } from "react-icons/bi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineTag } from "react-icons/ai";
import Link from "next/link";


const inventory = [
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "John Doe",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Pending",
    carImage: "/redCar.png"
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "John Doe",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Cancelled",
    carImage: "/whiteCar.png"
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/blueCar.png"
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Cancelled",
    carImage: "/blueCar.png"
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/whiteCar.png"
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/whiteCar.png"
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/whiteCar.png"
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/whiteCar.png"
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Cancelled",
    carImage: "/blueCar.png"
  }
];




export default function Orders() {
  return (
    <div className=" space-y-6">
      <div className="grid md:grid-cols-2">
      <h1 className="text-2xl font-semibold">Orders</h1>
      <div className="flex items-center justify-end"></div>
      </div>

      {/* Main Content */}
      <div className="">
        {/* Inventory Table */}
        <Card className="rounded-md border-0 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.05)] pb-0 gap-4">
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
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">Order ID</th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">Car</th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">Buyer</th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">Seller</th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">Order Date</th>
                  <th className="text-lg font-normal text-black p-3 px-6">Payment Status</th>
                  <th className="text-lg font-normal text-black p-3 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item,idx) => (
                  <tr key={idx} className="border-b last:border-0 text-center text-[#555555] md:text-base text-sm">
                    <td className="p-3 px-6 border-r">
                        {item.orderId}
                    </td>
                    <td className="p-3 pr-6 border-r">
                      <div className="flex items-center sm:flex-row flex-col justify-center lg:gap-4 gap-3">
                        <div className="w-14 h-7">
                          <img src={item.carImage} alt={item.carImage} className="w-full h-full object-contain" />
                        </div>
                        <span className=" whitespace-nowrap">{item.car}</span>
                      </div>
                    </td>
                    <td className="p-3 px-6 border-r">{item.buyer}</td>
                    <td className="p-3 px-6 border-r">{item.seller}</td>
                    <td className="p-3 px-6 border-r">{item.orderDate}</td>
                    <td className="p-3 px-6 border-r">
                      <span
                        className={
                          (item.paymentStatus === "Pending")
                            ? "text-blue-600" 
                            : (item.paymentStatus === "Cancelled")
                            ? "text-[#D30F0F] "
                            : "text-[#FFB300]"
                        }
                      >
                        {item.paymentStatus}
                      </span>
                    </td>
                    <td className="p-3 px-6 ">
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
      </div>
    </div>
  );
}
