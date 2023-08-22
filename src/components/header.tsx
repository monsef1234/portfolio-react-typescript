import { motion } from "framer-motion";
import { links } from "./../../lib/data";
import clsx from "clsx";
import { useActiveSection } from "../context/active-section-context";
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-0 w-full h-[6rem] rounded-none border left-1/2 sm:-translate-1/2 border-white border-opacity-40 bg-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:max-w-2xl sm:rounded-full"
      ></motion.div>
      <nav className="px-6 fixed top-5 sm:top-8 w-full sm:max-w-2xl sm:left-1/2 sm:-translate-x-1/2">
        <ul className="flex flex-wrap items-center h-full justify-between text-gray-500">
          {links.map((link) => {
            return (
              <li
                className={clsx(
                  "hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300 text-center transition relative py-1 px-2",
                  {
                    "text-gray-950 font-medium dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                key={link.hash}
              >
                <a
                  className="block w-full h-full"
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  href={link.hash}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 20,
                      }}
                      className="bg-gray-200 dark:bg-gray-700 rounded-full absolute inset-0 -z-10"
                    ></motion.span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
