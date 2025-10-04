import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
          About <span className="text-orange-600">Me</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative max-w-sm mx-auto">
              <Image
                src="https://res.cloudinary.com/dsgsuvoqs/image/upload/v1759393937/adir-street_dwfhap.jpg"
                alt="Md Sarafat Ali Adir - Urban"
                width={400}
                height={500}
                className="rounded-xl shadow-lg object-cover w-full"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate Software Engineer with expertise in
                enterprise-level application development. Currently working at
                Tech Enovative, I specialize in ASP.NET Core, SQL, and
                JavaScript technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My focus is on creating scalable, user-friendly applications
                while staying updated with the latest technologies and
                contributing meaningfully to every project I work on.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-serif font-semibold text-foreground">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  C#
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  ASP.NET Core
                </Badge>

                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  PostgreSQL
                </Badge>

                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  React
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
