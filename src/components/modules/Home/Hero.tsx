import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#fefcf9] py-16">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Text */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hey, I&apos;m{" "}
            <span className="text-orange-600">Md Sarafat Ali Adir</span>
          </h1>
          <h2 className="mt-4 text-lg font-semibold text-neutral-700">
            Software Engineer
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            Creating enterprise-level software solutions that excel in user
            experience, functionality and reliability for businesses of all
            sizes.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              <Link
                href="https://drive.google.com/file/d/1F_h1PiNO709E6lvQhgthDZY--nywkK7d/view"
                target="_blank"
              >
                Resume
              </Link>
            </Button>
          </div>

          {/* Quote */}
          <p className="mt-6 italic text-neutral-500">
            I am always ready to embrace new things, learn and evolve.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="mt-10 md:mt-0 md:ml-10">
          <Image
            src="https://res.cloudinary.com/dsgsuvoqs/image/upload/v1759393932/adir-profile_pffodw.jpg" // replace with actual profile image path
            alt="Md Sarafat Ali Adir"
            width={350}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
