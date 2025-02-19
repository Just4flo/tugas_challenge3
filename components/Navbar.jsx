"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My CV</h1>
        
        {/* Menu button for mobile */}
        <button
          className="md:hidden block text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation links */}
        <div
          className={`md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link href="/about" className="block md:inline-block p-2">About</Link>
          <Link href="/skills" className="block md:inline-block p-2">Skills</Link>
          <Link href="/services" className="block md:inline-block p-2">Services</Link>
          <Link href="/portfolio" className="block md:inline-block p-2">Portfolio</Link>
          <Link href="/contact" className="block md:inline-block p-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
