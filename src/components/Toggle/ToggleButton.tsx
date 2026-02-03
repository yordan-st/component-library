import { useContext } from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleButton({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { toggle } = useContext(ToggleContext);

  return <div onClick={toggle}>{children}</div>;
}
