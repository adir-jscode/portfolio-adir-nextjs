"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

type Role = {
  title: string;
  company: string;
  period: string;
  points: string[];
};

const ROLES: Role[] = [
  {
    title: "Software Engineer (Contract)",
    company: "Tech Enovative",
    period: "Feb 2024 – Present",
    points: [
      "Build enterprise-grade apps focused on scalability and UX.",
      "ASP.NET Core, MSSQL, JavaScript for robust, reliable features.",
      "Translate business needs into user-friendly experiences.",
      "Keep up with latest tech to apply best practices.",
    ],
  },
  {
    title: ".NET Trainee",
    company: "Neurochip Industries Ltd",
    period: "Feb 2023 – Jul 2023",
    points: [
      "Contributed to CRM, E-commerce & LMS solutions using .NET.",
      "Implemented core features with scalability in mind.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className=" text-black py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-orange-500" />
          <h2 className="text-3xl md:text-4xl font-extrabold">Experience</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6">
          {ROLES.map((r) => (
            <Card
              key={r.title}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-orange-500/40 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      {r.title}{" "}
                      <span className="text-orange-500">— {r.company}</span>
                    </h3>
                  </div>
                  <span className="text-sm text-black/70">{r.period}</span>
                </div>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-black/85">
                  {r.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
