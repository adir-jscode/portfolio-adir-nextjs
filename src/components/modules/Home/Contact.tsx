"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function StayInTouch() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // placeholder for your backend email API call
    await new Promise((r) => setTimeout(r, 1500));

    setStatus("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className=" text-black py-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <Mail className="h-8 w-8 text-orange-500 mb-3" />
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Stay <span className="text-orange-500">in Touch</span>
          </h2>
          <p className="mt-3 text-black/70 max-w-md">
            Have a project idea, collaboration proposal, or just want to say hi?
            Drop me a message — I’d love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg space-y-5 text-left"
        >
          <div>
            <label className="text-sm text-black/70">Full Name</label>
            <Input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Enter your name"
              className="mt-1 bg-white/10 border-white/20 text-black placeholder:text-black/40"
            />
          </div>

          <div>
            <label className="text-sm text-black/70">Email Address</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="Enter your email"
              className="mt-1 bg-white/10 border-white/20 text-black placeholder:text-black/40"
            />
          </div>

          <div>
            <label className="text-sm text-black/70">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              placeholder="Write your message here..."
              className="mt-1 bg-white/10 border-white/20 text-black placeholder:text-black/40 min-h-[130px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold"
          >
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>

          {status && (
            <p className="text-center text-sm text-orange-400 mt-2">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
