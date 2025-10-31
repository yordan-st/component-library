export interface MenuItemProps {
  children?: React.ReactNode;
  key: string | number;
}

export default function MenuItem({ children }: MenuItemProps) {
  return <div className="menu-item">{children}</div>;
}
