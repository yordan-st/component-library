import { useContext } from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleDisplay({
  children,
}: {
  //render props pattern
  children: (on: boolean) => React.ReactNode;
}) {
  const { on } = useContext(ToggleContext);

  return children(on);
}
