"use client";

import ContactDropdown from "@/app/(home)/_components/ContactDropdown";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center py-12 sm:py-16 lg:py-20">
      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center sm:text-left space-y-6 px-4">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Ayush Pathak
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-green-400 font-semibold">
          Software Developer
        </p>

        {/* Brief Description */}
        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto sm:mx-0 leading-relaxed">
          Passionate Software Developer with experience in building secure, scalable, and high- performance applications using <span className="text-white">.NET, C#, WPF, and REST APIs</span>. Skilled in system security, clean code practices, and software design patterns.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-400" />
            <span>Jabalpur, Madhya Pradesh, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-green-400" />
            <span>7999824091</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-green-400" />
            <span>ayushpathak1975@gmail.com</span>
          </div>
          <Link
            href="https://github.com/ayushpathak75"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Globe className="w-4 h-4 text-green-400" />
            <span>GitHub</span>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center pt-4">
          <ContactDropdown />
        </div>
      </div>
    </section>
  );
}
