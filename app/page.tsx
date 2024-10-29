import About from "./components/AboutSection";
import Education from "./components/Education";
import HeroSection from "./components/HeroSection";
import MyProjects from "./components/MyProject";
import INFO from "./MyInfo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <MyProjects />
      <Education />
    </>
  );
}
