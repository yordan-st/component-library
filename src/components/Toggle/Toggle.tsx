import { createContext } from "react";
import useToggle from "../../hooks/useToggle";

interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}

const ToggleContext = createContext<ToggleContextType>({
  on: false,
  toggle: () => {},
});

export { ToggleContext };

export default function Toggle({ children }: { children?: React.ReactNode }) {
  const { on, toggle } = useToggle();

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}
