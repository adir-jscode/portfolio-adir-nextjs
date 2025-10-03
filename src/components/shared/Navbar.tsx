"use client";
import Link from "next/link";
import { Button } from "../ui/button";
export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          MD SARAFAT ALI <span className="text-orange-600">ADIR</span>
          {/* programming icon from react */}
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-neutral-700">
          <Link
            href="#about"
            className="hover:text-orange-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-orange-600 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="hover:text-orange-600 transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="hover:text-orange-600 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="#blogs"
            className="hover:text-orange-600 transition-colors"
          >
            Blogs
          </Link>
          <Button
            asChild
            className=" rounded-full px-5 py-2 text-sm md:text-base bg-orange-600 hover:bg-orange-700 text-white"
          >
            <Link href="#login">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
