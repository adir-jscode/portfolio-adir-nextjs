"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

// --------- Your site content ----------
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const expertise = [
  { label: "Enterprise Application Development", href: "#projects" },
  { label: "ASP.NET Core & SQL Solutions", href: "#projects" },
  { label: "React / Next.js Applications", href: "#projects" },
  { label: "Scalable & Reliable Systems", href: "#projects" },
  { label: "User Experience & Performance", href: "#projects" },
];

// Swap these with your real links
const CONTACT_EMAIL = "sarafat.adir@gmail.com";
const SOCIALS = {
  github: "https://github.com/adir-jscode",
  linkedin: "https://www.linkedin.com/in/sarafataliadir/",
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0">
        {/* Put a wide, dark image at /public/footer-bg.jpg (or rename below) */}

        <div className="absolute inset-0 bg-[#0b0b0b]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {/* Replace with your logo if you have one */}

              <span className="text-2xl font-extrabold tracking-wide">
                <span className="text-white">MD SARAFAT ALI </span>{" "}
                <span className="text-orange-500">ADIR</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-neutral-300">
              Creating enterprise-level solutions with reliability, performance,
              and user-focused design.
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn
            title="Quick Links"
            items={quickLinks}
            className="md:col-span-3"
          />

          {/* Expertise / Services */}
          <FooterColumn
            title="Expertise"
            items={expertise}
            className="md:col-span-3"
          />

          {/* Get in Touch */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-extrabold text-orange-500">
              Get in Touch
            </h4>
            <div className="mt-5 space-y-4">
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-base text-neutral-200 hover:text-orange-400 transition-colors"
              >
                {CONTACT_EMAIL}
              </Link>
              <p className="text-sm text-neutral-400">Dhaka, Bangladesh</p>

              {/* Socials (boxed) */}
              <div className="flex gap-3">
                <SocialBox href={SOCIALS.github} aria="GitHub">
                  <Github className="h-5 w-5" />
                </SocialBox>
                <SocialBox href={SOCIALS.linkedin} aria="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </SocialBox>
                {/* facebook */}
                <SocialBox
                  href="https://www.facebook.com/adir99"
                  aria="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </SocialBox>
                {/* instragram */}
                <SocialBox
                  href="https://www.instagram.com/sarafat.adir/"
                  aria="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </SocialBox>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-neutral-300">
            © {new Date().getFullYear()} Md Sarafat Ali Adir. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  className = "",
}: {
  title: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="text-xl font-extrabold text-orange-500">{title}</h4>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-base text-neutral-200 hover:text-orange-400 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialBox({
  href,
  aria,
  children,
}: {
  href: string;
  aria: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={aria}
      target="_blank"
      className="grid h-10 w-10 place-items-center rounded-[4px] border border-white/30 text-white hover:text-orange-400 hover:border-orange-400 transition-colors"
    >
      {children}
    </Link>
  );
}
