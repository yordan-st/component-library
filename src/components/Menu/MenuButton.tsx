import { useContext } from "react";
import { MenuContext } from "./Menu";
import Button from "../Button";

export interface MenuButtonProps {
  children?: React.ReactNode;
}

export default function MenuButton({ children }: MenuButtonProps) {
  const { toggleOpen } = useContext(MenuContext);

  return <Button onClick={toggleOpen}>{children}</Button>;
}
