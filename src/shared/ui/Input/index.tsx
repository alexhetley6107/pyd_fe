import type { ChangeEventHandler, FC, InputHTMLAttributes } from "react";
import s from "./Input.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  title?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input: FC<Props> = ({ title, value, onChange }) => {
  return (
    <div className={s.wrapper}>
      <p>{title}</p>
      <input value={value} onChange={onChange} />
    </div>
  );
};
