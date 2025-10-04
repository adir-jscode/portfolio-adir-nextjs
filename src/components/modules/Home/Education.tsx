"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

type Edu = {
  degree: string;
  school: string;
  period: string;
  details?: string;
};

const EDU: Edu[] = [
  {
    degree:
      "B.Sc. in Computer Science & Engineering (Software Engineering Major)",
    school: "American International University – Bangladesh (AIUB)",
    period: "Jan 2020 – Present",
    details: "CGPA: 3.24/4.00",
  },
  {
    degree: "Higher Secondary School Certificate (Science)",
    school: "BAF Shaheen College Dhaka",
    period: "Jul 2017 – Jul 2019",
    details: "GPA: 4.58/5.00",
  },
  {
    degree: "Secondary School Certificate (Science)",
    school: "Monipur High School and College",
    period: "Jan 2007 – Apr 2017",
    details: "GPA: 5.00/5.00",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className=" bg-muted/30 text-black py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-orange-500" />
          <h2 className="text-3xl md:text-4xl font-extrabold">Education</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6">
          {EDU.map((e) => (
            <Card
              key={e.degree}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-orange-500/40 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{e.degree}</h3>
                    <p className="text-orange-500 font-semibold">{e.school}</p>
                  </div>
                  <span className="text-sm text-black/70">{e.period}</span>
                </div>
                {e.details && <p className="mt-3 text-black/85">{e.details}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
