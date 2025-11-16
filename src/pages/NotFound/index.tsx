import { Button } from "@/shared/ui";
import s from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
import { RouterNames } from "@/shared/constants";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className={s.text}>Page not found</p>
        <Button onClick={() => navigate(RouterNames.BASE)}>Go Back</Button>
      </div>
    </div>
  );
};

export default NotFound;
