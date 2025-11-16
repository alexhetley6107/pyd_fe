import { type ButtonHTMLAttributes, type FC } from "react";
import s from "./Button.module.css";
import cn from "classnames";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  full?: boolean;
};

export const Button: FC<Props> = ({ ...props }) => {
  const buttonClasses = cn({
    [s.button]: true,
    [s.disabled]: props.disabled,
    [s.loading]: props.loading,
    [s.full]: props.full,
  });
  return (
    <button {...props} className={buttonClasses}>
      {props.children}
    </button>
  );
};
