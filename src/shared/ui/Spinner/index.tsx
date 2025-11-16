import type { FC } from "react";
import s from "./Spinner.module.css";

type Props = {
  size?: number;
};

export const Spinner: FC<Props> = ({ size = 20 }) => {
  return (
    <div
      className={s.spinner}
      style={{ height: `${size}px`, width: `${size}px` }}
    />
  );
};
