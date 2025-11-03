import { useContext } from "react";
import { MenuContext } from "./Menu";
import Button from "../Button";

export interface MenuButtonProps {
  children?: React.ReactNode;
}

export default function MenuButton({ children }: MenuButtonProps) {
  const { toggle, open, menuId } = useContext(MenuContext);

  return (
    <Button
      onClick={toggle}
      aria-expanded={open}
      aria-haspopup="true"
      aria-controls={menuId}
    >
      {children}
    </Button>
  );
}
