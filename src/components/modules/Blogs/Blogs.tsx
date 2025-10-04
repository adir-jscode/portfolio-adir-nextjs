import BlogCard from "./BlogCards";

const blogs = [
  {
    id: "1",
    title: "Mastering ASP.NET Core API Optimization",
    description:
      "Learn how to scale and optimize your ASP.NET Core APIs for high performance using caching, async programming, and load balancing techniques.",
    tags: ["ASP.NET", "Backend", "Performance"],
    viewCount: 210,
    thumbnail: "/blog/net-performance.jpg",
    author: "Md Sarafat Ali Adir",
    createdAt: "2025-09-25",
  },
  {
    id: "2",
    title: "Building Fullstack Apps with Next.js & Server Actions",
    description:
      "A deep dive into how Next.js Server Actions simplify fullstack development by eliminating redundant API endpoints and reducing complexity.",
    tags: ["Next.js", "React", "Fullstack"],
    viewCount: 156,
    thumbnail: "/blog/next-server-actions.jpg",
    author: "Md Sarafat Ali Adir",
    createdAt: "2025-08-12",
  },
  {
    id: "3",
    title: "Designing Scalable Systems using SQL and .NET",
    description:
      "Architecture lessons and best practices for designing reliable, scalable systems that handle massive data loads efficiently.",
    tags: ["System Design", "SQL", "Architecture"],
    viewCount: 320,
    thumbnail: "/blog/sql-scalability.jpg",
    author: "Md Sarafat Ali Adir",
    createdAt: "2025-06-10",
  },
];

export default function BlogSection() {
  return (
    <section id="blogs" className="bg-[#fefcf9] text-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          Latest <span className="text-orange-500">Blog Posts</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
