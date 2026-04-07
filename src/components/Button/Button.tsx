import "./Button.scss";

/**
 * ===== BUTTON COMPONENT =====
 *
 * A flexible button component using BEM methodology + CSS Variables
 *
 * Features:
 * - Multiple variants (primary, secondary, success, danger, ghost)
 * - Different sizes (small, medium, large, extra-large)
 * - Custom className support for BEM modifiers
 * - Full TypeScript support
 * - Accessibility features (focus states, disabled handling)
 * - Icon support
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button style variant */
  variant?: "primary" | "secondary" | "success" | "danger" | "ghost";

  /** Button size */
  size?: "small" | "medium" | "large" | "extra-large";

  /** Additional CSS classes (use for BEM modifiers like 'btn--rounded' or 'btn--full-width') */
  className?: string;

  /** Button content (text, icons, etc.) */
  children: React.ReactNode;

  /** Loading state - shows spinner */
  loading?: boolean;
}

/**
 * Button Component
 *
 * @example
 * // Basic usage
 * <Button variant="primary">Click me</Button>
 *
 * @example
 * // With icon
 * <Button variant="success">
 *   <Icon />
 *   Save Changes
 * </Button>
 *
 * @example
 * // Custom BEM modifiers
 * <Button className="btn--rounded btn--full-width">
 *   Full Width Rounded
 * </Button>
 */
export default function Button({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  loading = false,
  disabled,
  ...rest
}: ButtonProps) {
  // Build BEM class names
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const loadingClass = loading ? `btn--loading` : "";

  // Combine all classes
  const buttonClasses = [
    "btn",
    variantClass,
    sizeClass,
    loadingClass,
    className, // Custom classes come last (higher specificity)
  ]
    .filter(Boolean) // Remove empty strings
    .join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...rest} // Spread remaining props (onClick, onFocus, etc.)
    >
      {children}
    </button>
  );
}
