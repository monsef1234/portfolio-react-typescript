import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import useSectionInView from "./../../lib/hooks";
const parentAnimation = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      type: "tween",
      duration: 0.2,
    },
  },
};
const emojiAnimaton = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 125,
      duration: 0.7,
    },
  },
};
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section ref={ref} className="relative scroll-mt-[200rem]" id="home">
      <div
        className="flex items-center justify-center
      "
      >
        <motion.div
          variants={parentAnimation}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <img
            loading="eager"
            src="https://images.unsplash.com/photo-1691756412769-baea56954b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
            alt="me"
            className="h-28 object-cover w-28 rounded-full shadow-xl border-4 border-white"
          />
          <motion.span
            variants={emojiAnimaton}
            className="absolute -right-0 -bottom-0 text-4xl"
          >
            👋
          </motion.span>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 max-w-4xl font-medium px-4 text-2xl sm:text-4xl text-center !leading-[1.5]"
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps.</span> My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.p>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center flex-col sm:flex-row gap-6 justify-center mt-6"
      >
        <a
          href="#contact"
          className="group bg-gray-900 hover:bg-gray-950 focus:scale-110 hover:scale-110 transition text-white px-7 py-3 flex items-center rounded-full gap-2"
        >
          Contact me here{" "}
          <BsArrowRight className="transition group-hover:translate-x-1 bg-opacity-40" />
        </a>
        <a
          className="group bg-white focus:scale-110 hover:scale-110 transition text-gray-700 px-7 py-3 flex items-center rounded-full gap-2"
          href="/src/assets/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
