import Button from "../Button";

export interface MenuButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function MenuButton({ children, onClick }: MenuButtonProps) {
  return <Button onClick={onClick}>{children}</Button>;
}
