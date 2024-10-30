'use client'

import { Calendar, ChevronDown, Menu, Search, Train } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

import { 
  Plane, 
  Hotel, 
  LineChart, 
  UtensilsCrossed, 
  Bus,
  Umbrella, 
  Train as TrainIcon, 
  Mountain, 
  TrainFront,
  Image as ImageIcon
} from "lucide-react"

export default function Component() {
  const [fromStation, setFromStation] = useState("JN - ADI (AHMEDABAD)")
  const [toStation, setToStation] = useState("DLI (NEW DELHI)")

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo1.png"
                alt="IRCTC Logo"
                width={80}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src="/images/logo2.png"
                alt="Indian Railways Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium">
                Ask Disha
              </Link>
              <Link href="#" className="text-sm font-medium">
                Contact us
              </Link>
              <Link href="#" className="text-sm font-medium">
                Alerts
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
                Login
              </Button>
              <Button variant="outline">Register</Button>
              <Button variant="outline">Agent Login</Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Indian Railways</h1>
              <div className="flex gap-4 mt-2">
                <span className="text-green-600 font-medium">Safety</span>
                <span className="text-orange-500 font-medium">Security</span>
                <span className="text-blue-700 font-medium">Punctuality</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-blue-700 hover:bg-blue-800">
                <Train className="mr-2 h-4 w-4" />
                BOOK Ticket
              </Button>
              <Button variant="outline">
                <Search className="mr-2 h-4 w-4" />
                PNR Status
              </Button>
              <Button variant="outline">Charts / Vacancy</Button>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid gap-6">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label>From</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            className="w-full justify-between"
                          >
                            {fromStation}
                            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Input
                            placeholder="Search stations..."
                            className="border-0 focus:ring-0"
                          />
                          <Separator />
                          <div className="grid gap-1 p-2">
                            {["AHMEDABAD", "MUMBAI", "DELHI", "CHENNAI"].map(
                              (station) => (
                                <Button
                                  key={station}
                                  variant="ghost"
                                  className="justify-start"
                                  onClick={() => setFromStation(station)}
                                >
                                  {station}
                                </Button>
                              )
                            )}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>To</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            className="w-full justify-between"
                          >
                            {toStation}
                            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Input
                            placeholder="Search stations..."
                            className="border-0 focus:ring-0"
                          />
                          <Separator />
                          <div className="grid gap-1 p-2">
                            {["DELHI", "MUMBAI", "CHENNAI", "KOLKATA"].map(
                              (station) => (
                                <Button
                                  key={station}
                                  variant="ghost"
                                  className="justify-start"
                                  onClick={() => setToStation(station)}
                                >
                                  {station}
                                </Button>
                              )
                            )}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            01 Aug 23
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={new Date()}
                            className="rounded-md border"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>Class</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="3A" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1A">1A</SelectItem>
                          <SelectItem value="2A">2A</SelectItem>
                          <SelectItem value="3A">3A</SelectItem>
                          <SelectItem value="SL">SL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Seat Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="TATKAL" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TATKAL">TATKAL</SelectItem>
                        <SelectItem value="GENERAL">GENERAL</SelectItem>
                        <SelectItem value="LADIES">LADIES</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-700" defaultChecked />
                      <span className="text-blue-700">Person With Disability Concession</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-700" />
                      <span className="text-blue-700">Flexible With Date</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-700" />
                      <span className="text-blue-700">Train With Available Berth</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-700" />
                      <span className="text-blue-700">Railway Pass Concession</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


          <div className="hidden md:block">
            <Image
              src="/images/fulltrain.png"
              alt="Modern Indian Train"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </main>
{/**---------------------------------service section--------------------------------------------------------- */}
<section className="mt-16 space-y-12 mb-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <h2 className="text-2xl font-bold">Have you not found the right one?</h2>
          <p className="text-xl">Find a service suitable for you here.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            {[
              { icon: <Plane className="h-8 w-8" />, label: "FLIGHTS" },
              { icon: <Hotel className="h-8 w-8" />, label: "HOTELS" },
              { icon: <LineChart className="h-8 w-8" />, label: "RAIL DRISHTI" },
              { icon: <UtensilsCrossed className="h-8 w-8" />, label: "E-CATERING" },
              { icon: <Bus className="h-8 w-8" />, label: "BUS" },
              { icon: <Umbrella className="h-8 w-8" />, label: "HOLIDAY PACKAGES" },
              { icon: <TrainIcon className="h-8 w-8" />, label: "TOURIST TRAIN" },
              { icon: <Mountain className="h-8 w-8" />, label: "HILL RAILWAYS" },
              { icon: <TrainFront className="h-8 w-8" />, label: "CHARTER TRAIN" },
              { icon: <ImageIcon className="h-8 w-8" />, label: "GALLERY" },
            ].map((service, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex flex-col items-center justify-center gap-4 h-32 hover:bg-gray-50"
              >
                <div className="p-2 rounded-full border">{service.icon}</div>
                <span className="text-sm font-medium">{service.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-600 text-white p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="IRCTC Logo"
                width={60}
                height={60}
                className="h-12 w-12"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold">IRCTC Customer Care No :</span>
                  <span className="text-yellow-300 font-bold text-xl">14646</span>
                </div>
                <p className="text-sm">
                  IRCTC Never ask for your Personal banking information such as Debit / Credit Card Number / OTP / PIN /CVV PAN or Date of Birth or Ask to install any app for customer complaint
                </p>
              </div>
            </div>
          </div>
        </div>
{/**-------------------------------------------Holiday Section----------------------------------------------------------- */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">HOLIDAYS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg"
                alt="Maharajas Express luxury train interior"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Maharajas' Express</h3>
                <p className="text-gray-600 mb-4">
                  Redefining Royalty, Luxury and Comfort. Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an "Experience Unsurpassed". It has been a winner of "World's Leading Luxury train" by World Travel Awards consecutively for last six years.
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-800">
                  Read More →
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg"
                alt="International destination temple"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">International Packages</h3>
                <p className="text-gray-600 mb-4">
                  Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-800">
                  Read More →
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg"
                alt="Domestic destination lake view"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Domestic Air Packages</h3>
                <p className="text-gray-600 mb-4">
                  Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-800">
                  Read More →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**----------------------------Connect On Social Network Section--------------------------- */}

   
    </div>
  )
}