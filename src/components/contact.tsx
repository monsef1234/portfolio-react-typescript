import { FaPaperPlane } from "react-icons/fa";
import Heading from "./heading";
import { motion } from "framer-motion";
import useSectionInView from "../../lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-20 sm:mb-28 max-w-2xl w-full text-center scroll-mt-28"
    >
      <Heading>Contact Me</Heading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please Contact me directly at{" "}
        <a href="mailto:example@gmail.com" className="underline">
          example@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-4 flex flex-col gap-2 w-full dark:text-black">
        <input
          type="email"
          placeholder="Your Email"
          className="h-14 border transition-all p-4 dark:outline-none border-black/10 rounded-lg dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
        />
        <textarea
          placeholder="Your Message"
          className="h-52 border border-black/10 rounded-lg transition-all p-4 dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
        />
        <button
          type="submit"
          className="flex dark:bg-white dark:bg-opacity-10  outline-none hover:scale-[1.02] transition items-center w-fit py-2 px-5 rounded-full gap-2 bg-gray-900 text-white"
        >
          Submit <FaPaperPlane className="text-xs opacity-70" />
        </button>
      </form>
    </motion.section>
  );
}
