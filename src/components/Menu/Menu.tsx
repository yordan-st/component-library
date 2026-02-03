import { createContext } from "react";
import "./Menu.scss";
import useToggle from "../../hooks/useToggle";

// define the shape of the context
interface MenuContextType {
  open: boolean;
  toggleOpen: () => void;
  onOpen?: () => void;
}

// create initial context and assign it default values
const MenuContext = createContext<MenuContextType>({
  open: false,
  toggleOpen: () => {},
  onOpen: () => {},
});

// define the props for the Menu component
export interface MenuProps {
  children?: React.ReactNode;
  onOpen?: () => void;
}

export { MenuContext };

export default function Menu({ children, onOpen }: MenuProps) {
  // use the useToggle hook to manage the open state of the menu
  const { on: open, toggle: toggleOpen } = useToggle({
    initialValue: true,
    onToggle: onOpen,
  });

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}
