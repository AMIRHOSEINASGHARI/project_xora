import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import Image from "next/image";

import clsx from "clsx";

import Marker from "../shared/Marker";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: string;
  href?: string;
  containerClassName?: string;
};

const Button: FC<ButtonProps> = ({
  icon,
  children,
  href,
  containerClassName,
  ...props
}: ButtonProps) => {
  const Inner = () => (
    <>
      <div className="flex items-center relative min-h-[60px] px-4 g4 rounded-2xl overflow-hidden inner-before group-hover:before:opacity-100">
        <span className="absolute -left-[1px]">
          <Marker />
        </span>
        {icon && (
          <Image
            src={icon}
            alt="circle"
            width={40}
            height={40}
            className="size-10 mr-5 z-4"
          />
        )}
        <span className="uppercase text-p1 base-bold z-4">{children}</span>
      </div>
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative p-0.5 g5 shadow-500 group rounded-2xl",
        containerClassName
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx("relative p-0.5 g5 shadow-500 group rounded-2xl")}
      {...props}
    >
      <Inner />
    </button>
  );
};

export default Button;
