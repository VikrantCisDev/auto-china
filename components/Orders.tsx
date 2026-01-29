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
} from "react-icons/fi";
import { LuListFilter } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiDollarCircle } from "react-icons/bi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineTag } from "react-icons/ai";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inventory = [
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "John Doe",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Pending",
    carImage: "/redCar.png",
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "John Doe",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Cancelled",
    carImage: "/whiteCar.png",
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/blueCar.png",
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Cancelled",
    carImage: "/blueCar.png",
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/whiteCar.png",
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/whiteCar.png",
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/whiteCar.png",
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Delivered",
    carImage: "/whiteCar.png",
  },
  {
    orderId: 457809,
    car: "2020 BMW X5",
    buyer: "Mike Hanigan",
    seller: "Delta Pvt. Ltd.",
    orderDate: "Aug 14, 2024",
    paymentStatus: "Cancelled",
    carImage: "/blueCar.png",
  },
];

const PrintIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_706_1533)">
      <path
        d="M20.4844 6.04688H19.8281V3.51562C19.8281 1.57711 18.251 0 16.3125 0H7.6875C5.74898 0 4.17188 1.57711 4.17188 3.51562V6.04688H3.51562C1.57711 6.04688 0 7.62398 0 9.5625V15.1875C0 17.126 1.57711 18.7031 3.51562 18.7031H4.17188V21.8906C4.17188 23.0537 5.11814 24 6.28125 24H17.7188C18.8819 24 19.8281 23.0537 19.8281 21.8906V18.7031H20.4844C22.4229 18.7031 24 17.126 24 15.1875V9.5625C24 7.62398 22.4229 6.04688 20.4844 6.04688ZM5.57812 3.51562C5.57812 2.35252 6.52439 1.40625 7.6875 1.40625H16.3125C17.4756 1.40625 18.4219 2.35252 18.4219 3.51562V6.04688H5.57812V3.51562ZM18.4219 21.8906C18.4219 22.2783 18.1065 22.5938 17.7188 22.5938H6.28125C5.89355 22.5938 5.57812 22.2783 5.57812 21.8906V14.9531H18.4219V21.8906ZM22.5938 15.1875C22.5938 16.3506 21.6475 17.2969 20.4844 17.2969H19.8281V14.9531H20.25C20.6383 14.9531 20.9531 14.6383 20.9531 14.25C20.9531 13.8617 20.6383 13.5469 20.25 13.5469H3.75C3.36169 13.5469 3.04688 13.8617 3.04688 14.25C3.04688 14.6383 3.36169 14.9531 3.75 14.9531H4.17188V17.2969H3.51562C2.35252 17.2969 1.40625 16.3506 1.40625 15.1875V9.5625C1.40625 8.39939 2.35252 7.45312 3.51562 7.45312H20.4844C21.6475 7.45312 22.5938 8.39939 22.5938 9.5625V15.1875Z"
        fill="#FFB300"
      />
      <path
        d="M13.875 16.5469H10.125C9.73669 16.5469 9.42188 16.8617 9.42188 17.25C9.42188 17.6383 9.73669 17.9531 10.125 17.9531H13.875C14.2633 17.9531 14.5781 17.6383 14.5781 17.25C14.5781 16.8617 14.2633 16.5469 13.875 16.5469Z"
        fill="#FFB300"
      />
      <path
        d="M13.875 19.5469H10.125C9.73669 19.5469 9.42188 19.8617 9.42188 20.25C9.42188 20.6383 9.73669 20.9531 10.125 20.9531H13.875C14.2633 20.9531 14.5781 20.6383 14.5781 20.25C14.5781 19.8617 14.2633 19.5469 13.875 19.5469Z"
        fill="#FFB300"
      />
      <path
        d="M6 9.04688H3.75C3.36169 9.04688 3.04688 9.36169 3.04688 9.75C3.04688 10.1383 3.36169 10.4531 3.75 10.4531H6C6.38831 10.4531 6.70312 10.1383 6.70312 9.75C6.70312 9.36169 6.38831 9.04688 6 9.04688Z"
        fill="#FFB300"
      />
    </g>
  </svg>
);

const CsvIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.375 10.3125H20.2031V2.10938C20.2031 0.946266 19.2569 0 18.0938 0H8.25C8.06348 0 7.88466 0.0741094 7.75284 0.205969L2.12784 5.83097C1.99594 5.96283 1.92188 6.14166 1.92188 6.32812V21.8906C1.92188 23.0537 2.86814 24 4.03125 24H18.0938C19.2569 24 20.2031 23.0537 20.2031 21.8906V21.0938H21.375C21.7633 21.0938 22.0781 20.7789 22.0781 20.3906V11.0156C22.0781 10.6273 21.7633 10.3125 21.375 10.3125ZM7.54688 2.40061V4.92188C7.54688 5.30958 7.23145 5.625 6.84375 5.625H4.32248L7.54688 2.40061ZM3.32812 7.03125H6.84375C8.00686 7.03125 8.95312 6.08498 8.95312 4.92188V1.40625H18.0938C18.4815 1.40625 18.7969 1.72167 18.7969 2.10938V10.3125H3.32812V7.03125ZM18.7969 21.8906C18.7969 22.2783 18.4815 22.5938 18.0938 22.5938H4.03125C3.64355 22.5938 3.32812 22.2783 3.32812 21.8906V21.0938H18.7969V21.8906ZM20.6719 19.6875H3.32812V11.7188H20.6719V19.6875Z"
      fill="#FFB300"
    />
    <path
      d="M7.7812 18.1641C8.32687 18.1641 8.81742 17.9841 9.19992 17.6435C9.27478 17.5768 9.34589 17.5035 9.41142 17.4254C9.61936 17.1774 9.58692 16.8078 9.33895 16.5999C9.09098 16.392 8.72147 16.4244 8.51348 16.6723C8.48442 16.707 8.45316 16.7393 8.42063 16.7683C8.25375 16.9169 8.03869 16.9922 7.78125 16.9922C7.07048 16.9922 6.49219 16.4139 6.49219 15.7031C6.49219 14.9923 7.07048 14.4141 7.78125 14.4141C8.03967 14.4141 8.28872 14.4901 8.50153 14.6339C8.76975 14.815 9.13392 14.7445 9.31505 14.4764C9.49622 14.2082 9.42567 13.844 9.15759 13.6628C8.7503 13.3876 8.27433 13.2422 7.78125 13.2422C6.42431 13.2422 5.32031 14.3461 5.32031 15.7031C5.32031 17.0601 6.42427 18.1641 7.7812 18.1641Z"
      fill="#FFB300"
    />
    <path
      d="M12.1886 18.164C13.0345 18.164 13.7456 17.6199 13.8795 16.8701C13.981 16.3014 13.7288 15.5605 12.7163 15.1871C12.2776 15.0252 11.8677 14.8494 11.7209 14.7854C11.6803 14.7461 11.6768 14.6966 11.6821 14.6597C11.6953 14.5676 11.7735 14.4934 11.8968 14.4563C12.3355 14.3241 12.6686 14.5411 12.7353 14.5897C12.9085 14.8044 13.2152 14.8727 13.4672 14.7378C13.7526 14.5852 13.8602 14.2301 13.7076 13.9448C13.5054 13.5668 12.5894 13.0239 11.5588 13.3343C10.9977 13.5033 10.6005 13.9473 10.5221 14.4932C10.4482 15.0081 10.6716 15.5036 11.1051 15.7863C11.131 15.8031 11.1582 15.8179 11.1863 15.8305C11.2081 15.8403 11.7269 16.0711 12.3108 16.2865C12.5296 16.3672 12.7536 16.5088 12.7258 16.6642C12.7022 16.7964 12.5152 16.9921 12.1886 16.9921C11.8496 16.9921 11.5245 16.8567 11.3189 16.6299C11.1016 16.3901 10.7311 16.372 10.4913 16.5893C10.2515 16.8066 10.2333 17.1771 10.4506 17.4169C10.881 17.8917 11.5144 18.164 12.1886 18.164Z"
      fill="#FFB300"
    />
    <path
      d="M16.1569 17.7181C16.2518 17.9854 16.5054 18.1642 16.7887 18.1642H16.7934C17.0786 18.1622 17.3318 17.9794 17.4249 17.7056L18.6494 14.0198C18.7514 13.7127 18.5851 13.3811 18.278 13.2791C17.971 13.177 17.6393 13.3433 17.5372 13.6504L16.7783 15.9349L15.9804 13.6361C15.8743 13.3304 15.5403 13.1687 15.2348 13.2747C14.9291 13.3808 14.7673 13.7146 14.8734 14.0204L16.1569 17.7181Z"
      fill="#FFB300"
    />
  </svg>
);

