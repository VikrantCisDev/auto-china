"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const inputClass =
  "w-full border border-[#CCCCCC] bg-[#F9FAFB] placeholder:text-[#555555] text-[#555555] text-sm h-12! focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-transparent"

export default function SettingsPage() {
  return (
    <div className="w-full space-y-5">
      <h1 className="text-2xl font-semibold">Settings</h1>
      
      {/* PROFILE SETTINGS */}
      <Card className="border-[#EEEEEE] gap-6">
        <CardHeader className="gap-0">
          <CardTitle className="text-xl font-medium text-black">
            Profile Settings
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row lg:gap-8 gap-4">
            <div className="w-39.5 h-34.5 rounded-lg">
              <img src="/profilePic.png" className="object-cover" />
            </div>

            <div className="text-lg  text-[#555555] space-y-1 lg:pt-1">
              <p className="font-medium text-black">
                John’s Auto, <span className="text-[#555555]">Los Angeles</span>
              </p>
              <p>Dealer ID, 23456</p>
              <p>14566 Green Park Street 4, Los Angeles, CA 89709</p>
            </div>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label className="text-base text-black">Name</Label>
              <Input className={inputClass} defaultValue="John Parker" />
            </div>

            <div className="space-y-2">
              <Label className="text-base text-black">Dealership ID</Label>
              <Input className={inputClass} defaultValue="#557679" />
            </div>

            <div className="space-y-2">
              <Label className="text-base text-black">Email Address</Label>
              <Input className={inputClass} defaultValue="johnp@xyz.com" />
            </div>

            <div className="space-y-2">
              <Label className="text-base text-black">Phone Number</Label>
              <Input className={inputClass} defaultValue="+22 908097 08" />
            </div>

            <div className="space-y-2">
              <Label className="text-base text-black">Province</Label>
              <Select>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-base text-black">City</Label>
              <Select>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="la">Los Angeles</SelectItem>
                  <SelectItem value="sf">San Francisco</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label className="text-base text-black">Address</Label>
              <Input
                className={inputClass}
                defaultValue="lorem ipsum doler sit amet"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* INVENTORY SETTINGS */}
<Card className="border-[#EEEEEE] gap-5">
  <CardHeader className="pb-0 gap-0">
    <CardTitle className="text-xl font-semibold text-[#111827]">
      Inventory Settings
    </CardTitle>
  </CardHeader>

  <CardContent>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 ">
      
      {/* Default Car Status */}
      <div className="xl:flex grid grid-cols-2 items-center gap-5 md:gap-3 2xl:gap-3">
        <Label className="text-sm md:text-base xl:text-lg text-black whitespace-nowrap">
          Default Car Status
        </Label>
        <Select defaultValue="active">
          <SelectTrigger className="h-9 border-[#EEEEEE] bg-[#F9FAFB] text-sm xl:w-[100px]! w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Pickup Location */}
      <div className="xl:flex grid grid-cols-2 items-center gap-5 md:gap-3 lg:gap-3">
        <Label className="text-sm md:text-base xl:text-lg text-black whitespace-nowrap">
          Pick Up Location
        </Label>
        <Select defaultValue="yard">
          <SelectTrigger className="h-9 border-[#EEEEEE] bg-[#F9FAFB] text-sm xl:w-[100px]! w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yard">Yard</SelectItem>
            <SelectItem value="warehouse">Warehouse</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Allow Price Editing */}
      {/* Allow Price Editing */}
      <div className="xl:flex grid grid-cols-2 items-center gap-5 md:gap-3 2xl:gap-3">
        <Label className="text-sm md:text-base xl:text-lg text-black whitespace-nowrap">
          Allow Price Editing
        </Label>

        <Switch id="airplane-mode" defaultChecked className="" />
      </div>

      {/* Min Price for Listings */}
      <div className="xl:flex grid grid-cols-2 items-center gap-5 md:gap-3 2xl:gap-3">
        <Label className="text-sm md:text-base xl:text-lg text-black whitespace-nowrap">
          Min Price for Listings
        </Label>
        <Select defaultValue="2000">
          <SelectTrigger className="h-9 border-[#EEEEEE] bg-[#F9FAFB] text-sm xl:w-[100px]! w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1000">$1000</SelectItem>
            <SelectItem value="2000">$2000</SelectItem>
            <SelectItem value="5000">$5000</SelectItem>
          </SelectContent>
        </Select>
      </div>

    </div>
  </CardContent>
</Card>


      {/* ACTION BUTTONS */}
      <div className="flex gap-3">
        <Button className="bg-[#FFB300] text-black hover:bg-[#E6A200] px-6 h-12.5  text-base font-medium">
          Save Changes
        </Button>
        <Button
          variant="outline"
          className="border-[#FFB300] text-[#FFB300] hover:bg-[#FFF6E0] h-12.5 w-36 text-base font-medium"
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}
