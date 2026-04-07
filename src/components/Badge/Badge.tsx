import "./Badge.scss";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The content to be displayed inside the badge */
  children?: React.ReactNode;
  /** The color variant of the badge */
  variant?:
    | "neutral"
    | "success"
    | "danger"
    | "warning"
    | "blue"
    | "indigo"
    | "pruple"
    | "pink";
  /** The shape of the badge */
  shape?: "square" | "pill";
}

export default function Badge({
  children,
  variant = "neutral",
  shape = "square",
  className = "",
  ...rest
}: BadgeProps) {
  const variantClass = `badge--${variant}`;
  const shapeClass = `badge--${shape}`;

  const badgeClasses = ["badge", variantClass, shapeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={badgeClasses} {...rest}>
      {children}
    </span>
  );
}
