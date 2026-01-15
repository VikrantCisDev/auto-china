"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const schema = z.object({
  make: z.string().min(1),
  year: z.string().min(1),
  model: z.string().min(1),
  color: z.string().min(1),
  variant: z.string().optional(),
  condition: z.string().optional(),
  bodyType: z.string().optional(),
  engineCapacity: z.string().optional(),
  fuelType: z.string().optional(),
  transmission: z.string().optional(),
  mileage: z.string().optional(),
  owners: z.string().optional(),
  vin: z.string().optional(),
  expectedPrice: z.string().min(1),
  discount: z.string().optional(),
  province: z.string().min(1),
  city: z.string().min(1),
  address: z.string().min(1),
});

const BODY_TYPES = [
  "SUV",
  "Sedan",
  "Hatchback",
  "Bus",
  "Pickup",
  "Truck",
  "Equipment",
];

const inputClass =
  "w-full border-[#EEEEEE] bg-[#F9FAFB] placeholder:text-[#555555] text-[#555555] text-sm h-12! focus:outline-none! focus:ring-1! focus:ring-[#FFB300]! focus:border-transparent!";

export default function CarListingForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [activeTab, setActiveTab] = useState<"images" | "video">("images");

  const acceptType =
    activeTab === "images"
      ? "image/png,image/jpeg,image/gif"
      : "video/mp4,video/webm,video/ogg";

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      province: "California",
      city: "Los Angeles",
      address: "Los Angeles",
    },
  });

  return (
    <>
      <div className=" space-y-6">
        <h1 className="text-2xl font-semibold">Add New Car Listing</h1>
        <Card className="rounded-md border-0 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.05)] gap-4">
          <CardContent className="overflow-x-auto ">
            <form onSubmit={form.handleSubmit(console.log)}>
              {/* BASIC INFORMATION */}
              <div className="border-b pb-8 mb-8">
                <h2 className="font-semibold mb-6">Basic Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <SelectField label="Make" placeholder="Select" />
                  <SelectField label="Year" placeholder="Select" />
                  <SelectField label="Model" placeholder="Select" />
                  <TextField label="Color" register={form.register("color")} />
                  <TextField
                    label="Variant"
                    register={form.register("variant")}
                  />
                  <SelectField label="Condition" placeholder="Select" />
                  <div className="lg:col-span-2 ">
                    <label className="block text-sm mb-2">Body Type</label>
                    <RadioGroup
                      defaultValue="SUV"
                      className="flex flex-wrap gap-5 h-12"
                    >
                      {BODY_TYPES.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <RadioGroupItem
                            value={item}
                            id={`r${idx + 1}`}
                            className="accent-[#FFB300]"
                          />
                          <Label
                            htmlFor={`r${idx + 1}`}
                            className="text-sm font-normal"
                          >
                            {item}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* TECHNICAL */}
              <div className="border-b pb-8 mb-8">
                <h2 className="font-semibold mb-6">Technical Specifications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <TextField
                    label="Engine Capacity (cc)"
                    register={form.register("engineCapacity")}
                  />
                  <SelectField label="Fuel Type" placeholder="Select" />
                  <SelectField label="Transmission" placeholder="Select" />
                  <SelectField label="Mileage" placeholder="Select" />
                  <TextField
                    label="Number of Owners"
                    register={form.register("owners")}
                  />
                  <TextField
                    label="VIN (optional)"
                    register={form.register("vin")}
                  />
                </div>
              </div>

              {/* PRICING */}
              <div className="border-b pb-8 mb-8">
                <h2 className="font-semibold mb-6">Pricing Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <TextField
                    label="Expected Price"
                    register={form.register("expectedPrice")}
                  />
                  <SelectField label="Discount (optional)" placeholder="Select" />
                </div>
              </div>

              {/* FEATURES */}
              <div className="border-b pb-8 mb-8">
                <h2 className="font-semibold mb-4">Car Features</h2>
                <FeatureGroup
                  title="Exterior"
                  items={[
                    "Alloy Wheels",
                    "Fog Lamps",
                    "Sunroof / Moonroof",
                    "Panoramic Sunroof",
                    "Roof Rails",
                    "Rear Spoiler",
                    "LED DRLs",
                    "LED Tail Lamps",
                    "Tow Hook",
                  ]}
                />
                <FeatureGroup
                  title="Interior"
                  items={[
                    "Leather Seats",
                    "Touchscreen Panel",
                    "Power Adjustable Seats",
                    "Memory Seats",
                    "Wireless Charger",
                    "Rear AC Vents",
                    "Sunblind Curtains",
                    "Push Start Button",
                  ]}
                />
                <FeatureGroup
                  title="Safety"
                  items={[
                    "ABS",
                    "360 Camera",
                    "Parking Sensors",
                    "Airbags",
                    "Emergency Braking",
                    "ISOFIX Child Mounts",
                    "Adaptive Cruise Control",
                    "Hill Hold Assist",
                    "Traction Control",
                  ]}
                />
              </div>

              {/* UPLOAD */}
              <div className="border-b pb-8 mb-8">
                <h2 className="font-semibold mb-1">Upload Media</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Add images and videos for your listing here
                </p>

                {/* Tabs */}
                <div className="flex gap-8 border-b mb-6">
                  <button
                    onClick={() => setActiveTab("images")}
                    className={`pb-1.5 text-sm font-medium relative ${
                      activeTab === "images" ? "text-[#FFB300]" : "text-gray-500"
                    }`}
                  >
                    Images
                    {activeTab === "images" && (
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FFB300]" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab("video")}
                    className={`pb-1.5 text-sm font-medium relative ${
                      activeTab === "video" ? "text-[#FFB300]" : "text-gray-500"
                    }`}
                  >
                    Video
                    {activeTab === "video" && (
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#FFB300]" />
                    )}
                  </button>
                </div>

                {/* Upload Box */}
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-12 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-15 h-15 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Upload className="text-[#FFB300]" />
                    </div>
                  </div>

                  <p className="font-medium mb-1">Drag & Drop your files here</p>

                  <p className="text-sm text-gray-500 mb-4">
                    {activeTab === "images"
                      ? "Upload up to 10 images. PNG, JPG, GIF accepted"
                      : "Upload 1 video. MP4, WebM accepted"}
                  </p>

                  <label className="bg-gray-100 hover:bg-gray-200 px-6 py-2 w-44 h-12 inline-flex items-center justify-center rounded cursor-pointer text-sm font-medium">
                    Or Select files
                    <input
                      type="file"
                      multiple={activeTab === "images"}
                      accept={acceptType}
                      className="hidden"
                      onChange={(e) => setFiles(Array.from(e.target.files || []))}
                    />
                  </label>

                  {/* File List */}
                  {files.length > 0 && (
                    <div className="mt-6 space-y-2 max-w-md mx-auto">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center text-sm border rounded px-3 py-2"
                        >
                          <span className="truncate">{file.name}</span>
                          <X
                            className="w-4 h-4 cursor-pointer"
                            onClick={() =>
                              setFiles(files.filter((_, i) => i !== index))
                            }
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* LOCATION */}
              <div className="pb-8">
                <h2 className="font-semibold mb-6">Location</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SelectField label="Province" placeholder="California" />
                  <SelectField label="City" placeholder="Los Angeles" />
                  <SelectField
                    label="Dealer Showroom Address"
                    placeholder="Los Angeles"
                  />
                </div>
              </div>

              <button className="bg-[#FFB300] hover:bg-yellow-500 text-black p-3 text-base h-12 w-37.5 font-medium rounded">
                Submit
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function TextField({ label, register }: any) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <Input {...register} className={inputClass} />
    </div>
  );
}

function SelectField({ label, placeholder }: any) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <Select>
        <SelectTrigger className={inputClass}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function FeatureGroup({ title, items }: any) {
  return (
    <div className="mb-4">
      <p className="text-sm font-medium mb-2">{title}:</p>
      <div className="flex flex-wrap gap-5 text-sm">
        {items.map((i: string) => (
          <label key={i} className="flex items-center gap-2 text-[#555555]">
            <input
              type="checkbox"
              defaultChecked={
                i === "Alloy Wheels" || i === "Leather Seats" || i === "ABS"
              }
              className="accent-yellow-400"
            />
            {i}
          </label>
        ))}
      </div>
    </div>
  );
}
