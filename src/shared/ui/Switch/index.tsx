import { useState, type FC } from "react";
import s from "./Switch.module.css";
import cn from "classnames";

type Props = {
  checked?: boolean;
  onToggle?: () => void;
};

export const Switch: FC<Props> = ({ checked, onToggle }) => {
  const [active, setActive] = useState(checked);

  const toggleSwitch = () => {
    setActive((p) => !p);
    onToggle?.();
  };
  const circleClasses = cn({
    [s.circle]: true,
    [s.active]: active,
  });
  return (
    <div className={s.container} onClick={toggleSwitch}>
      <div className={circleClasses} />
    </div>
  );
};
