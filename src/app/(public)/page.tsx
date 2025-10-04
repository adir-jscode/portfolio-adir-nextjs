import AboutSection from "@/components/modules/Home/About";
import BlogSection from "@/components/modules/Blogs/Blogs";
import EducationSection from "@/components/modules/Home/Education";
import ExperienceSection from "@/components/modules/Home/Experience";
import Hero from "@/components/modules/Home/Hero";
import MyWorks from "@/components/modules/Works/Works";
import StayInTouch from "@/components/modules/Home/Contact";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <MyWorks />
      <ExperienceSection />
      <EducationSection />
      <BlogSection />
      <StayInTouch />
    </div>
  );
}
