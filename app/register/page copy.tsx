"use client"

import type React from "react"

import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function RegisterPage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#FFFDF5] to-[#FDF5E1] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="" width={364} height={94}/>
          </div>
          <h2 className="text-3xl font-bold mb-2">Sign up for free</h2>
          <p className="text-gray-500">Joinfree at AutoChinaTrade, the No.1 Trading Platform for China Used Cars.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-medium text-md">
                First Name
              </Label>
              <Input id="firstName" placeholder="Enter first name" className="bg-gray-50 border-gray-200 h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="font-medium text-md">
                Last Name
              </Label>
              <Input id="lastName" placeholder="Enter last name" className="bg-gray-50 border-gray-200 h-12" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-medium text-md">
              Email Address
            </Label>
            <Input id="email" type="email" placeholder="Enter email" className="bg-gray-50 border-gray-200 h-12" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username" className="font-medium text-md">
              Username
            </Label>
            <Input id="username" placeholder="Choose a username" className="bg-gray-50 border-gray-200 h-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="font-medium text-md">
                Password
              </Label>
              <Input id="password" type="password" placeholder="Password" className="bg-gray-50 border-gray-200 h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="font-medium text-md">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm"
                className="bg-gray-50 border-gray-200 h-12"
              />
            </div>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-12 text-base shadow-lg shadow-primary/20"
            >
              CREATE ACCOUNT
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/login" className="text-primary font-bold hover:underline">
            Log in now.
          </Link>
        </div>
      </div>
    </div>
  )
}