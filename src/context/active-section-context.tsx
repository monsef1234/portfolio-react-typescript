import React, { createContext, useState, useContext } from "react";
import { links } from "../../lib/data";
export type SectionName = (typeof links)[number]["name"];
type ActiveSectionProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionCtxType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
const ActiveSectionCtx = createContext<ActiveSectionCtxType | null>(null);
export default function ActiveSectionProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionCtx.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionCtx.Provider>
  );
}

export const useActiveSection = () => {
  const context = useContext(ActiveSectionCtx);
  if (context == null) {
    throw new Error(
      "useActiveSection must be used within a ActiveSectionProvider"
    );
  }
  return context;
};
