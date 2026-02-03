import { useContext } from "react";
import { MenuContext } from "./Menu";
export interface MenuDropdownProps {
  children?: React.ReactNode;
}

export default function MenuDropdown({ children }: MenuDropdownProps) {
  const { open } = useContext(MenuContext);

  return <>{open ? <div className="menu-dropdown">{children}</div> : null}</>;
}
