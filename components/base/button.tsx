import tailshake from "tailshake";
import { ReactNode, MouseEvent } from "react";
import cn from "classnames";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  color: "primary" | "secondary";
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const SmallButton = (props: ButtonProps) => {

  const baseClassname = "whitespace-nowrap hover:text-primary text-[14px] sm:text-[16px] inline-flex items-center px-4 justify-center font-helvetica  py-3 border border-transparent rounded-full shadow-sm  font-bold ";

  const isPrimary = props.color === "primary";
  const isSecondary = props.color === "secondary";
  const isDisabled = props.disabled;

  // text-white bg-primary  hover:bg-secondary
  const colorClassname = cn(
    { "bg-transparent text-white": isPrimary },
    { "hover:bg-transparent": (isPrimary && !isDisabled) },

    { "bg-gray-50 border-secondary border-2 text-secondary ": isSecondary },
    { "hover:bg-transparent hover:text-primary": isSecondary && !isDisabled },
  );


  const mergedClassname = tailshake(baseClassname, colorClassname, props.className);
  return (
    <button
      className={mergedClassname}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const SmallButtonOrange = (props: ButtonProps) => {

  const baseClassname = "whitespace-nowrap hover:text-primary text-[16px] inline-flex items-center  justify-center font-helvetica  py-3 border border-none rounded-full  font-semi-bold ";

  const isPrimary = props.color === "primary";
  const isSecondary = props.color === "secondary";
  const isDisabled = props.disabled;

  // text-white bg-primary  hover:bg-secondary
  const colorClassname = cn(
    { "bg-transparent text-primary": isPrimary },
    { "hover:bg-transparent": (isPrimary && !isDisabled) },

    { "bg-gray-50 border-secondary border-2 text-secondary ": isSecondary },
    { "hover:bg-transparent hover:text-primary": isSecondary && !isDisabled },
  );


  const mergedClassname = tailshake(baseClassname, colorClassname, props.className);
  return (
    <button
      className={mergedClassname}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const Button = (props: ButtonProps) => {
  const baseClassname = "rounded-lg px-4 md:px-8 py-2 shadow hover:shadow-sm text-[14px] sm:text-[16px] font-helvetica";

  const isPrimary = props.color === "primary";
  const isSecondary = props.color === "secondary";
  const isDisabled = props.disabled;

  const colorClassname = cn(
    { "bg-primary text-[#2A2A2A] ": isPrimary },
    { "hover:bg-secondary]": (isPrimary && !isDisabled) },

    { "bg-[#FDBB10] border-secondary border-2 text-secondary ": isSecondary },
    { "hover:bg-secondary hover:text-white": isSecondary && !isDisabled },
  );


  const mergedClassname = tailshake(baseClassname, colorClassname, props.className);
  return (
    <button
      className={mergedClassname}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const HeaderButton = (props: ButtonProps) => {
  const baseClassname = "rounded-lg px-12 md:px-5 py-1 shadow hover:shadow-sm text-[10px] font-helvetica w-20 ";

  const isPrimary = props.color === "primary";
  const isSecondary = props.color === "secondary";
  const isDisabled = props.disabled;

  const colorClassname = cn(
    { "bg-primary text-[#2A2A2A]": isPrimary },
    { "hover:bg-secondary": (isPrimary && !isDisabled) },

    { "bg-[#FDBB10] border-secondary border-2 text-secondary": isSecondary },
    { "hover:bg-secondary hover:text-white": isSecondary && !isDisabled },
  );


  const mergedClassname = tailshake(baseClassname, colorClassname, props.className);
  return (
    <button
      className={mergedClassname}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const BookingButton = (props: ButtonProps) => {
  const baseClassname = "rounded-lg px-12 md:px-5  py-1 shadow hover:shadow-sm text-[10px] font-helvetica";

  const isPrimary = props.color === "primary";
  const isSecondary = props.color === "secondary";
  const isDisabled = props.disabled;

  const colorClassname = cn(
    { "bg-gray-400 text-gray-700 cursor-not-allowed": isDisabled },

    { "bg-primary text-[#2A2A2A]": isPrimary },
    { "hover:bg-secondary hover:text-gray-400": (isPrimary && !isDisabled) },

    { "bg-[#FDBB10] border-secondary border-2 text-secondary": isSecondary },
    { "hover:bg-secondary hover:text-white": isSecondary && !isDisabled },

  );

  const mergedClassname = tailshake(baseClassname, colorClassname, props.className);
  return (
    <button
      className={mergedClassname}
      disabled={isDisabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};


export const LongButton = (props: ButtonProps) => {
  const baseClassname = "rounded-lg px-4 md:px-5 py-2 shadow hover:shadow-sm text-[14px] font-helvetica disabled:opacity-60 whitespace-nowrap";

  const isPrimary = props.color === "secondary";
  const isSecondary = props.color === "secondary";
  const isDisabled = props.disabled;

  const colorClassname = cn(
    { "bg-primary text-[#09090B]": isPrimary },
    { "hover:bg-secondary": (isPrimary && !isDisabled) },

    { "bg-[#ffffff] border-secondary  text-background ": isSecondary },
    { "hover:bg-primary hover:text-background": isSecondary && !isDisabled },
  );

  const mergedClassname = tailshake(baseClassname, colorClassname, props.className);
  return (
    <button
      className={mergedClassname}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};


export const SquareButton = (props: ButtonProps) => {
// const baseClassname = "rounded-full px-4 md:px-10 py-3 shadow hover:shadow-sm text-lg disabled:opacity-60 whitespace-nowrap";
   const baseClassname = "whitespace-nowrap hover:text-secondary text-[16px] inline-flex items-center justify-center font-helvetica  py-3 border border-none   font-bold ";

  const isPrimary = props.color === "primary";
  const isSecondary = props.color === "secondary";
  const isDisabled = props.disabled;

  const colorClassname = cn(
    { "bg-transparent text-primary": isPrimary },
    { "hover:bg-transparent": (isPrimary && !isDisabled) },

    { "bg-[] border-secondary border-2 text-secondary ": isSecondary },
    { "hover:bg-transparent hover:text-white": isSecondary && !isDisabled },
  );

  const mergedClassname = tailshake(baseClassname, colorClassname, props.className);

  return (
    <button
      type="submit"
      className={mergedClassname}>
      {props.children}
    </button>
  );
};

export default Button;
