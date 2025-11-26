import { Button, Input } from "@/shared/ui";
import { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onChangeValue = (key: string, value: string) => {
    setValues((p) => ({ ...p, [key]: value }));
  };

  console.log(values);

  return (
    <>
      <Input
        title={"Username"}
        value={values.username}
        onChange={(e) => onChangeValue("username", e.target.value)}
        placeholder="Input your username"
      />
      <Input
        title={"Password"}
        value={values.password}
        onChange={(e) => onChangeValue("password", e.target.value)}
      />

      <Button full onClick={() => console.log("login")}>
        Login
      </Button>
    </>
  );
};

export default Login;
