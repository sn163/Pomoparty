import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "solid" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

type ThemedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  alt?: string;
  size: ButtonSize;
  block?: boolean;
};

const getSizeClass = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return "py-2 px-3";
    case "md":
      return "py-3 px-4";
    case "lg":
      return "p-4 sm:p-5";
    default:
      return "py-3 px-4";
  }
};

const getTypeClass = (type: ButtonVariant) => {
  switch (type) {
    case "solid":
      return "btn-primary";
    case "outline":
      return "btn-outline btn-primary";
    case "ghost":
      return "btn-ghost";
    case "link":
      return "btn-link";
    default:
      return "btn-primary";
  }
};

const getButtonClasses = (
  variant: ButtonVariant,
  size: ButtonSize,
  block?: boolean,
) => {
  const btnBlock = block ? "w-full justify-center" : "";
  return getSizeClass(size) + " " + getTypeClass(variant) + " " + btnBlock;
};

export const ThemedButton = ({ ...btnProps }: ThemedButtonProps) => {
  const { variant, size, block, onClick, children, className, disabled } =
    btnProps;
  const buttonClasses = getButtonClasses(variant, size, block);
  return (
    <button
      type="button"
      className={`${className} ${buttonClasses} btn`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
