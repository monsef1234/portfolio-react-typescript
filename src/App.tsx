import Intro from "./components/intro";
import About from "./components/about";
import Header from "./components/header";
import SectionDivider from "./components/divider";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ThemeSwitch from "./components/theme-switch";
export default function App() {
  return (
    <div className="bg-gray-50 transition dark:bg-gray-900 text-gray-950 dark:text-gray-50 text-opacity-80 relative min-h-screen pt-28 sm:pt-36">
      <div className="bg-[#fbe2e3] transition dark:bg-[#946263]  absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] transition dark:bg-[#676394] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <Header />
      <main className="flex flex-col  items-center justify-center">
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
      <ThemeSwitch />
    </div>
  );
}
