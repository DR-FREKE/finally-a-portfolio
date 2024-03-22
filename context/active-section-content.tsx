"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  active: SectionName;
  setActive: Dispatch<SetStateAction<SectionName>>;
};

interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);
/** the createContext asks for a default value...
 * now the default value is needed in the case where we wanted
 *  to access the value of the context api from outside the provider
 * then we'd get the default value. for instance, we could set the default value to be home but it is always a very rare case...
 * in this project, we'll just set it to be null */

export const useActiveSectionContext = () => useContext(ActiveSectionContext)!;

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [active, setActive] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
