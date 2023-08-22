import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  SectionName,
  useActiveSection,
} from "./../src/context/active-section-context";

export default function useSectionInView(
  sectionName: SectionName,
  threshold = 0.75
) {
  const { setActiveSection, timeOfLastClick } = useActiveSection();
  const { ref, inView } = useInView({
    threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [setActiveSection, inView, timeOfLastClick]);
  return {
    ref,
  };
}
