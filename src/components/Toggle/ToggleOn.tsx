import { useContext } from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleOn({ children }: { children?: React.ReactNode }) {
  const { on } = useContext(ToggleContext);

  return on ? children : null;
}
