import Heading from "./heading";
import { skillsData } from "../../lib/data";
import { motion } from "framer-motion";
import useSectionInView from "../../lib/hooks";

const parentAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      type: "tween",
      duration: 0.1,
      staggerChildren: 0.05,
    },
  },
};
const childrenAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section id="skills" ref={ref} className="my-24 scroll-mt-28">
      <Heading>Skills</Heading>
      <motion.ul
        variants={parentAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="max-w-3xl flex flex-wrap gap-2 justify-center"
      >
        {skillsData.map((skill, idx) => (
          <motion.li
            variants={childrenAnimation}
            key={idx}
            className="border border-black/[0.1] dark:border-white/[0.1]text-lg cursor-default bg-white dark:bg-white/10 dark:text-white/80 px-5 py-3 rounded-xl"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
