import { createContext, useState, useId } from "react";
import "./Menu.scss";

export interface MenuProps {
  children?: React.ReactNode;
}

export interface MenuContextType {
  open: boolean;
  toggle: () => void;
  menuId?: string;
}

const MenuContext = createContext<MenuContextType>({
  open: false,
  toggle: () => {},
});

export default function Menu({ children }: MenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }
  return (
    <MenuContext.Provider value={{ open, toggle, menuId }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
