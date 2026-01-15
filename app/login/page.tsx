"use client"

import type React from "react"

import { LogIn, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/account")
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#FFFDF5] to-[#FDF5E1] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 xl:p-12 w-full max-w-2xl border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="" width={300} height={80}/>
          </div>
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="text-gray-500 md:text-lg text-center">
            Enter your email or username <br /> and password to sign in your account
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="username" className="font-medium text-md">
              Username
            </Label>
            <Input id="username" placeholder="Enter email" className="bg-gray-50 border-gray-200 h-12" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-medium text-md">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="bg-gray-50 border-gray-200 h-12 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-primary data-[state=checked]:bg-primary" />
              <Label htmlFor="remember" className="font-medium text-gray-600">
                Remember Me
              </Label>
            </div>
            <div className="flex gap-4 text-primary">
              <Link href="#" className="hover:underline">
                Forgot Username?
              </Link>
              <Link href="#" className="hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-12 shadow-lg shadow-primary/20 cursor-pointer"
          >
            LOG IN
          </Button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link href="/register" className="text-primary font-bold hover:underline">
            Register now.
          </Link>
        </div>
      </div>
    </div>
  )
}
