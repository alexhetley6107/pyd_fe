import { Button } from "@/shared/ui";

const Login = () => {
  return (
    <div>
      <Button full onClick={() => console.log("login")}>
        Login
      </Button>
    </div>
  );
};

export default Login;
