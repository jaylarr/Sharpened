import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type NativeButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedButtonProps> & {
    href?: never;
  };

type LinkButtonProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedButtonProps> & {
    href: string;
  };

export type ButtonProps = NativeButtonProps | LinkButtonProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-bold tracking-normal transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#FFC107] text-[#0D1B3D] hover:bg-[#e5ad00] active:bg-[#cc9a00] focus-visible:outline-[#1D4ED8]",
  secondary:
    "border border-[#0D1B3D] bg-transparent text-[#0D1B3D] hover:bg-[#0D1B3D] hover:text-white active:bg-[#06122d] focus-visible:outline-[#1D4ED8]",
  tertiary:
    "text-[#1D4ED8] underline-offset-4 hover:underline active:text-[#0D1B3D] focus-visible:outline-[#1D4ED8]",
  inverse:
    "border border-white bg-transparent text-white hover:bg-white hover:text-[#0D1B3D] active:bg-[#F2F4F7] focus-visible:outline-[#FFC107]"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-5 py-3 text-[15px] sm:text-base",
  lg: "min-h-14 px-6 py-4 text-base"
};

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  children,
  className,
  fullWidth = false,
  icon,
  iconPosition = "right",
  isLoading = false,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const content = isLoading ? "Loading..." : children;
  const classes = joinClasses(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );

  const inner = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      <span>{content}</span>
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if ("href" in props) {
    const { href, ...anchorProps } = props as Omit<
      LinkButtonProps,
      keyof SharedButtonProps
    >;

    return (
      <a aria-disabled={isLoading || undefined} className={classes} href={href} {...anchorProps}>
        {inner}
      </a>
    );
  }

  const { disabled, type = "button", ...buttonProps } = props as Omit<
    NativeButtonProps,
    keyof SharedButtonProps
  >;

  return (
    <button
      {...buttonProps}
      aria-busy={isLoading || undefined}
      className={classes}
      disabled={isLoading || disabled}
      type={type}
    >
      {inner}
    </button>
  );
}
