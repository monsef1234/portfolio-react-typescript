import { useScroll, useTransform } from "framer-motion";
import { projectsData } from "../../lib/data";
import Heading from "./heading";
import { useRef } from "react";
import { motion } from "framer-motion";
import useSectionInView from "../../lib/hooks";
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-24">
      <Heading>My Projects</Heading>
      {projectsData.map((project, index) => {
        return <Project key={index} {...project} />;
      })}
    </section>
  );
}
type ProjectProps = (typeof projectsData)[number];
const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{ scale, opacity }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article
        ref={ref}
        className="bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20  hover:bg-gray-200 transition relative max-w-4xl h-[20rem] sm:pr-8 border border-black/5 overflow-hidden"
      >
        <div className="group-even:ml-[50%] py-4 px-5 h-full pb-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] dark:text-white/70 px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <img
          className="absolute top-8 group-hover:group-even:translate-x-3 group-hover:group-even:translate-y-3 group-hover:group-even:rotate-2 group-hover:-translate-x-3 group-hover:translate-y-3 transition group-hover:scale-[1.05] group-hover:-rotate-2 -right-28 group-even:right-[initial] group-even:-left-28 w-[28rem] rounded-t-lg shadow-2xl"
          src={imageUrl}
          alt={title}
        />
      </article>
    </motion.div>
  );
};
