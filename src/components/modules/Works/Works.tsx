import WorkCard, { Project } from "./WorkCard";

const PROJECTS: Project[] = [
  {
    id: "koyla",
    name: "KoylaPizzaGrill – API",
    description:
      "Backend API for a restaurant management & ordering system (menus, orders, auth, caching).",
    technology: ["Express.js", "TypeScript", "Redis", "Mongoose", "MongoDB"],
    githubLink: "https://github.com/adir-jscode/KoylaPizzaGrill-API",
    liveLink: "https://koylapizza.com/",
    // thumbnail: "/projects/koyla.jpg",
  },
  {
    id: "shelfmaster",
    name: "ShelfMaster",
    description:
      "Minimalist library management system for books and borrowing records with admin workflow.",
    technology: [
      "React",
      "Redux",
      "Express.js",
      "TypeScript",
      "Mongoose",
      "MongoDB",
    ],
    githubLink: "https://github.com/adir-jscode/ShelfMaster-Redux",
    liveLink: "https://shelfmaster-redux.vercel.app/",
    // thumbnail: "/projects/shelfmaster.jpg",
  },
  {
    id: "arcedemy",
    name: "Arcedemy – LMS",
    description:
      "Learning platform tailored for Cambridge & Edexcel students; secure file/content delivery.",
    technology: ["React", "Express.js", "MongoDB", "AWS S3"],
    githubLink: "https://github.com/adir-jscode/arcedemy-web/tree/main",
    liveLink: "https://arcedemy.com/",
  },
  {
    id: "flyerexpressbd",
    name: "FlyerExpressBd — Courier Service Web App",
    description:
      "Parcel management with admin, merchant & rider dashboards; notifications and status tracking.",
    technology: [
      "ASP.NET Core",
      "MVC",
      "EF Core",
      "MSSQL",
      "Bootstrap",
      "Toastr",
      "AWS",
    ],
    githubLink: "https://github.com/Tech-Enovative/CourierService-Web",
    liveLink: "https://flyerbd.com/",
  },
  {
    id: "vms-webapi",
    name: "VMS-WebAPI",
    description:
      "Volunteer & event management Web API built with clean layering and SOLID principles.",
    technology: ["3-tier", "SOLID", "Entity Framework", "MSSQL"],
    githubLink: "https://github.com/adir-jscode/VMS-WebAPI",
  },
  {
    id: "charliesoft",
    name: "CharlieSoft — Pet Shop Console App",
    description:
      "Inventory & sales management console application for a small pet shop business.",
    technology: ["C#", "Entity Framework Core", "MSSQL"],
    githubLink: "https://github.com/adir-jscode/CharlieSoft",
  },
];

export default function MyWorks() {
  return (
    <section id="projects" className="bg-[#fefcf9] text-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          My <span className="text-orange-500">Works</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <WorkCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
