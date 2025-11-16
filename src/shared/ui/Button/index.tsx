import { type ButtonHTMLAttributes, type FC } from "react";
import s from "./Button.module.css";
import cn from "classnames";
import { Spinner } from "../Spinner";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  full?: boolean;
};

export const Button: FC<Props> = ({ loading, full, children, ...props }) => {
  const buttonClasses = cn({
    [s.button]: true,
    [s.disabled]: props.disabled,
    [s.full]: full,
  });
  return (
    <button className={buttonClasses} {...props}>
      {!loading && children}

      {loading && <Spinner />}
    </button>
  );
};
