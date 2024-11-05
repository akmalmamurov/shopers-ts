import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Button = ({ children, className }: Props) => {
  return (
    <button
      className={twMerge(
        "bg-lightOrange text-base text-white hover:bg-darkOrange hoverEffect md:px-8  rounded-full font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
