import Heading from "./heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../lib/data";
import React from "react";
import useSectionInView from "../../lib/hooks";
import { useThemeSwitch } from "../context/theme-switch-context";
export default function Experience() {
  const { theme } = useThemeSwitch();
  const { ref } = useSectionInView("Experience");
  return (
    <section ref={ref} id="experience" className="my-24 scroll-mt-28">
      <Heading>My experience</Heading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, idx) => (
          <React.Fragment key={idx}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3F4F6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="!font-semibold capitalize">{item.title}</h3>
              <p className="!font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal dark:text-white/75 text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