export default function Orders() {
  return (
    <div className=" space-y-6">
      <div className="grid md:grid-cols-2">
        <h1 className="text-2xl font-semibold">Orders</h1>
        <div className="flex items-center justify-end gap-8">
          <div className="flex items-center gap-2 text-lg text-[#FFB300] underline underline-offset-4">
            <CsvIcon />
            Export CSV
          </div>
          <div className="flex items-center gap-2 text-lg text-[#FFB300] underline underline-offset-4">
            <PrintIcon />
            Print Order History
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        {/* Inventory Table */}
        <Card className="rounded-md border-0 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.05)] pb-0 gap-4">
          <CardHeader className="grid grid-cols-4 gap-4">
            <div className="w-full">
              <label className="block text-base mb-2">Date Range</label>
              <Select>
                <SelectTrigger className="w-full border-[#CCC] bg-white placeholder:text-[#555555] text-[#555555] text-sm h-12! focus:outline-none! focus:ring-1! focus:ring-[#FFB300]! focus:border-transparent!">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Option 1</SelectItem>
                    <SelectItem value="2">Option 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <label className="block text-base mb-2">Date Range</label>
              <Select>
                <SelectTrigger className="w-full border-[#CCC] bg-white placeholder:text-[#555555] text-[#555555] text-sm h-12! focus:outline-none! focus:ring-1! focus:ring-[#FFB300]! focus:border-transparent!">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Option 1</SelectItem>
                    <SelectItem value="2">Option 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <label className="block text-base mb-2">Date Range</label>
              <Select>
                <SelectTrigger className="w-full border-[#CCC] bg-white placeholder:text-[#555555] text-[#555555] text-sm h-12! focus:outline-none! focus:ring-1! focus:ring-[#FFB300]! focus:border-transparent!">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Option 1</SelectItem>
                    <SelectItem value="2">Option 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <label className="block text-base mb-2">Date Range</label>
              <Select>
                <SelectTrigger className="w-full border-[#CCC] bg-white placeholder:text-[#555555] text-[#555555] text-sm h-12! focus:outline-none! focus:ring-1! focus:ring-[#FFB300]! focus:border-transparent!">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Option 1</SelectItem>
                    <SelectItem value="2">Option 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
            
          <CardContent className="overflow-x-auto px-0">
            <table className="w-full text-sm">
              <thead className="bg-[#F6F9FF]">
                <tr>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">
                    Order ID
                  </th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">
                    Car
                  </th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">
                    Buyer
                  </th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">
                    Seller
                  </th>
                  <th className="text-lg font-normal text-black p-3 px-6 border-r">
                    Order Date
                  </th>
                  <th className="text-lg font-normal text-black p-3 px-6">
                    Payment Status
                  </th>
                  <th className="text-lg font-normal text-black p-3 px-6">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b last:border-0 text-center text-[#555555] md:text-base text-sm"
                  >
                    <td className="p-3 px-6 border-r">{item.orderId}</td>
                    <td className="p-3 pr-6 border-r">
                      <div className="flex items-center sm:flex-row flex-col justify-center lg:gap-4 gap-3">
                        <div className="w-14 h-7">
                          <img
                            src={item.carImage}
                            alt={item.carImage}
                            className="w-full h-full object-contain"
                          />
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
                          item.paymentStatus === "Pending"
                            ? "text-blue-600"
                            : item.paymentStatus === "Cancelled"
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
                          <FiMoreHorizontal
                            className="cursor-pointer"
                            size={22}
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="w-fit px-0"
                          align="start"
                        >
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300] ">
                            <FiEye
                              size={16}
                              className="group-hover:text-[#FFB300]"
                            />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <FiEdit
                              size={16}
                              className="group-hover:text-[#FFB300]"
                            />
                            Edit Listing
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <BiDollarCircle
                              size={16}
                              className="group-hover:text-[#FFB300]"
                            />
                            Edit Price
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <IoCheckmarkCircleOutline
                              size={16}
                              className="group-hover:text-[#FFB300]"
                            />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <FiXCircle
                              size={16}
                              className="group-hover:text-[#FFB300]"
                            />
                            Reject
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <AiOutlineTag
                              size={16}
                              className="group-hover:text-[#FFB300]"
                            />
                            Mark as Sold
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 hover:bg-[#FFF2D4] hover:text-[#FFB300]">
                            <FiTrash2
                              size={16}
                              className="group-hover:text-[#FFB300]"
                            />
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
